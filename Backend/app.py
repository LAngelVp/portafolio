import configparser
import ssl
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

# Desactivar la verificación del certificado SSL (solo para desarrollo)
ssl._create_default_https_context = ssl._create_unverified_context

# Configuración de Flask
app = Flask(__name__)
CORS(app)

# Leer configuración
def load_config():
    config = configparser.ConfigParser()
    config_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'config.ini')
    print(f"Ruta del archivo de configuración: {config_path}")
    config.read(config_path)
    return config

config = load_config()

# Obtener la configuración de SendGrid
try:
    settings = config["SETTINGS"]
    API_KEY = settings.get("APIKEY")
    TO_EMAIL = settings.get("TO")  # Asume que solo hay un destinatario
except KeyError as e:
    raise RuntimeError(f"Configuración faltante en el archivo de configuración: {e}")

@app.route('/api/enviarcorreo', methods=['POST'])
def send_mail():
    data = request.get_json()
    
    email = data.get('email')
    subject = data.get('asunto')
    context = data.get('contexto')
    name = data.get('nombre')
    phone = data.get('numtelefono')

    # Validar datos recibidos
    if not all([email, subject, context, name, phone]):
        return jsonify({'error': 'Todos los campos son requeridos.'}), 400

    if API_KEY and email and TO_EMAIL:
        message = Mail(
            from_email=email,
            to_emails=TO_EMAIL,
            subject=subject,
            plain_text_content=f'Nombre: {name}\nNúmero de teléfono: {phone}\n\n{context}'
        )
        try:
            sg = SendGridAPIClient(API_KEY)
            response = sg.send(message)
            return jsonify({'message': 'Correo enviado exitosamente'}), response.status_code
        except Exception as e:
            print(f"Error al enviar el correo: {e}")
            return jsonify({'error': f'Error al enviar correo: {str(e)}'}), 500
    else:
        print("Faltan datos para enviar el correo.")
        return jsonify({'error': 'Faltan datos para enviar el correo.'}), 400

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

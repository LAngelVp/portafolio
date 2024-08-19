import configparser
import ssl
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import os
from flask import Flask, request, jsonify
from flask_cors import CORS

ssl._create_default_https_context = ssl._create_unverified_context

app = Flask(__name__)
CORS(app)

@app.route('/api/enviarcorreo', methods=['POST'])
def sendMailUsingSendGrid():
    config = configparser.ConfigParser()
    config_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'config.ini')
    config.read(config_path)

    try:
        settings = config["SETTINGS"]
    except KeyError:
        return jsonify({'error': 'No se pudo cargar la configuración de SendGrid'}), 500

    API = settings.get("APIKEY", None)
    to_emails = settings.get("TO", "")

    data = request.get_json()
    
    email = data.get('email')
    subject = data.get('asunto')
    context = data.get('contexto')
    name = data.get('nombre')
    phone = data.get('numtelefono')
    html_content = f'Nombre: {name}<br>Número de teléfono: {phone}<br>Contexto: {context}'

    # Validar los datos recibidos y la configuración de SendGrid
    if not API or not to_emails:
        return jsonify({'error': 'Faltan datos de configuración para enviar el correo.'}), 400

    if not all([email, subject, context, name, phone]):
        return jsonify({'error': 'Todos los campos son requeridos.'}), 400

    message = Mail(
        from_email=email,
        to_emails=to_emails,
        subject=subject,
        html_content=html_content
    )

    try:
        sg = SendGridAPIClient(API)
        response = sg.send(message)
        return jsonify({'message': 'Correo enviado exitosamente'}), response.status_code
    except Exception as e:
        return jsonify({'error': f'Error al enviar correo: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)

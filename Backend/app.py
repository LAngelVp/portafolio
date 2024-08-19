import configparser
import ssl
ssl._create_default_https_context = ssl._create_unverified_context
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

# Crear el objeto ConfigParser
config = configparser.ConfigParser()

# Obtener la ruta del directorio donde se ejecuta el script
current_directory = os.path.dirname(os.path.abspath(__file__))
ruta_settings = os.path.join(current_directory, 'config.ini')
print(f"Ruta del directorio donde se ejecuta el script: {ruta_settings}")

# Leer el archivo config.ini
config.read(ruta_settings)

# Inicializar Flask
app = Flask(__name__)
CORS(app)
# CORS(app, resources={r"/api/*": {"origins": "https://portafolio-luisperez.vercel.app"}})


# Intentar obtener la sección SETTINGS
try:
    settings = config["SETTINGS"]
except KeyError:
    print("La sección 'SETTINGS' no se encontró en config.ini")
    settings = {}

# Obtener los valores necesarios de la configuración
API = settings.get("APIKEY", None)
print(API)
from_email = settings.get("FROM", None)
to_emails = settings.get("TO", "").split(",")  # Manejar múltiples destinatarios separados por comas

@app.route('/api/enviarcorreo', methods=['POST'])
def sendMailUsingSendGrid():
    # Leer los datos de la solicitud
    data = request.get_json()
    email = data.get('email')
    asunto = data.get('asunto')
    contexto = data.get('contexto')
    nombre = data.get('nombre')
    numtelefono = data.get('numtelefono')

    # Validar los datos recibidos
    if not email or not asunto or not contexto or not nombre or not numtelefono:
        return jsonify({'error': 'Todos los campos son requeridos.'}), 400

    # Verificar los valores necesarios
    if API and from_email and len(to_emails) > 0:
        message = Mail(
            from_email,
            to_emails=email,
            subject=asunto,
            plain_text_content=f'Nombre: {nombre}\nNúmero de teléfono: {numtelefono}\n\n{contexto}'
        )
        try:
            sg = SendGridAPIClient(API)
            response = sg.send(message)
            print(response.status_code)
            print(response.body)
            print(response.headers)
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
    



    



# # Enviar el correo usando SendGrid
# sendMailUsingSendGrid(API, from_email, to_emails, subject, html_content)

# @app.route('/api/enviarcorreo', methods=['POST'])
# def enviar_correo():
#     data = request.get_json()
#     email = data.get('email')
#     asunto = data.get('asunto')
#     contexto = data.get('contexto')
#     nombre = data.get('nombre')
#     numtelefono = data.get('numtelefono')

#     if not email or not asunto or not contexto or not nombre or not numtelefono:
#         return jsonify({'error': 'Todos los campos son requeridos.'}), 400

#     message = Mail(
#         from_email='neal.ocaffry@gmail.com',  # Tu dirección de correo electrónico
#         to_emails=email,  # Dirección del destinatario
#         subject=asunto,
#         plain_text_content=f'Nombre: {nombre}\nNúmero de teléfono: {numtelefono}\n\n{contexto}'
#     )
#     try:
#         response = sg.send(message)
#         return jsonify({'message': 'Correo enviado exitosamente'}), response.status_code
#     except sendgrid.exceptions.SendGridException as e:
#         return jsonify({'error': f'Error al enviar correo: {str(e)}'}), 500
#     except Exception as e:
#         return jsonify({'error': f'Error inesperado: {str(e)}'}), 500

# if __name__ == '__main__':
#     port = int(os.environ.get('PORT', 5000))
#     app.run(host='0.0.0.0', port=port)






# from flask import Flask, request, jsonify
# import sendgrid
# from sendgrid.helpers.mail import Mail
# import os
# from dotenv import load_dotenv, find_dotenv

# dotenv_path = os.path.join(os.path.dirname(__file__), 'sendgrid.env')
# # Cargar las variables de entorno desde el archivo .env
# load_dotenv(dotenv_path)

# app = Flask(__name__)

# # Configuración de SendGrid
# SENDGRID_API_KEY = os.getenv('SENDGRID_API_KEY')
# if not SENDGRID_API_KEY:
#     raise ValueError("La clave API de SendGrid no está configurada en las variables de entorno.")
# sg = sendgrid.SendGridAPIClient(api_key=SENDGRID_API_KEY)



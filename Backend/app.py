import configparser
import ssl
ssl._create_default_https_context = ssl._create_unverified_context
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import os
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# def sendMailUsingSendGrid(API,from_email,to_emails,subject,html_content):
@app.route('/api/enviarcorreo', methods=['POST'])
def sendMailUsingSendGrid():
    config = configparser.ConfigParser()
    config_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'config.ini')
    config.read(config_path)

    try:
        settings = config["SETTINGS"]
    except:
        settings = {}

    API = settings.get("APIKEY",None)
    to_emails = settings.get("TO","")

    data = request.get_json()
    
    email = data.get('email')
    subject = data.get('asunto')
    context = data.get('contexto')
    name = data.get('nombre')
    phone = data.get('numtelefono')
    html_content = f'Nombre:{name} \n Numero de telefono: {phone} \n {context}'

    # Validar datos recibidos
    if not all([email, subject, context, name, phone]):
        return jsonify({'error': 'Todos los campos son requeridos.'}), 400

    if API!=None and len(to_emails)>0:
        message = Mail(email,to_emails,subject,html_content)
        try:
            sg = SendGridAPIClient(API)
            response = sg.send(message)
            print(response.status_code)
            print(response.body)
            print(response.headers)
        except Exception as e:
            print(e.message)




# import configparser
# import ssl
# import os
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from sendgrid import SendGridAPIClient
# from sendgrid.helpers.mail import Mail

# # Configuración de SSL para desarrollo (desactivar la verificación del certificado)
# ssl._create_default_https_context = ssl._create_unverified_context

# # Configuración de Flask
# app = Flask(__name__)
# CORS(app)

# # Leer configuración
# def load_config():
#     config = configparser.ConfigParser()
#     config_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'config.ini')
#     print(f"Ruta del archivo de configuración: {config_path}")
#     config.read(config_path)
#     return config

# config = load_config()

# # Obtener la configuración de SendGrid
# try:
#     settings = config["SETTINGS"]
#     API_KEY = settings.get("APIKEY")
#     TO_EMAIL = settings.get("TO")  # Asume que solo hay un destinatario
# except KeyError as e:
#     raise RuntimeError(f"Configuración faltante en el archivo de configuración: {e}")

# @app.route('/api/enviarcorreo', methods=['POST'])
# def send_mail():
#     data = request.get_json()
    
#     email = data.get('email')
#     subject = data.get('asunto')
#     context = data.get('contexto')
#     name = data.get('nombre')
#     phone = data.get('numtelefono')

#     # Validar datos recibidos
#     if not all([email, subject, context, name, phone]):
#         return jsonify({'error': 'Todos los campos son requeridos.'}), 400

#     if API_KEY and email and TO_EMAIL:
#         message = Mail(
#             from_email=email,
#             to_emails=TO_EMAIL,
#             subject=subject,
#             html_content=f'<p>Nombre: {name}</p><p>Número de teléfono: {phone}</p><p>{context}</p>'
#         )
#         try:
#             sg = SendGridAPIClient(API_KEY)
#             response = sg.send(message)
#             return jsonify({'message': 'Correo enviado exitosamente'}), response.status_code
#         except Exception as e:
#             # Registrar el error
#             print(f"Error al enviar el correo: {e}")
#             return jsonify({'error': f'Error al enviar correo: {str(e)}'}), 500
#     else:
#         print("Faltan datos para enviar el correo.")
#         return jsonify({'error': 'Faltan datos para enviar el correo.'}), 400


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
def send_mail():
    try:
        config = configparser.ConfigParser()
        config_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'config.ini')
        config.read(config_path)

        settings = config["SETTINGS"]
        API = settings.get("APIKEY", None)
        to_emails = settings.get("TO", "")

        data = request.get_json()
        email = data.get('email')
        subject = data.get('asunto')
        context = data.get('contexto')
        name = data.get('nombre')
        phone = data.get('numtelefono')
        html_content = f'Nombre: {name}<br>Número de teléfono: {phone}<br>Contexto: {context}'

        if API and to_emails:
            message = Mail(
                from_email=email,
                to_emails=to_emails,
                subject=subject,
                html_content=html_content
            )
            sg = SendGridAPIClient(API)
            response = sg.send(message)
            return jsonify({'message': 'Correo enviado exitosamente'}), response.status_code
        else:
            raise ValueError("Configuración de APIKEY o destinatario faltante")

    except Exception as e:
        print(f"Error al enviar el correo: {str(e)}")
        return jsonify({'error': f'Error al enviar correo: {str(e)}'}), 500

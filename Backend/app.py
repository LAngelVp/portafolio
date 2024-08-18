from flask import Flask, request, jsonify
import sendgrid
from sendgrid.helpers.mail import Mail
import os

app = Flask(__name__)

# Configuración de SendGrid
SENDGRID_API_KEY = os.getenv('SENDGRID_API_KEY')
if not SENDGRID_API_KEY:
    raise ValueError("La clave API de SendGrid no está configurada en las variables de entorno.")
sg = sendgrid.SendGridAPIClient(api_key=SENDGRID_API_KEY)

@app.route('/api/enviarcorreo', methods=['POST'])
def enviar_correo():
    data = request.get_json()
    email = data.get('email')
    asunto = data.get('asunto')
    contexto = data.get('contexto')
    nombre = data.get('nombre')
    numtelefono = data.get('numtelefono')

    if not email or not asunto or not contexto or not nombre or not numtelefono:
        return jsonify({'error': 'Todos los campos son requeridos.'}), 400

    message = Mail(
        from_email='neal.ocaffry@gmail.com',  # Tu dirección de correo electrónico
        to_emails=email,  # Dirección del destinatario
        subject=asunto,
        plain_text_content=f'Nombre: {nombre}\nNúmero de teléfono: {numtelefono}\n\n{contexto}'
    )
    try:
        response = sg.send(message)
        return jsonify({'message': 'Correo enviado exitosamente'}), response.status_code
    except sendgrid.exceptions.SendGridException as e:
        return jsonify({'error': f'Error al enviar correo: {str(e)}'}), 500
    except Exception as e:
        return jsonify({'error': f'Error inesperado: {str(e)}'}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

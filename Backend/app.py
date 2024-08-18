from flask import Flask, request, jsonify
import sendgrid
from sendgrid.helpers.mail import Mail
import os

app = Flask(__name__)

# Configuración de SendGrid
SENDGRID_API_KEY = os.getenv('SENDGRID_API_KEY')
sg = sendgrid.SendGridAPIClient(api_key=SENDGRID_API_KEY)

@app.route('/api/enviar-correo', methods=['POST'])
def enviar_correo():
    data = request.get_json()
    email = data.get('email')
    asunto = data.get('asunto')
    contexto = data.get('contexto')
    nombre = data.get('nombre')
    numtelefono = data.get('numtelefono')

    message = Mail(
        from_email='neal.ocaffry@gmail.com',  # Tu dirección de correo electrónico
        to_emails=email,  # Dirección del destinatario
        subject=asunto,
        plain_text_content=f'Nombre: {nombre}\nNúmero de teléfono: {numtelefono}\n\n{contexto}'
    )
    try:
        response = sg.send(message)
        return jsonify({'message': 'Correo enviado exitosamente'}), response.status_code
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configuración de Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'angelvallejop9610@gmail.com'
app.config['MAIL_PASSWORD'] = 'MyNameIs@ngel311096$Gmail'
app.config['MAIL_DEFAULT_SENDER'] = 'angelvallejop9610@gmail.com'

mail = Mail(app)

@app.route('/api/enviar-correo', methods=['POST'])
def enviar_correo():
    data = request.get_json()
    email = data.get('email')
    asunto = data.get('asunto')
    contexto = data.get('contexto')
    nombre = data.get('nombre')
    numtelefono = data.get('numtelefono')

    msg = Message(subject=asunto, recipients=['destinatario@example.com'], body=f'Nombre: {nombre}\nNúmero de teléfono: {numtelefono}\n\n{contexto}')
    msg.reply_to = email

    try:
        mail.send(msg)
        return jsonify({'message': 'Correo enviado exitosamente'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

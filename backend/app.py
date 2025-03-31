from flask import Flask
from flask_cors import CORS
from models import db
from schemas import ma
from routes import api
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)
db.init_app(app)
ma.init_app(app)

app.register_blueprint(api)

@app.route("/")
def home():
    return "🚀 Backend mit SQLAlchemy & OpenAI läuft erfolgreich!"

if __name__ == '__main__':
    app.run(debug=True, port=5000)

from flask import Flask, jsonify, render_template
from .extensions import db, ma, jwt
from config import Config

def create_app():
    # Flask-App initialisieren
    app = Flask(__name__)

    # Konfiguration laden
    app.config.from_object(Config)

    # Flask-Erweiterungen initialisieren
    db.init_app(app)
    ma.init_app(app)
    jwt.init_app(app)

    # Startseite (Index)
    @app.route("/")
    def index():
        return render_template("index.html")

    # API-Check-Endpunkt
    @app.route("/api")
    def api_overview():
        return jsonify({"msg": "🚀 API läuft, Endpunkte bald verfügbar!"})

    # Blueprints registrieren
    from .routes.auth import auth_bp
    from .routes.questions import questions_bp

    app.register_blueprint(auth_bp, url_prefix='/api')
    app.register_blueprint(questions_bp, url_prefix='/api')

    return app

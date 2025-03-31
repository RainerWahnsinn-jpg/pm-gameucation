from flask import Flask, jsonify, render_template
from .extensions import db, ma, jwt
from config import Config

def create_app():
    # Flask-App initialisieren
    app = Flask(__name__, static_folder='../frontend/dist', template_folder='../frontend/dist')

    # Konfiguration aus der Config-Klasse laden
    app.config.from_object(Config)

    # Flask-Erweiterungen initialisieren
    db.init_app(app)
    ma.init_app(app)
    jwt.init_app(app)

    # HTML-Frontend (deine schöne Startseite)
    @app.route("/")
    def index():
        # Zeigt die index.html-Seite aus dem Frontend an
        return render_template("index.html")

    # JSON API-Statusmeldung
    @app.route("/api")
    def api_status():
        return jsonify({"msg": "🚀 PM-Gameucation API läuft perfekt!"}), 200

    # Blueprints importieren (Endpunkte modular organisieren)
    from .routes.auth import auth_bp
    from .routes.questions import questions_bp

    # Blueprints registrieren unter '/api'
    app.register_blueprint(auth_bp, url_prefix='/api')
    app.register_blueprint(questions_bp, url_prefix='/api')

    return app

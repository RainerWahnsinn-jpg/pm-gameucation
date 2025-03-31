from flask import Flask
from .extensions import db, ma, jwt
from config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Extensions initialisieren
    db.init_app(app)
    ma.init_app(app)
    jwt.init_app(app)

    # Blueprints importieren
    from .routes.auth import auth_bp
    from .routes.questions import questions_bp

    # Blueprints registrieren
    app.register_blueprint(auth_bp, url_prefix='/api')
    app.register_blueprint(questions_bp, url_prefix='/api')

    return app

from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from app.extensions import db
from app.models.question import Question
from app.schemas.question_schema import QuestionSchema

# Blueprint definieren
questions_bp = Blueprint('questions', __name__)

# Marshmallow Schemas instanziieren
question_schema = QuestionSchema()
questions_schema = QuestionSchema(many=True)

# Alle Fragen abrufen (geschützter GET-Endpunkt)
@questions_bp.route('/questions', methods=['GET'])
@jwt_required()
def get_questions():
    # Fragen aus der Datenbank abfragen
    questions = Question.query.all()
    # Serialisieren und JSON zurückgeben
    return questions_schema.jsonify(questions), 200

# Neue Frage hinzufügen (geschützter POST-Endpunkt)
@questions_bp.route('/questions', methods=['POST'])
@jwt_required()
def add_question():
    # JSON-Daten aus Anfrage auslesen
    data = request.get_json()
    # Neue Frage erstellen und in DB speichern
    new_question = Question(**data)
    db.session.add(new_question)
    db.session.commit()
    # Serialisierte Frage als Antwort zurückgeben
    return question_schema.jsonify(new_question), 201

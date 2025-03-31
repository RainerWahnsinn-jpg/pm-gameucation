from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from ..extensions import db
from ..models.question import Question
from ..schemas.question_schema import QuestionSchema

questions_bp = Blueprint('questions', __name__)
question_schema = QuestionSchema()
questions_schema = QuestionSchema(many=True)

@questions_bp.route('/questions', methods=['GET'])
@jwt_required()
def get_questions():
    questions = Question.query.all()
    return questions_schema.jsonify(questions), 200

@questions_bp.route('/questions', methods=['POST'])
@jwt_required()
def add_question():
    data = request.get_json()
    new_question = Question(**data)
    db.session.add(new_question)
    db.session.commit()
    return question_schema.jsonify(new_question), 201

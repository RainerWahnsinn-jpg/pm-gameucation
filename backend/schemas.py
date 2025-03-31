from flask_marshmallow import Marshmallow
from models import User, Question

ma = Marshmallow()

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User

user_schema = UserSchema()
users_schema = UserSchema(many=True)

class QuestionSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Question

question_schema = QuestionSchema()
questions_schema = QuestionSchema(many=True)



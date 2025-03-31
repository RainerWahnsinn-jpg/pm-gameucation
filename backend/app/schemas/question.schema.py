from app.extensions import ma
from app.models.question import Question

class QuestionSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Question

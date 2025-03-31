from ..extensions import ma
from ..models.question import Question

class QuestionSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Question

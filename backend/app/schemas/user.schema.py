from extensions import ma
from models.user import User

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User

from flask import Blueprint, jsonify

api_bp = Blueprint('api', __name__)

@api_bp.route("/", methods=["GET"])
def api_index():
    return jsonify({"msg": "🚀 PM-Gameucation API läuft perfekt auf /api!"}), 200

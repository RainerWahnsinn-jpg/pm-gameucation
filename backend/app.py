from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "🚀 Backend läuft erfolgreich!"

@app.route("/api/v1/tasks")
def get_tasks():
    with open('data.json', 'r', encoding='utf-8') as file:
        tasks = json.load(file)
    return jsonify(tasks)

if __name__ == "__main__":
    app.run(debug=True)

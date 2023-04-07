from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["GET"])
def predict():
    return jsonify({
    }), 200

if __name__ == '__main__':
    app.run(port=3000, debug=True)
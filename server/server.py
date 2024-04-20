from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/api/test", methods=["GET"])
def test():
    return jsonify({"message": "Hello, World!"})


if __name__ == "__main__":
    app.run(debug=True, port=8080)
#server works for now, more can be added on in future if needed but dont think it will

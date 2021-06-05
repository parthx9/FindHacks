from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
CORS(app, support_credentials=True)


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/hacks', methods=['GET'])
def getMLHHacks():
    all_hacks = []
    with open('data.json') as data_file:
        all_hacks = json.load(data_file)

    return jsonify(
        hackathon=all_hacks
    )


@app.route('/<company>', methods=['GET'])
def getMLH(company):
    all_hacks = []
    with open('data.json') as data_file:
        all_hacks = json.load(data_file)

    return jsonify(
        hackathon=[hack for hack in all_hacks if hack["company"] == company]
    )


if __name__ == "__main__":
    app.run()

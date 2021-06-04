from requests import get
import time;
from multiprocessing import Pool

from flask import Flask
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app, support_credentials=True)
from flask import jsonify
import json


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/hacks',methods = ['GET'])
def getMLHHacks():

    f = open('data.json',)
    data = json.load(f)
    
    f.close()

    return jsonify(
        hackathon=data
    ) 

@app.route('/<company>',methods = ['GET'])
def getMLH(company):
    f = open('data.json',)
    data = json.load(f)
    f.close()
    data2 = []
    for i in data:
        if(i["company"]==company):
            data2.append(i)
    
    return jsonify(
        hackathon=data2
    ) 


if __name__=="__main__":
    app.run()
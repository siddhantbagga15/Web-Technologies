from flask import Flask
import joblib
import pandas as pd
from flask import request
from flask import after_this_request, json, jsonify

app = Flask(__name__)
@app.route('/', methods=['GET', 'POST'])
def hello_world():
    @after_this_request
    def add_header(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    # age = request.form.get('age')
    # weight = request.form.get('weight')
    # d = request.get_json()
    # print(d['age'])
    d = json.loads(request.data)
    age = d['age']
    weight = d['weight']
    res =  load(age, weight)
    resp = jsonify(res)
    # print(resp)
    return resp
    response = Flask.jsonify({'res': res})
    response.headers.add('Access-Control-Allow-Origin', '*')
    print('res', res)
    return response

def load(age, weight):
    clf = joblib.load("regr.pkl")
    x = pd.DataFrame([[age, weight]], columns=["Age", "Weight"])
    prediction = clf.predict(x)[0]
    return prediction

if __name__ == '__main__':
   app.run(debug = True)

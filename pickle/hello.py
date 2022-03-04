from flask import Flask
import joblib
import pandas as pd
from flask import request

app = Flask(__name__)
@app.route('/', methods=['GET', 'POST'])
def hello_world():
    age = request.form.get('age')
    weight = request.form.get('weight')
    return load(age, weight)

def load(age, weight):
    clf = joblib.load("regr.pkl")
    x = pd.DataFrame([[age, weight]], columns=["Age", "Weight"])
    prediction = clf.predict(x)[0]
    print(prediction)

if __name__ == '__main__':
   app.run()

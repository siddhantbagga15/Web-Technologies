from flask import Flask, render_template
import joblib
import pandas as pd
from flask import request

app = Flask(__name__)
@app.route('/', methods = ['GET', 'POST'])
def renderPage():
    if request.method == 'POST':
        age = request.form['age']
        weight = request.form['weight']
        bpValue = load(age, weight)
        return render_template('index.html', bpValue = bpValue)
    else:
        return render_template('index.html')

def load(age, weight):
    clf = joblib.load("regr.pkl")
    x = pd.DataFrame([[age, weight]], columns=["Age", "Weight"])
    prediction = clf.predict(x)[0]
    return prediction

if __name__ == '__main__':
   app.run(debug = True)

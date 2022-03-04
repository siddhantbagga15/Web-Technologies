from flask import Flask
import joblib
import pandas as pd

app = Flask(__name__)
@app.route('/')
def hello_world():
    return load()

def load():
    clf = joblib.load("regr.pkl")
    age = 18
    weight = 60
    x = pd.DataFrame([[age, weight]], columns=["Age", "Weight"])
    prediction = clf.predict(x)[0]
    print(prediction)

if __name__ == '__main__':
   app.run()

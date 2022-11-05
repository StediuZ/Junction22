from flask import Flask, render_template
app = Flask(__name__, static_folder='./front/static', static_url_path='/')

@app.route('/')
def hello_world():
    return render_template('index.html')
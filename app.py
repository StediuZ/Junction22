from moodapp import create_app
import os

env = os.environ.get('MOODAPP_ENV')
app = create_app('config.%sConfig' % env.capitalize())

if __name__ == '__main__':
    app.run()

#app = Flask(__name__, static_folder='./front/static', static_url_path='/')
# @app.route('/')
# def hello_world():
# return render_template('index.html')

from moodapp import create_app
import os

env = os.environ.get('MOODAPP_ENV')
app = create_app('config.%sConfig' % env.capitalize())

if __name__ == '__main__':
    app.run()

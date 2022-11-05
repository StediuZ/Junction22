import os
from moodapp import db, create_app
from moodapp.auth.models import User
from moodapp.logic.models import Mood

env = os.environ.get('MOODAPP_ENV')
app = create_app('config.%sConfig' % env.capitalize())


@app.shell_context_processor
def make_shell_context():
    return dict(app=app, db=db, Mood=Mood)

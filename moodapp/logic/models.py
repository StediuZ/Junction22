import datetime
from .. import db


class Mood(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    question = db.Column
    value = db.Column(db.Integer(), nullable=False)
    date = db.Column(db.DateTime(), default=datetime.datetime.now)

    def __init__(self, value=""):
        self.value = value

    def __repr__(self):
        return "<Mood: '{}'>".format(self.value)

import datetime
from .. import db


class Mood(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    date = db.Column(db.DateTime(), default=datetime.datetime.now)
    question = db.Column(db.String(255), nullable=False)
    answer = db.Column(db.String(255), nullable=False)
    output = db.Column(db.String(255), nullable=False)
    value = db.Column(db.Integer(), nullable=False)

    def __init__(self, question="", answer="", output="", value=""):
        self.question = question
        self.answer = answer
        self.output = output
        self.value = value

    def __repr__(self):
        return "<id: '{}'>".format(self.id)

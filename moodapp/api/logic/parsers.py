from flask_restful import reqparse
import datetime

mood_get_parser = reqparse.RequestParser()
mood_get_parser.add_argument(
    'start', type=datetime.date, location=['args', 'headers'])
mood_get_parser.add_argument(
    'end', type=datetime.date, location=['args', 'headers'])

mood_post_parser = reqparse.RequestParser()
mood_post_parser.add_argument(
    'question',
    type=str,
    required=True,
    help="Question is required",
    location=('json', 'values')
)
mood_post_parser.add_argument(
    'answer',
    type=str,
    required=True,
    help="Answer is required",
    location=('json', 'values')
)

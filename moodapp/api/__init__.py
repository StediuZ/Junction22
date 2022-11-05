from flask_restful import Api
from .logic.controllers import MoodApi

rest_api = Api()


def create_module(app, **kwargs):
    rest_api.add_resource(
        MoodApi,
        '/api/mood',
    )
    rest_api.init_app(app)

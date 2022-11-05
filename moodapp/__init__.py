from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def create_app(object_name):

    app = Flask(__name__, static_folder='../front/static',
                static_url_path='/', template_folder='../templates')
    app.config.from_object(object_name)
    db.init_app(app)

    from .logic import create_module as logic_create_module
    from .main import create_module as main_create_module
    from .api import create_module as api_create_module
    logic_create_module(app)
    main_create_module(app)
    api_create_module(app)
    return app

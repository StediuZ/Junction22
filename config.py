import os
import re
import psycopg2
from dotenv import load_dotenv

load_dotenv()
basedir = os.path.abspath(os.path.dirname(__file__))
env = os.environ.get('MOODAPP_ENV')


class Config(object):
    SECRET_KEY = os.environ.get('CONF_SECRET_KEY')


match env:
    case "prod":
        class ProdConfig(Config):
            SECRET_KEY = os.environ.get('PROD_SECRET_KEY')
            SQLALCHEMY_TRACK_MODIFICATIONS = False
            SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
            if SQLALCHEMY_DATABASE_URI and SQLALCHEMY_DATABASE_URI.startswith("postgres://"):
                SQLALCHEMY_DATABASE_URI = SQLALCHEMY_DATABASE_URI.replace(
                    "postgres://", "postgresql://", 1)
            con = psycopg2.connect(SQLALCHEMY_DATABASE_URI)
            cur = con.cursor()

    case "dev":
        class DevConfig(Config):
            DEBUG = True
            SECRET_KEY = os.environ.get('DEV_SECRET_KEY')
            SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
            if SQLALCHEMY_DATABASE_URI and SQLALCHEMY_DATABASE_URI.startswith("postgres://"):
                SQLALCHEMY_DATABASE_URI = SQLALCHEMY_DATABASE_URI.replace(
                    "postgres://", "postgresql://", 1)
            con = psycopg2.connect(SQLALCHEMY_DATABASE_URI)
            cur = con.cursor()

    case _:
        print("No environment found.\n")

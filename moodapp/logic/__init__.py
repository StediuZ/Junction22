def create_module(app, **kwargs):
    from .controllers import logic_blueprint
    app.register_blueprint(logic_blueprint)

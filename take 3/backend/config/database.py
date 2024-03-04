from flask_sqlalchemy import SQLAlchemy
from os import getenv

# Initialize SQLAlchemy with no settings
db = SQLAlchemy()

def setup_db(app):
    """
    Setup configuration for the SQLAlchemy database, binds the app with the database.
    """
    app.config['SQLALCHEMY_DATABASE_URI'] = getenv('DATABASE_URL', 'sqlite:///flight_tracker.db')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)

    # Create tables in the database (this is a convenience method for development purposes)
    with app.app_context():
        db.create_all()

from flask import Blueprint
from .itinerary_controller import itinerary_bp
from .user_controller import user_bp
from .flight_controller import flight_bp

api_bp = Blueprint('api_bp', __name__)

# Register Blueprints
api_bp.register_blueprint(itinerary_bp, url_prefix='/api')
api_bp.register_blueprint(user_bp, url_prefix='/api/users')
api_bp.register_blueprint(flight_bp, url_prefix='/api/flights')


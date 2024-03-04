from flask import Blueprint, request, jsonify
from ..models.database import db
from ..models.Itinerary import Itinerary
from flask_jwt_extended import jwt_required, get_jwt_identity

itinerary_bp = Blueprint('itinerary_bp', __name__)

# Create a new itinerary
@itinerary_bp.route('/itineraries', methods=['POST'])
@jwt_required()
def create_itinerary():
    user_id = get_jwt_identity()
    data = request.get_json()
    new_itinerary = Itinerary(
        name=data['name'],
        description=data.get('description', ''),
        start_date=data['start_date'],
        end_date=data.get('end_date'),
        user_id=user_id
    )
    db.session.add(new_itinerary)
    db.session.commit()
    return jsonify({"message": "Itinerary created successfully", "itinerary": new_itinerary.to_dict()}), 201

# Get all itineraries
@itinerary_bp.route('/itineraries', methods=['GET'])
def get_itineraries():
    itineraries = Itinerary.query.all()
    return jsonify([itinerary.to_dict() for itinerary in itineraries]), 200

# Get a single itinerary by ID
@itinerary_bp.route('/itineraries/<int:id>', methods=['GET'])
def get_itinerary(id):
    itinerary = Itinerary.query.get_or_404(id)
    return jsonify(itinerary.to_dict()), 200

# Update an itinerary
@itinerary_bp.route('/itineraries/<int:id>', methods=['PUT'])
@jwt_required()
def update_itinerary(id):
    user_id = get_jwt_identity()
    itinerary = Itinerary.query.get_or_404(id)
    if itinerary.user_id != user_id:
        return jsonify({"message": "Unauthorized to update this itinerary"}), 403
    data = request.get_json()
    itinerary.name = data.get('name', itinerary.name)
    itinerary.description = data.get('description', itinerary.description)
    itinerary.start_date = data.get('start_date', itinerary.start_date)
    itinerary.end_date = data.get('end_date', itinerary.end_date)
    db.session.commit()
    return jsonify({"message": "Itinerary updated successfully", "itinerary": itinerary.to_dict()}), 200

# Delete an itinerary
@itinerary_bp.route('/itineraries/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_itinerary(id):
    user_id = get_jwt_identity()
    itinerary = Itinerary.query.get_or_404(id)
    if itinerary.user_id != user_id:
        return jsonify({"message": "Unauthorized to delete this itinerary"}), 403
    db.session.delete(itinerary)
    db.session.commit()
    return jsonify({"message": "Itinerary deleted successfully"}), 204

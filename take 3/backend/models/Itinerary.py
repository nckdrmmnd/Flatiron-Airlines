from .database import db
from datetime import datetime

class Itinerary(db.Model):
    __tablename__ = 'itineraries'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=True)
    start_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    end_date = db.Column(db.DateTime, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    flights = db.relationship('Flight', secondary='itinerary_flights', back_populates='itineraries')

    def __init__(self, name, description, start_date, end_date, user_id):
        self.name = name
        self.description = description
        self.start_date = start_date
        self.end_date = end_date
        self.user_id = user_id

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'start_date': self.start_date.isoformat(),
            'end_date': self.end_date.isoformat() if self.end_date else None,
            'user_id': self.user_id
        }

# Association table for the many-to-many relationship between Itineraries and Flights
itinerary_flights = db.Table('itinerary_flights',
    db.Column('itinerary_id', db.Integer, db.ForeignKey('itineraries.id'), primary_key=True),
    db.Column('flight_id', db.Integer, db.ForeignKey('flights.id'), primary_key=True),
    db.Column('notes', db.Text, nullable=True)  # User submittable attribute
)

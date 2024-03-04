from .database import db
from sqlalchemy.orm import relationship

class Flight(db.Model):
    __tablename__ = 'flights'
    
    id = db.Column(db.Integer, primary_key=True)
    flight_number = db.Column(db.String(20), nullable=False)
    departure_airport = db.Column(db.String(100), nullable=False)
    arrival_airport = db.Column(db.String(100), nullable=False)
    departure_time = db.Column(db.DateTime, nullable=False)
    arrival_time = db.Column(db.DateTime, nullable=False)
    airline = db.Column(db.String(100), nullable=False)
    
    # Relationships
    itineraries = relationship("Itinerary", secondary="itinerary_flights", back_populates="flights")

    def __init__(self, flight_number, departure_airport, arrival_airport, departure_time, arrival_time, airline):
        self.flight_number = flight_number
        self.departure_airport = departure_airport
        self.arrival_airport = arrival_airport
        self.departure_time = departure_time
        self.arrival_time = arrival_time
        self.airline = airline

    def serialize(self):
        return {
            'id': self.id,
            'flight_number': self.flight_number,
            'departure_airport': self.departure_airport,
            'arrival_airport': self.arrival_airport,
            'departure_time': self.departure_time.isoformat(),
            'arrival_time': self.arrival_time.isoformat(),
            'airline': self.airline
        }

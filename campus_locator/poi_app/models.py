# poi_app/models.py
from django.db import models

class PointOfInterest(models.Model):
    CATEGORY_CHOICES = [
        ('Bike Parking', 'Bike Parking'),
        ('Water Refill', 'Water Refill'),
        ('Microwave', 'Microwave'),
        ('Quiet Study', 'Quiet Study'),
    ]

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    location = models.CharField(max_length=100)
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self):
        return f"{self.name} ({self.category})"

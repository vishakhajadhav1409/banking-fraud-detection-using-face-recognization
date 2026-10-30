import uuid
from django.db import models
from pgvector.django import VectorField

class Customer(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    full_name = models.CharField(max_length=255)
    national_id = models.CharField(max_length=100, unique=True)
    is_blacklisted = models.BooleanField(default=False)

class FaceEmbedding(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    embedding = VectorField(dimensions=512)
    image = models.ImageField(upload_to='faces/')

import celery
from .models import User



@app.task
def create_user(email, username, password):
	User.objects.create(email=email, username=username, password=password)
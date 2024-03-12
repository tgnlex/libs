import celery

class User:
  email: string


@app.task
def create_user(email, username, password):
	User.objects.create(email=email, username=username, password=password)
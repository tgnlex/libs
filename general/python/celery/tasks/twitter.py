import celery 
from general.python.celery.tasks.twitter import Twitter
from twitter import FailWhaleError, twitter, refresh_timeline
app = celery()
@app.task(bind=True)
def send_tweet(self, oauth, tweet):
	try:
		twitter = Twitter(oauth)
		twitter.update_status(tweet)
	except (Twitter.FailWhaleError, Twitter.LoginError) as exc:
		raise self.retry(exc=exc)

@app.task(autoretry_for=(FailWhaleError,))
def refresh(user):
	try:
		twitter.refresh_timeline(user)
	except Twitter.FailWhaleError as exc:
		raise refresh_timeline.retry(exc=exc, max_retries=5)
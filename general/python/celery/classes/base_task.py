import celery

class BaseTask(celery.Task):
	def on_failure(self, exc, task_id, args, kwargs, einfo):
		print('{0!r} failed: {1!r}'.format(task_id, exc))

### How to implement class ###
@app.task(base=BaseTask)
def task():
	print "hello world"
	raise KeyError()
	
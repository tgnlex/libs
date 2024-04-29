from celery import Celery
import tasks
app = Celery('tasks', backend='db+sqlite:///db.sqlite3')



if __name__ == '__main__':
  args = ['worker', '--loglevel=INFO']
	app.worker_main(argv=args)
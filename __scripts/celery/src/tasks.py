from main import app
from tasks.string import reverse


@app.task
def error_handler(request, exc, traceback):
    print('Task {0} raised exception :{1!r}\m{2!r}'.format(
      		request.id, exc, traceback))


@app.task 
reverse()
let worker;
function startWorker() {
  if (typeof(Worker) !== "undefined") {
    if (typeof(worker) == "undefined") {
      worker = new Worker("demo_workers.js");
    }
    worker.onmessage = function(event) {
      document.QuerySelector("#worker-output").innerHTML = event.data;
    };
  } else {
    document.QuerySelector("#worker-output").innerHTML = "Sorry! No Web Worker support.";
  }
}

function stopWorker() {
  worker.terminate();
  worker = undefined;
}
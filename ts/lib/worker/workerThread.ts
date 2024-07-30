import {Worker} from "worker-threads";

function createWorker(id: number, index: string, cb: () => any) {
  const worker = new Worker('./worker.js', { workerData: { id, index }})
  worker.on('error', (err) => { throw err } );
  worker.on('message', callback)
  return worker;
};

export {createWorker};

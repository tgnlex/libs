import * as EventEmitter from 'events';

const SSE = new EventEmitter();

function createEvent(event:, listener) {
  SSE.on(`${event}`, listener)
}

function emitEvent(event) {
  SSE.emit(`${event}`);
};

export {SSE, createEvent, emitEvent};

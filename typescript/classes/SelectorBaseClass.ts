export interface Selectors {
	select: {
	(selector: string): Selection;
	(element: EventTarget): Selection;
	}
}

export interface Event {
   eventType: string, 
   callback: () => Void;
}

interface Base extends Selectors {
  event: Event;
}


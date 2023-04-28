type Payload = { [key: string]: any };

interface Message {
  type: string;
  payload?: Payload | undefined;
}

type ListenerCallback = (data: Payload | undefined) => void;

interface Listener {
  eventType: string;
  callback: ListenerCallback;
}

class EventBus {
  private listeners: Listener[];

  constructor() {
    this.listeners = [];
    window.addEventListener("message", this.handleMessage.bind(this));
  }

  on(eventType: string, listener: ListenerCallback) {
    this.listeners.push({ eventType, callback: listener });
  }

  off(eventType: string, listener: ListenerCallback) {
    this.listeners = this.listeners.filter(
      (l) => l.eventType !== eventType || l.callback !== listener
    );
  }

  emit(eventType: string, data?: Payload, targetOrigin: string = "*") {
    const message: Message = { type: eventType };
    if (data) {
      message.payload = data;
    }
    window.postMessage(message, targetOrigin);
  }

  handleMessage(event: MessageEvent) {
    const message = event.data as Message;
    const listeners = this.listeners.filter(
      (l) => l.eventType === message.type
    );
    listeners.forEach((l) => l.callback(message.payload));
  }
}

// Create an instance of the event bus
const eventBus = new EventBus();
export { eventBus };

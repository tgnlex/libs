interface LogEntry { 
  logger?: string;
  description?: string;
  location?: string;
  level: string;
  module: string;
  message: string;
};

export {LogEntry};

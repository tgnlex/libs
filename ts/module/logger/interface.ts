interface LogEntry { 
  logger?: string;
  description?: string;
  location?: string;
  level: string;
  module: string;
  message: string;
};
interface Format { 
  name: string; 
  fmt: (entry: Entry) => string; 
};

interface LogLevels {  [key: string]: number };
interface Module { [module: string]: string };

interface LogOptions {
  logger?: string;
  description?: string;
  minLevels: Module;
  format: Format;
};

type FormatList = Format[]

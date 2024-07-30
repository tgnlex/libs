import {EventEmitter} from 'events';
import {LogOptions} from './interface/options.ts';
import {LogEntry} from './interface/entry.ts'
import {Logger} from './lib/service.ts';
import {modules} from './config/modules.ts'
import {StringBasic} from './config/format.ts';
import {JsonBasic, JsonVerbose} from './config/jsonFormat.ts';
const formats = [JsonBasic, JsonVerbose, StringBasic]
class LogManager extends EventEmitter {
  private options: LogOptions = {
    logger: "",
    description: "",
    minLevels: modules,
    format: Json
  }
  private consoleLoggerRegistered: boolean = false;
  public configure(options: LogOptions): LogManager {
    this.options = Object.assign({}, this.options, options);
    return this;
  }
  public getLogger(module: string): Logger {
    let name = this.options.logger;
    let description = this.options.description;
    let minLevel = 'none';
    let match = '';
    for (const key in this.options.minLevels) {
      if (module.startsWith(key) && key.length >= match.length) {
        minLevel = this.options.minLevels[key];
        match = key;
      }
    }
    return new Logger(this, module, minLevel, name, description);
  }
  public onLogEntry(listener: (logEntry: LogEntry) => void): LogManager {
    this.on('log', listener);
    return this;
  }
  public registerConsoleLogger(): LogManager {
    const fmt = this.options.activeFormat.fmt;
    if (this.consoleLoggerRegistered) return this;
    this.onLogEntry((logEntry) => {
      const message = fmt(logEntry);
      switch (logEntry.level) {
        case 'debug':
            console.debug(message);
            break;
        case 'trace':
            console.trace(message);
            break;
        case 'meta':
            console.trace(message);
            break;
        case 'signal':
            console.info(message);
            break;
        case 'event':
            console.info(message);
            break;
        case 'info':
            console.info(message);
            break;
        case 'notice':
            console.notice(message);
            break;
        case 'warn':
            console.warn(message);
            break;
        case 'error':
            console.error(message);
            break;
        case 'crit':
            console.error(message);
            break;
        case 'fatal':
            console.fatal(message);
            break;
        default: 
          console.log(`${logEntry.level} ${msg}`);
      }
    });
  this.consoleLoggerRegistered = true;
  return this;
  }
};

export {LogManager};

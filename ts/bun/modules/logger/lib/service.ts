import {EventEmitter as Emitter} from 'event';
import {LogLevels as Levels} from './interface/levels.ts';
import {LogEntry as Entry} from './interface/entry.ts';
import {logLevels} from '../config/levels.ts';
import {parseLevel} from './parser.ts';
import {Format} from '../interface/format.ts';
class Logger {
  private logManager: Emitter;
  private minLevel: number;
  private name?: string;
  private description?: string;
  private module: string;
  private format: Format;
  private readonly levels: Levels = logLevels;
    constructor(
        logManager: Emitter, 
        module: string, 
        minLevel: string, 
        name: string, 
        description: string,
    ) {
    this.logManager = logManager;
    this.module = module;
    this.minLevel = parseLevel(this.levels, minLevel);
    this.name = name;
    this.description = description;
  }
  public log(logLevel: string, message: string, ): void {
    const level = parseLevel(this.levels, logLevel);
    if (level < this.minLevel) return;
    const logEntry: Entry = {
      level: logLevel, 
      logger: this.name, 
      description: this.description,
      format: this.format,
      module: this.module, 
      message
    };
    const logError = new Error("");
    if (logError.stack) {
      const cla = logError.stack.split("\n");
      let idx = 1;
      while (idx < cla.length && cla[idx].includes("at Logger.Object.")) idx++;
      if (idx < cla.length) {
        logEntry.location = cla[idx].slice(cla[idx].indexOf("at ") + 3, cla[idx].length);
      }
    }
    this.logManager.emit('log', logEntry);
  }
  public debug (message: string): void  { this.log('debug',  message); }
  public trace (message: string): void  { this.log('trace',  message); }
  public meta  (message: string): void   { this.log('meta',   message); }
  public signal(message: string): void { this.log('signal', message); }
  public event (message: string): void  { this.log('event',  message); }
  public info  (message: string): void   { this.log('info',   message); }
  public notice(message: string): void { this.log('notice', message); }
  public warn  (message: string): void   { this.log('warn',   message); }
  public error (message: string): void  { this.log('error',  message); }
  public crit  (message: string): void   { this.log('crit',   message); }
  public fatal (message: string): void  { this.log('fatal',  message); }
}

export {Logger}

import {Format} from './format.ts';
interface LogOptions {
  logger?: string;
  description?: string;
  minLevels: { [module: string]: string };
  format: Format;
};

export {LogOptions};




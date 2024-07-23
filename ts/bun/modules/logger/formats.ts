import {FormatsList} from './interface/format.ts';
import {StringBasic} from './config/strFormat.ts';
import {JsonBasic, JsonVerbose} from './config/jsonFormat.ts';


const formats: FormatsList = [
  JsonBasic, 
  JsonVerbose, 
  StringBasic
];


export {formats};

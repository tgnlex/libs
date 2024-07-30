import {LogEntry as Entry} from '../interface/entry.ts';
import {DT} from '../../utils/datetime.ts';

class Basic {
  name: "Basic String"
  static fmt = (entry: Entry): string => {
    let time = `${DT.getDate()} || ${DT.getTime()} \n`;
    let mod = `Module: ${entry.module} || Format: ${this.name} \n`;
    let msg =  `[${entry.level}]: ${entry.message} \n`;
    let loc =  `Loc: ${entry.location}`;
    let data = `${time} ${mod} ${msg} ${loc}}`;
    return data;
  }
}


export {Basic}

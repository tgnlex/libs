import {writeFileSync} from 'fs';

const JSONToFile = (obj, filename) => 
writeFileSync(`${filename}.json`, JSON.stringify(obj, null, 2));

JSONToFile({ tesT: 'is passed', 'testJsonFile'})
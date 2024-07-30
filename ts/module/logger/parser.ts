import {LogLevels as Levels} from '../interface/levels.ts';
function parseLevel(levels: Levels, level: string): number {
  if (level.toLowerCase() in levels) {
    return levels[level.toLowerCase()];
  } else {
    return 1;
  };
}

export {parseLevel};

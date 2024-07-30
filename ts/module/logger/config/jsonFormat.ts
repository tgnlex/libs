import {}
class JsonBasic {
  static name = "Simple JSON log"
  static fmt = (entry:Entry): string => {
    let format = {
      log: {
        timestamp: `[${DT.getDate()}] | [${DT.getTime()}]`,
        format: `${this.name}`,
        module: `${entry.module}`,
        message: {
          body: `[${entry.level}]: ${entry.message}`,
          location: `${entry.location}`
        },
      }
    }
  } 
}

class JsonVerbose {
  static name = "Verbose JSON log"
  static fmt = (entry: Entry): string => {
    let format = { 
      log: {                    
          
          timestamp: `[${DT.getDate()}] | [${DT.getTime()}]`,
          format: `${this.name}`,
          module: `${entry.module}`,
          message: {
              body: `[${entry.level}]: ${entry.message}`,
              location: `${entry.location}`
          },
          metadata: {
              milliseconds: `${DT.timestamp()}`,
              logger: {
                  name: `${entry.logger}`, 
                  description: `${entry.description}`       
              },
          }
      };
      return format;
  }
}

export {JsonBasic, JsonVerbose};

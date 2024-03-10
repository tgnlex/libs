declare namespace Greeter {
  export interface TwoDimLengthReturnType {
  	    width: number;
  	    height: number; 
  }
  export interface NamedReturnType {
  	firstName: string;
  	lastName: string;
  }
  
  export const defaultName: string;
  export let defaultLength: number;
}
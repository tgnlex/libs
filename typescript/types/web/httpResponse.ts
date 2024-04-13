import type {HTTPHeaders} from './httpHeaders';
import {Cookies} from './cookie';
export type HTTPMethod = string 
  | "GET" 
  | "POST" 
  | "PUT" 
  | "PATCH" 
  | "HEAD"  
  | "TRACE"
  | "DELETE";



export interface HTTPResponse {
  url: URL;
  headers?: HTTPHeaders;
  cookies?: Cookies;   
  data?: any;
}
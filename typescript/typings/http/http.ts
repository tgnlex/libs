import type {HTTPHeaders} from './httpHeaders';
import {Cookies} from './cookie';
export type HTTPMethod = string 
  | "GET" 
  | "POST" 
  | "PUT" 
  | "PATCH" 
  | "DELETE";



export class HTTPRequest {
  url: URL;
  method: HTTPMethod;
  headers?: HTTPHeaders; 
  cookies?: Cookies;  
  data?: any;
}

export class HTTPResponse {
  url: URL;
  headers?: HTTPHeaders;
  cookies?: Cookies;   
  data?: any;
}
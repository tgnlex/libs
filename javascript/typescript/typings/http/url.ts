
export type URLSCHEME = string 
| "https://" 
| "http://"
| "api://" 
| "data://" 
| "file://" 
| "ftp://" 
| "ssh://" 
| "ws://" 
| "wss://"; 

export type TopDomain = ".com" | ".org" | ".gov" | ".blog" | ".info" | ".shop" | ".co" | ".net" | ".win";


export class QueryParam {
  key: string;
  value: string;
}
export type QueryParams = QueryParam[] | QueryParam;

export class QueryString {
  params: QueryParams;
} 
export class Domain {
  sub?: string; 
  main: string;
  top: TopDomain; 
}
export type IPAddress = string;
export type Local = "localhost";

export class URL {
  scheme: URLSCHEME;
  domain: Domain | Local | IPAddress;
  port?: number;
  path?: string;
  query?: QueryString;
  fragment?: string;
}



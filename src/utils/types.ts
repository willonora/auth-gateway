export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export enum AuthScheme {
  Bearer = 'Bearer',
  Basic = 'Basic',
}

export enum AuthType {
  JWT = 'jwt',
  OAuth2 = 'oauth2',
}

export enum TokenType {
  Access = 'access',
  Refresh = 'refresh',
}

export enum Scopes {
  read = 'read',
  write = 'write',
  admin = 'admin',
}

export interface Request {
  method: HttpMethod;
  headers: { [key: string]: string };
  body: string;
}
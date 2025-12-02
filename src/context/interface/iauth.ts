export interface IAuthContext {
  token: string;
  id: string;
  login: (access_token: string, id: number) => void;
  signout: () => void;
}
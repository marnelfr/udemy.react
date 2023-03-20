export type Auth = {
  token: string;
  data: {
    id: number;
    name: string;
    email: string;
    roles: string[];
  };
  refresh_token: string;
  refresh_token_expiration: number;
};

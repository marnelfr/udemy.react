type Auth = {
  id: number;
  name: string;
  email: string;
  roles: string[];
  token: string;
  refresh_token: string;
};

export default Auth;

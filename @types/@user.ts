export type T_User = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  selling_reputation: {
    name: string[];
    exp: number;
  };
  buying_reputation: {
    name: string[];
    exp: number;
  };
  total_purchased: number;
  total_sold: number;
};

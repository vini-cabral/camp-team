export interface UserInterface {
  gender: "female" | "male";
  name: {
    title: string;
    first: string;
    last: string;
  };
  dob: {
    age: number;
    date: Date;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
  };
  email: string;
  login: {
    username: string;
  };
  registered: {
    date: Date;
    age: number;
  };
  cell: string;
  phone: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export type UserInterfaceClient = Omit<UserInterface, "login"> & {
  username: string;
};

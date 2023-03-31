export interface UserInterface {
  gender: "female" | "male";
  name: {
    title: string;
    first: string;
    last: string;
  };
  registered: {
    date: Date;
    age: number;
  };
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

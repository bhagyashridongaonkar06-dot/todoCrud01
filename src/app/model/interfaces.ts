export interface ItodosArr {
  todoName: string;
  isCompleted: boolean;
  todoId: string
}[]

export interface IpostsArr {
  id: string;
  title: string;
  content: string;

}

export interface IStudent{
  id: string;
  fname: string;
  lname: string;
  email: string;
  contact: number;
  city: City;
}

export type City =
  'Pune' |
  'Mumbai' |
  'Nashik' |
  'Nagpur' |
  'Kolhapur'


  export interface IProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
  brand: string;
  isAvailable: boolean;
  image: string;
}
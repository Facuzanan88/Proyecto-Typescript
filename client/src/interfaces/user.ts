export default interface UserAtributtes {
  id?: string | undefined;
  name: string | undefined;
  lastname: string | undefined;
  photo: string | undefined;
  age: number | undefined;
  email: string | undefined;
  cel: number | undefined;
  street: string | undefined;
  number: number | undefined;
  apartment?: boolean | undefined;
  comment?: string | undefined;
}

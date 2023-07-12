const users: userAtributtes[] = [];

interface userAtributtes {
  id: string;
  name: string;
  subname: string;
  age: string;
  email: string;
  cel: number;
}

export function getAllUsers(): userAtributtes[] {
  return users;
}

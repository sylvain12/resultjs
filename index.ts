import { Err, Ok, Result, matchresult, UnwrapError } from './src/result';

interface User {
  name: String,
  email: string
}

const users: User[] = [
	{ name: 'kadjo', email: 'sylvainka12@gmail.com' },
	{ name: 'Doe', email: 'doe@gmail.com' },
	{ name: 'jane', email: 'jane@gmail.com' },
]; 

function getUser(email: string) {
  return users.find(user => user.email == email)
}

function getUserByEmail(email: string): Result<User, string> {
  const user = getUser(email); 
  if(user === undefined) {
    return new Err('User not found')
  }
  return new Ok(user)
}


const res = getUserByEmail('sylvainka12@gmail.com');
const { err, ok } = matchresult(res);

import { Err, Ok, Result, matchresult } from './result';

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
console.log(err, ok)
// res.unwrap()

//    ^?
// switch (res) {
//   case res.isOK():
//     console.log(res.errValue);
//     break;

//   case res.isErr():
//     console.log(res.okValue)
//     break;
// }

// res.isErr()

// if (res.isOK()) {
  // console.log(res.okValue)
//            ^?
// }else {
	// console.log(res.errValue);
	//          ^?
// }
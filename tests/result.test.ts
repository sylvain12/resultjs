import { describe, it, expect } from 'bun:test';
import { Err, Ok, Result, matchResult } from '../src/result';


	interface User{
		name: string,
		email: string,
	}

	const users: User[] = [
	{
		name: 'John Doe',
		email: 'jdoe@email.com',
	},
	{
		name: 'Jane Mary',
		email: 'jmary@email.com',
	},
	{
		name: 'Dan Smith',
		email: 'dsmith@email.com',
	},
];

	function getUserByEmail(email: string): Result<User, string> {
		const user = users.find(item => item.email === email);
		if(user === undefined) {
			return new Err('User not found')
		}
		return new Ok(user);
	}

describe('Result', () => {
	const existUser = getUserByEmail('jmary@email.com');
	const nonExistUser = getUserByEmail('smike@email.com');

	// Test for existing user
	it('Should be instance of Ok', () => {
		expect(existUser).toBeInstanceOf(Ok);
	});

	it('Should be true', () => {
		expect(existUser.isOK()).toBeTrue();
	});

	it('Should get user value', () => {
		expect(existUser.okValue?.name).toBe('Jane Mary');
	});

	// Test for non existing user
	it('Should be instance of Err', () => {
		expect(nonExistUser).toBeInstanceOf(Err);
	});

	it('Should be true', () => {
		expect(nonExistUser.isErr()).toBeTrue();
	});

	it('Should get error value', () => {
		expect(nonExistUser.errValue).toBe('User not found');
	});
});


describe('matchResult', () => {
	
	const email = 'dsmith@email.com';
	const user = getUserByEmail(email);
	const notFoundUser = getUserByEmail('notfound@email.com');

	const res = matchResult(user)
	const notFoundRes = matchResult(notFoundUser);

	it('Should get user name', () => {
		expect(res.ok?.name).toBe('Dan Smith');
	})

	it('Should be null for err value', () => {
		expect(res.err).toBeNull()
	});

	it('Should be null for ok value', () => {
		expect(notFoundRes.ok).toBe(null);
	});

	it('Should be: `User not found', () => {
		expect(notFoundRes.err).toBe('User not found');
	})

});

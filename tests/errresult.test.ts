import { Err, UnwrapError } from '../src/result';
import { describe, it, expect } from 'bun:test';

describe('Err', () => {
	const err = new Err('Result error');

	it('Should be instance of Err', () => {
		expect(err).toBeInstanceOf(Err);
	});

	it('Should be type of string', () => {
		expect(typeof err).toBeTypeOf('string');
	});

	it('Should be false when check if isOk', () => {
		expect(err.isOK()).toBeFalse();
	});

	it('Should be true when check if isErr', () => {
		expect(err.isErr()).toBeTrue()
	});

	it('Should be null when getting the ok value', () => {
		expect(err.ok()).toBeNull();
		expect(err.okValue).toBeNull();
	});

	it('Should contains value: "Result error"', () => {
		expect(err.err()).toBe('Result error');
		expect(err.errValue).toBe('Result error');
		expect(err.unwrapErr()).toBe('Result error');
	});

	it('Should throw an UnwrapError', () => {
		const fail = err.unwrap
		expect(fail).toThrow();
		// expect(fail).toThrow(new UnwrapError(`Called 'Result.unwrap()' on an 'Err' value: Error value`));
		// expect(err.unwrap).toThrow(/Called 'Result.unwrap()' on an 'Err' value: Result error/);
	});
});

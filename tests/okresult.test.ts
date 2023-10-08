
import {describe, it, expect} from 'bun:test'
import { Ok } from '../src/result';

describe('Ok', () => {
	const value = 'My ok class';
	const ok = new Ok<string>(value);

	it('Should be instance of Ok', () => {
		expect(ok).toBeInstanceOf(Ok);
	});

	it('Should have string type', () => {
		expect(typeof ok).toBeTypeOf('string')
	});

	it('Should be false when check isErr', () => {
		expect(ok.isErr()).toBeFalse();
	});

		it('Should be true when check if isOk', () => {
			expect(ok.isOK()).toBeTrue();
		});

		it('Should be bull when getting the err value', () => {
				expect(ok.errValue).toBeNull();
				expect(ok.err()).toBeNull();
		});

	it('Should contains value: My ok class', () => {
		expect(ok.okValue).toBe(value);
		expect(ok.ok()).toBe(value);
		expect(ok.unwrap()).toBe(value);
	});

	it('Should throw an error when trying to unwrap Err value', () => {
		const fail = ok.unwrapErr;
		expect(fail).toThrow();
	});
});
import {describe, it, expect} from 'bun:test';
import {Ok, Err, Result, UnwrapError, matchresult} from '../src/result'


describe('Ok', () => {
  const value = 'My ok class';
  const ok = new Ok<string>(value);

  it('Should be an instance of Ok', () => {
    expect(ok).toBeInstanceOf(Ok)
  });

  it('Should return true when check if object is Ok', () => {
		expect(ok.isOK()).toBeTrue();
	});

  it('Should return false when check if object is Err', () => {
    expect(ok.isErr()).toBeFalse();
  });

  it('Should return the Ok value', () => {
    expect(ok.okValue).toBe(value);
  });

  it('Should return null when trying to get errValue from Ok instance', () => {
    expect(ok.errValue).toBeNull();
  });

  it('Should throw an error when trying to unwrap Err value', () => {
    const fail = ok.unwrapErr;
    expect(fail).toThrow()
  })

});

describe('Err', () => {
  // Implement test for Err class
});

describe('Result', () => {
  // Implement test for Result
});

describe('UnwrapError', () => {
  // Implement test for UnwrapError
});

describe('matchresult', () => {
  // Implement Test for matchresult
})
import {describe, it, expect} from 'bun:test';
import {Ok, Err, Result, UnwrapError, matchresult} from '../src/result'


describe('Ok', () => {
  it('Should be an instance of Ok', () => {
    const ok = new Ok<string>('My ok class');
    expect(ok).toBeInstanceOf(Ok)
  });

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
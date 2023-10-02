
export class Ok<T> {
  private _value: T;
  constructor(value: T) {
    this._value = value
  }

  isOK() {return true}
  isErr() {return false}
  ok() {return this._value}
  err() {return null}  
  public get okValue() : T {
    return this._value
  }
  
}

export class Err<E> {
	private _value: E;

	constructor(value: E) {
		this._value = value;
	}
	isOK() {
		return false;
	}
	isErr() {
		return true;
	}
	ok() {
		return null;
	}
	err() {
		return this._value;
	}
	public get errValue(): E {
		return this._value;
	}
}

// type ExcludeOk = Exclude<>

export type Result<T, E> = Exclude<Ok<T>, { errValue: ''}> | Exclude<Err<E>, { okValue: '' }>;
//                          ^?
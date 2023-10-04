
export class Ok<T> {
	private _value: T;
	constructor(value: T) {
		this._value = value;
	}

	isOK() {
		return true;
	}
	isErr() {
		return false;
	}
	ok() {
		return this._value;
	}
	err() {
		return null;
	}
	public get okValue(): T {
		return this._value;
	}

	public get errValue(): null {
		return null;
	}

	// TODO
	unwrap(): T {
		return this._value
	}
	unwrapErr() {}
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

	public get okValue(): null {
		return null;
	}

	// TODO
	unwrap() {}
	unwrapErr(): E {
		return this._value;
	}
}

export type Result<T, E> = Ok<T> | Err<E>;


export const matchresult = <T, E>(result: Result<T, E>) => {
	return {
		ok: result.okValue,
		err: result.errValue,
	};
}

//------------------- Ok Class --------------------
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

	unwrap(): T {
		return this._value;
	}

	/**
	 * Throws an UnwrapError with a descriptive message when attempting to use unwrapErr on an 'Ok' value.
	 * @function
	 * @throws {UnwrapError} - An error indicating that 'unwrapErr()' was called on an 'Ok' value.
	 * @returns {void}
	 */
	unwrapErr() {
		throw new UnwrapError(`Called 'Result.unwrapErr()' on an 'Ok' value: ${this._value?.toString()}`);
	}
}

//------------------- Err Class --------------------
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

	unwrap(): void {
		throw new UnwrapError(`Called 'Result.unwrap()' on an 'Err' value: ${this._value?.toString()}`);
	}
	unwrapErr(): E {
		return this._value;
	}
}

//------------------- Result type --------------------
export type Result<T, E> = Ok<T> | Err<E>;


export const matchresult = <T, E>(result: Result<T, E>) => {
	return {
		ok: result.okValue,
		err: result.errValue,
	};
}


//------------------- Custom Errors --------------------
/**
 * Represents an error that occurs when attempting to unwrap a value.
 * @class
 * @extends Error
 * @param {string} message - The error message.
 */
class UnwrapError extends Error {
	constructor(message: string) {
		super(message);
	}
}

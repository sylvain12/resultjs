//------------------- Ok Class --------------------

/**
 * Represents the 'Ok' state of a Result object.
 * @class
 * @type {T} - 'Ok' value generic type
 */
export class Ok<T> {
	private _value: T;
	constructor(value: T) {
		this._value = value;
	}

	/**
	 * Checks if the Result is in 'Ok' state.
	 * @function
	 * @returns {boolean} - Return true for 'Ok' value
	 */
	isOK() {
		return true;
	}

	/**
	 * Checks if the Result is in 'Err' state.
	 * @function
	 * @returns {boolean} - Return false for 'Ok' value
	 */
	isErr() {
		return false;
	}

	/**
	 * Retrieves the wrapped value in the 'Ok' state.
	 * @function
	 * @returns {T} - 'Ok' value type
	 */
	ok(): T {
		return this._value;
	}

	/**
	 * Retrieves the 'Err' value for Result in 'Ok' state.
	 * @function
	 * @returns {null} - The wrapped value is always null.
	 */
	err(): null {
		return null;
	}

	/**
	 * Gets the wrapped value in the 'Ok' state.
	 * @public
	 * @readonly
	 * @returns {T} - 'Ok' value type
	 */
	public get okValue(): T {
		return this._value;
	}

	/**
	 * Gets 'Err' value for Result in 'Ok' state.
	 * @public
	 * @readonly
	 * @returns {null} - The wrapped value is always null.
	 */
	public get errValue(): null {
		return null;
	}

	/**
	 * Retrieves the wrapped value.
	 * @function
	 * @returns {T} - 'Ok' value type
	 */
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


//------------------- Result match --------------------
/**
 * Matches a Result object and returns an object with the 'ok' and 'err' values.
 * @function
 * @param {Result<T, E>} result - The Result object to match.
 * @returns {{ ok: T | undefined, err: E | undefined }} - An object containing the 'ok' and 'err' values.
 */
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

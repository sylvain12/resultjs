//------------------- Ok Class --------------------

/**
 * Represents the 'Ok' state of a Result object.
 * @class
 * @template {T} - Generic type for 'Ok'
 */
export class Ok<T> {
	private _value: T;
	constructor(value: T) {
		this._value = value;
	}

	/**
	 * Checks if the Result is in 'Ok' state.
	 * @function
	 * @returns {boolean}
	 */
	isOK() {
		return true;
	}

	/**
	 * Checks if the Result is in 'Err' state.
	 * @function
	 * @returns {boolean}
	 */
	isErr() {
		return false;
	}

	/**
	 * Retrieves value in the 'Ok' state.
	 * @function
	 * @returns {T}
	 */
	ok(): T {
		return this._value;
	}

	/**
	 * Retrieves the 'Err' value for Result in 'Ok' state.
	 * @function
	 * @returns {null}
	 */
	err(): null {
		return null;
	}

	/**
	 * Gets value in the 'Ok' state.
	 * @public
	 * @readonly
	 * @returns {T}
	 */
	public get okValue(): T {
		return this._value;
	}

	/**
	 * Gets 'Err' value for Result in 'Ok' state.
	 * @public
	 * @readonly
	 * @returns {null}
	 */
	public get errValue(): null {
		return null;
	}

	/**
	 * Retrieves the wrapped value.
	 * @function
	 * @returns {T}
	 */
	unwrap(): T {
		return this._value;
	}

	/**
	 * Throws an UnwrapError with a descriptive message when attempting to use unwrapErr on an 'Ok' value.
	 * @function
	 * @throws {UnwrapError}
	 * @returns {void}
	 */
	unwrapErr() {
		throw new UnwrapError(`Called 'Result.unwrapErr()' on an 'Ok' value: ${this._value?.toString()}`);
	}
}

//------------------- Err Class --------------------

/**
 * Represents the 'Err' state of a Result object.
 * @class
 * @template E - Generic type for 'Err'
 */
export class Err<E> {
	private _value: E;

	constructor(value: E) {
		this._value = value;
	}

	/**
	 * Checks if the Result is in the 'Ok' state.
	 * @function
	 * @returns {boolean}
	 */
	isOK() {
		return false;
	}

	/**
	 * Checks if the Result is in the 'Err' state.
	 * @function
	 * @returns {boolean}
	 */
	isErr(): boolean {
		return true;
	}

	/**
	 * Retrieves the 'Ok' value for Result in 'Err' state.
	 * @function
	 * @returns {null}
	 */
	ok(): null {
		return null;
	}

	/**
	 * Retrieves value in the 'Err' state.
	 * @function
	 * @returns {E}
	 */
	err(): E {
		return this._value;
	}

	/**
	 * Gets value in the 'Err' state.
	 * @public
	 * @readonly
	 * @returns {E}
	 */
	public get errValue(): E {
		return this._value;
	}

	/**
	 * Gets 'Ok' value for Result in 'Err' state.
	 * @public
	 * @readonly
	 * @returns {null}
	 */
	public get okValue(): null {
		return null;
	}

	/**
	 * Throws an UnwrapError with a descriptive message when attempting to use unwrap on an 'Err' value.
	 * @function
	 * @throws {UnwrapError}
	 * @returns {void}
	 */
	unwrap(): void {
		throw new UnwrapError(`Called 'Result.unwrap()' on an 'Err' value: ${this._value?.toString()}`);
	}

	/**
	 * Retrieves the wrapped error value.
	 * @function
	 * @returns {E}
	 */
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
export class UnwrapError extends Error {
	constructor(message: string) {
		super(message);
	}
}

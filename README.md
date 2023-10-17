# ResultJS 

ResultJS is inspired by [Rust Result](https://doc.rust-lang.org/std/result/) and provides a way to handle success and error states in a more structured and type-safe manner. It includes two main classes, `Ok<T>` and `Err<E>`, as well as a `Result<T, E>` type and utility functions for working with results. 

## Table of Contents
- [ResultJS](#resultjs)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Creating Result Objects](#creating-result-objects)
    - [Checking the State](#checking-the-state)
    - [Accessing Values](#accessing-values)
    - [Extracting contained values](#extracting-contained-values)
    - [Matching Results](#matching-results)
  - [Custom Errors](#custom-errors)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

With ResultJS we could turn our code from this:

```typescript
function division(a: number, b: number): number {
  if(b === 0) {
    throw new Error('Cannot divide by zero')
  }
  return a / b
}

try {
  const res = division(2 / 4);
  console.log(res)
} catch(error) {
  console.log(error)
}
```

To this:

```typescript
function division(a: number, b: number): Result<number, string> {
  if(b === 0) {
    return new Err('Cannot divide by zero')
  }
  return new Ok(a / b)
}

const res = division(2 / 4);

if(res.isOK()) {
  console.log(res.okValue)
}else {
  console.log(res.errValue)
}
```

ResultJS provides a simple and readable way to handle success value and error.

## Installation

```bash
npm i @sylvainka12/resultjs
```

## Usage

### Creating Result Objects

The package provides two main classes for creating `Result` objects: `Ok<T>` for representing the 'Ok' state (success value) and `Err<E>` for representing the 'Err' state (error value). Here's how you can create instances of these classes:

```typescript
import { Ok, Err } from 'resultjs';

// Creating an 'Ok' result with a value of type T
const okResult: Ok<number> = new Ok(42);

// Creating an 'Err' result with an error value of type E
const errResult: Err<string> = new Err("Something went wrong");
```

### Checking the State

You can check the state of a `Result` object using the `isOK()` and `isErr()` methods:

```typescript
if (okResult.isOK()) {
  // Handle the 'Ok' state
} else {
  // Handle the 'Err' state
}
```

### Accessing Values

To access the values inside `Ok` and `Err` objects, you can use the `ok()` and `err()` methods. These methods return the value or error, respectively, or `null` if the result is in the opposite state.

```typescript
const value = okResult.ok(); // Returns 42
const error = errResult.err(); // Returns "Something went wrong"
```

You can access the values inside `Ok` and `Err` objects using the following properties: `okValue` and `errValue`.

```typescript
const ok = new Ok(33);
const err = new Err('Not found');

console.log(ok.okValue) // Returns 42
console.log(err.errValue) // Returns "Something went wrong"
```

- Call `err()` method or `errValue` property on `Ok` state return `null`
```typescript
const okRes = new Ok('Hello world')
console.log(okRes.ok()) // Returns 'Hello World'
console.log(okRes.err()) // null
```

- Call `ok()` method or `okValue` property on `Err` state return `null`
```typescript
const errRes = new Err('Missing value')
console.log(errRes.err()) // Returns 'Missing value'
console.log(errRes.ok()) // null
```

### Extracting contained values

When working with `Result` objects, you often need to extract the underlying value or error. The `unwrap` and `unwrapErr` methods provide a way to do this while handling potential errors gracefully.

- #### `unwrap` Method

The `unwrap` method retrieves the value in the 'Ok' state of a `Result` object. It should be used when you are confident that the result is in the 'Ok' state, as calling `unwrap` on an 'Err' state will throw an `UnwrapError`. Here's how to use it:

```typescript
try {
    const value = okResult.unwrap();
    // Use the 'value' here
} catch (error) {
    // Handle the 'UnwrapError' if the result is in the 'Err' state
}
```

- #### `unwrapErr` Method

The `unwrapErr` method retrieves the error in the 'Err' state of a `Result` object. It is the counterpart to `unwrap` and should be used when you expect the result to be in the 'Err' state. If you mistakenly call `unwrapErr` on an 'Ok' state, it will throw an `UnwrapError`. Here's how to use it:

```typescript
try {
    const error = errResult.unwrapErr();
    // Use the 'error' here
} catch (error) {
    // Handle the 'UnwrapError' if the result is in the 'Ok' state
}
```

### Matching Results

The `matchResult` function allows you to conveniently destructure a `Result` object into its 'Ok' and 'Err' values:

```typescript
import { matchResult } from 'resultjs';

const { ok, err } = matchResult(okResult);

if (ok !== null) {
  // Handle the 'Ok' value
} else {
  // Handle the 'Err' value
}
```

## Custom Errors

The package includes a custom error class, `UnwrapError`, which you can use to represent errors that occur when attempting to unwrap a value. This error class extends the standard `Error` class and accepts a descriptive message as a constructor parameter.

```typescript
import { UnwrapError } from 'resultjs'; // Adjust the import path as needed

// Throwing an UnwrapError
throw new UnwrapError("Tried to unwrap an 'Err' value");
```

## Contributing

Contributions to this package are welcome! If you have any ideas for improvements, bug fixes, or new features, please open an issue or submit a pull request on the [GitHub repository](https://github.com/2kas-dev/resultjs).

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
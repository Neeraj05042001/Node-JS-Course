# module.export & require

- Keeping all the nodeJS code in a single file is not a good practise, so make separate logical files.
- These logical separate files created is known as modules. The codes written in them are not logically related to each other.
  ![alt text](./image.png)

## How to make two modules work together?

- Using a `require function`.

## What is the require function?

- In Node.js, the `require()` function is a built-in function that allows you to include or require other modules into your main modules. Now, let's write our code using the require function.

  - **Task:** Our objective is to execute the code written in the the app.js module.

## If I write a function in another module, can I use that function in a different module? Will it work or not?

_Ans_ It will not Work.

- Modules protect their variables and functions from leaking by default.

## Types of Module Patterns?

**Ans:** There are two types of module pattern: <br> 
   - common js module 
    - ES Modules(ESM) / ES6 Modules / mjs

## Difference between common js module and ES Modules.

| Sr.No | Common js                        | ES Module                              |
| ----- | -------------------------------- | -------------------------------------- |
| 1     | require function & module.export | import & export                        |
| 2     | By default used in NodeJS        | By default used in React, Angular etc. |
| 3     | Older way                        | Newer way                              |
| 4     | Synchronous                      | Asynchronous                           |
| 5     | Code is run in non-strict mode   | Code is run in strict mode             |

## Explain strict mode and non-strict mode in module pattern

**Ans:** Running code in strict mode means if if finds something that does not follow the ECMA Standard then it will not run, it will throw an error. <br> 
- e.g: z = "Hello World"
In this z is declared without var, let or const. So it is not according to the ECMA Standard so when run through `commonjs module` it will work fine as `cjs module` runs in `non-strict` mode while `mjs` will not run and it will throw an error as `z` is not defined as `mjs` runs in `strict-mode`.


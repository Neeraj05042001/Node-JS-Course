# Episode - 03 Let's Write Code

 - Doenload and install the nodeJS
 - check the installation wheather successful or not
         - node -v 
         - npm - v

## How to write code in nodeJS:
   - code in nodeJS is written in REPL which stands for Read, Evaluate, Print and Loop.
   - It's the quickest way to run nodeJS code.
   -  we can activate REPL just by hitting the command "node" in the terminal, once the command is hit, it triggers the program and activates the nodeJS where we can easily write and run our code. This is exactly similar to the console of the browsers where we ware able to write and run our code. This is due to the presence of JS engine that provides this functionliy in both browsers as well as the nodeJS environment.
   - So we can say that NodeJS is a JS environment built on chrome's V8 Javascript v8 engine with somme additional superpowers added to it.
   - NOdeJS = v8 js engine + superpowers

## How code is executed in nodeJS?
   - Whenever we write any piiece of code, that peice of code is passed to the v8 engine present in the nodeJS and th ejs engine then executes the code. the js engine has also the access to the the superpowers present in the nodeJS. such as:
                            - setTImeOut
                            - setInterval
                            - setImmediate
## How to wite nodeJS code properly:
 - To write code in nodeJS of a production and development level we will have to write in repositories by making a folder using code editor.
 - create a folder "app.js" and start writing code there.

## How to run the nodejs code:
 - To run the js code just hit the command: node + file name
       - e.g: node app.js

## Difference between Global object in Browser and NodeJS
  - In both the browser and the nodeJS. the global Object is the collection of all the tools provided by the browser environment and the nodeJS environment respectively. 
  - We ca access the global object in browser using various names, basically there are various names that refers to the global object and give access to it such as: window, this, self and frames.
  -  but in nodeJS we can access the global object only using the keyword: global
  - due to presence of various keyword to access the global object in js was a very contradicting, so the JSFoundation in 2020 decide to set a standard to access the global object across all JS environment and the keyword chosen was: "globalThis" 
  - Now using "globalThs" we can access the global object across any JS environment with the same Keyword.

  - In nodeJS: global === globalThis => true

  

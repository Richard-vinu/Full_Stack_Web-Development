Reference Book https://eloquentjavascript.net/ <br>

Namasate JavaScript pdf notes => [CLICK Here](https://media.licdn.com/dms/document/C4D1FAQFsMZV248tkSw/feedshare-document-pdf-analyzed/0/1669096555858?e=1672272000&v=beta&t=099p5XrlAAWngal_dq3nU167JTmDBhrPzVl-XS9axBM)<br>
interview questions = https://medium.com/@a9kitsharma/javascript-interview-questions-and-answers-1c155c869aec

``Who developed JavaScript in which year?``<br>

JavaScript was invented by Brendan Eich in 1995. It was developed for Netscape 2, and became the ECMA-262 standard in 1997. <br>
After Netscape handed JavaScript over to ECMA, the Mozilla foundation continued to develop JavaScript for the Firefox browser.



``10 Important Array Methods In JavaScript``<br>
 https://markodenic.com/10-javascript-array-methods-to-simplify-your-code/<br>
   https://blog.oliverjumpertz.dev/10-important-array-methods-in-javascript-explained



``Promise``

A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It provides a way to register callbacks to be notified when the operation is complete or has failed, rather than having to explicitly pass callbacks around as function arguments.

A Promise has three possible states:

Pending: The initial state of a Promise, representing that the operation has not yet completed.

Fulfilled: The state of a Promise representing that the operation has completed successfully and has a resulting value.

Rejected: The state of a Promise representing that the operation has failed, and has a reason for the failure.

Here's an example of using a Promise to wrap a timer function that returns the elapsed time after a specified number of milliseconds:
```



javascript
Copy code
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${ms}ms has passed`);
    }, ms);
  });
}

wait(1000).then((result) => {
  console.log(result);
});
In this example, the wait function returns a Promise that resolves with a message indicating that the specified number of milliseconds have passed. The then method is used to register a callback to be invoked when the Promise is resolved.
```
``CORS``

https://www.contentstack.com/docs/developers/how-to-guides/understanding-and-resolving-cors-error/

```Definitions```
https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/
```Call```
Call is a function that helps you change the context of the invoking function. In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.
```Apply```
Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.
```Blind```
Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.

10) Asynchronous Communication. ...
9) Dom creation and modification. ...
8) Loops, Loops, Loops, Loops. ...
7) Dev Tool Debugging. ...
6) Scope. ...
5) Functions and Function Calls. ...
4) Conditional statements. ...
3) Events and Event Handling.


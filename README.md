# IMPORTANT_Q-A
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&duration=900&pause=70&color=F3F756&width=435&lines=HEY+CheckOut....)](https://git.io/typing-svg)<br>

[MY_Portfolio](https://richard-it.vercel.app/)
```ruby
Hi I am Richard..
Hope this content helps You. if so 😅 give a STAR🌟... Goodluck !!!
Note:'raise an issue if u find mistake and Your contributions are heartily ♡ welcome.'
```

<h4>Tech<h4>
Front-End

[HTML](https://github.com/Richard-vinu/web-development/blob/main/HTML.md) || [CSS](https://github.com/Richard-vinu/web-development/blob/main/CSS.md)  || [JAVASCRIPT](https://github.com/Richard-vinu/web-development/blob/main/JavaScript.md)  || [REACT.JS](https://github.com/Richard-vinu/Full_Stack_Web-Development/blob/main/ReactJs.md)|| [NEXT.JS](https://github.com/Richard-vinu/Full_Stack_Web-Development/blob/main/ReactJs.md)  <br>

Back-End<br>
[NODE.JS](https://github.com/Richard-vinu/Full_Stack_Web-Development/blob/main/NodeJs.md)
  
 
 DATABASE<br>
[SQL](https://github.com/Richard-vinu/Full_Stack_Web-Development/blob/main/SQL.md) || [MONGO-DB](https://github.com/Richard-vinu/Full_Stack_Web-Development/blob/main/MongoDb.md)

 DSA<br>
[Data-Structure](https://github.com/Richard-vinu/Full_Stack_Web-Development/blob/main/Data-Structure.md) || [Algorithms](https://github.com/Richard-vinu/Full_Stack_Web-Development/blob/main/alogirithms.md)




###  What is Async Programming
```yaml
Async Programming helps user to execute multiple functions simultaneously.

In async, a task is running in the background, while the user is performing some other action.

Why Async?:

Consider the following example, where an alert is popped up. The user is not able to interact with the page until the alert is closed.
This is an example of syncronous programming, where execution of one function completely blocks everything.
This makes the use of async programming useful and important.

Async Example:

Any page that you visit makes multiple API calls to the backend server but during this whole process, 
the user is able to click and interact anywhere on the website.
This is because of async programming, as the tasks are running in the background and not blocking the user.

Async in JS:

There are multiple ways of writing async code in JavaScript. The major use case is interacting with 3rd party API(s) or services.
To write async code in JS, we have the following concepts:
Promises
Async/Await
```

### What is async/await?
```yaml

async/await are two keywords, Async and Await which are used for asynchronous programming in JavaScript.

Rather than having too many nested functions, they keep the code neat and clean, which is why many developers usually recommend it.

Async Function:

An async function is a function that is written by using the async keyword. It is what makes the function asynchronous.

The async makes the function returns a Promise.

Await Function:

The keyword await is used inside the function and it makes JavaScript wait until that promise is settled and return the result.

It can't be used in regular functions (a function without async keyword)
```




<!DOCTYPE html>
<html>
<body>
<h3>Vamos</h3>
<table>
  <tr>
    <th>PUT</th>
    <th>PATCH</th>
  </tr>
  <tr>
    <td>PUT is a method of modifying resource where the client<br> sends data that updates the entire resource . </td>
    <td>PATCH is a method of modifying resources where the client sends partial data that is to be updated without modifying the entire data.</td>
  </tr>
  <tr>
    <td>HTTP PUT is said to be idempotent, So if you send retry a request multiple times, that should be equivalent to a single request modification</td>
    <td>HTTP PATCH is basically said to be non-idempotent. So if you retry the request N times, you will end up having N resources with N different URIs created on the server.</td>
  </tr>
  <tr>
    <td>It has High Bandwidth </td>
    <td>Since Only data that need to be modified if send in the request body as a payload , It has Low Bandwidth </td>
  </tr>
  <tr>
    <td>Clients use the PUT method to set up an entity of a resource into an HTTP server. </td>
   <td>The PATCH method applies partial modifications to entities of a resource.</td>
  </tr>
</table>
</body>
</html>
<h4>shallow vs deep</h4>
<table>
  <tr>
    <th>shallowCopy</th>
    <th>deepCopy</th>
  </tr>
  <tr>
    <td>A shallow copy means that certain (sub-)values are still connected to the original variable </td>
    <td>A deep copy means that all of the values of the new variable are copied and disconnected from the original variable.</td>
  </tr>
  <tr>
    <td>A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.</td>
    <td>A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.</td>
  </tr>
  <tr>
    <td>when you change either the source or the copy, you may also cause the other object to change too </td>
    <td>when you change either the source or the copy, you can be assured you're not causing the other object to change too </td>
  </tr>
   <tr>
 <td>``shallow copy``<br>
 const a = { x: 0, y: { z: 0 } };<br>
const b = {...a}; // or const b = Object.assign({}, a);<br>

b.x = 1; // doesn't update a.x <br>
b.y.z = 1; // also updates a.y.z</td>
    <td>``DEEP COPY``<br>
const a = { x: 0, y: { z: 0 } };<br>
const b = JSON.parse(JSON.stringify(a)); <br>

b.y.z = 1; // doesn't update a.y.z </td>
  </tr>

</table>

<h3>what is MVC</h3>

 MVC stands for Model View Controller <br>
 It is an architectural pattern<br>
 MVC divides a software application in 3 parts =>  Model,View,Controller
 ![](https://github.com/Richard-vinu/Kannada_Coder/blob/main/screenshot-www.youtube.com-2022.10.30-17_27_32.png)


``FindOne()``

=>To select data from a collection in MongoDB, we can use the findOne() method.
  The findOne() method returns the first occurrence in the selection.
  The first parameter of the findOne() method is a query object.
  The findOne() returns first document if query matches otherwise returns null

``find()``

Syntax:find(query, projection)<br>
=>We can fetch a specific record using the Find method, which has two parameters. 
If these two parameters are omitted, the find method will return all of the documents in the MongoDB collection.

``findById()``

findById returns the document where the _id field matches the specified id. If the document is not found, the function returns null.<br>
In MongoDB, all documents are unique because of the _id field or path that MongoDB uses to automatically create a new document.<br>

For this reason, finding a document is easy with Mongoose. To find a document using its _id field, we use the findById() function.


``findOneAndUpdate()``

Updates a single document based on the filter and sort criteria.
The findOneAndUpdate() function is used to find a matching document and update it according to the update arg, passing any options, and returns the found document (if any) to the callback.





``What is async await?``

=>An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

=>The await operator is used to wait for a Promise and get its fulfillment value. It can only be used inside an async function or a JavaScript module.


``What is json?``

 
 *  JSON stands for JavaScript Object Notation 
   * JSON is a lightweight format for storing and transporting data 
   * JSON is often used when data is sent from a server to a web page JSON is "self-describing" and easy to understand

```What is model```

A Mongoose model is a wrapper on the Mongoose schema.
Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.

```Difference between Put and Patch```

<mark>PUT</mark> is a method of modifying resource where the client sends data that updates the entire resource .
<mark>PATCh</mark>  is used to update an existing entity with new information. You can’t patch an entity that doesn’t exist.

PATCH is a method of modifying resources where the client sends partial data that is to be updated without modifying the entire data.

```What is MongoDB Query?```

MongoDB Query is a way to get the data from the MongoDB database. MongoDB queries provide the simplicity in process of fetching data from the database, it’s similar to SQL queries in SQL Database language. While performing a query operation, one can also use criteria or conditions which can be used to retrieve specific data from the database. <br>
[a link for detail](https://www.geeksforgeeks.org/what-is-a-mongodb-query/#:~:text=MongoDB%2C%20the%20most%20popular%20open,format%20just%20like%20JSON%20format.)<br>

```What is Pagination in mongoDB ?```

In MongoDB, the pagination phenomenon is used to get an output that can be easily understandable.
Pagination is a procedure to display large disarranged output in a page format. With the help of pagination, the result can be retrieved faster as compared to the general methods of MongoDB.

```The setTimeout() Method and setInterval()```

setTimeout(function, milliseconds)<br>
  *Executes a function, after waiting a specified number of milliseconds.

setInterval(function, milliseconds)<br>
  *Same as setTimeout(), but repeats the execution of the function continuously.<br>[a link for detail](https://www.w3schools.com/js/js_timing.asp)<br>
  
  
  ```What is the difference between '==' and '===' operators?```
  
  The main difference between the == and === operator in javascript is that the == operator does the type conversion of the operands before comparison, whereas the === operator compares the values as well as the data types of the operands

<img src="https://bkit.co/w_635a66ca8baa7.gif" />

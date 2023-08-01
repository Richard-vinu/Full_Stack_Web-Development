Here are a few CLI commands 



npm i -g @nestjs/cli
nest new project-name
nest res g 'module_name'

Alternatively, to install the TypeScript starter project with Git:
git clone https://github.com/nestjs/typescript-starter.git project
cd project
npm install

nest start

What is NestJS used for?
Nest. js uses TypeScript for type checking and provides an out-of-the-box software architecture for building and deploying testable, <br>
  scalable, loosely coupled, and easily maintainable applications. In this article, we'll explore Nest. js and what you can build with it.

the official-document https://docs.nestjs.com/



```flow
st=>start: Start
e=>end: End
op1=>operation: Choose your
learning path

op2=>operation: Read Nest.js docs
op3=>operation: Watch video tutorials
op4=>operation: Follow practical examples
op5=>operation: Build projects

cond1=>condition: Do you have
prior Node.js knowledge?

st->op1->cond1
cond1(yes)->op2->op3->op4->op5->e
cond1(no)->op3->op4->op5->e

function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

function makeHalfPrice(price) {
    return price * 0.5;
}

function countBooks(bookArray) {
    return bookArray.length;
}

function isInStock(book){
    return book.quantity >= 1 ? true : false;
}

function getTotalOrderPrice(price, quantity){
    return Math.round((price * quantity * 1.2)*Math.pow(10,2))/Math.pow(10,2);
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};

/* Answers to Written Questions

1.  '.json' is the file extention of package.json

2.  JSON stands for "JavaScript Object Notation"

3.  The purpose of JSON is to interchange data.  While Javascript Objects may look a lot like 
 JSON, these are not the same thing.  JSON uses all strings to exchange data.

4.  The package.json file holds metadata that's used in a project to allow npm to not only 
    identify the project, but also allows it to manage the project's dependencies.

5.  To install dependencies in a project after first cloning it from Github, go to the root 
    of the project in terminal and run 'npm install'.

6.  In Github, a 'fork' is a copy of the repository that I own, where I can make changes to 
    the repository to make changes to a project without affecting the original project.

7.  I know all sorts of datatypes, but those that apply to Javascript include String, Number, 
    Boolean, arrays, objects, undefined and NULL.

8.  The main difference between primitive and complex data types is that when working with 
    primitive data types, you're working with the data directly.  Meanwhile, when working with 
    complex data types, you work with a reference to that data in order to manipulate it.  Strings,
    Numbers, and Booleans are primitive data types.  And object is an example of a complex data type.

9.  In my opinion, the best data type for representing whether a user is logged into a system 
    or not would be a Boolean.

10.  I can create a variable who's value cannot be changed by using 'const'.

11.  Outcome of that code would be "Hello Sandra".  While the sayHello function accepts 
    "Sally" as name, the variable 'name' isn't used in the function itself.

12.  You'd get an error.  Functions are case sensitive and invoking getFullname is not the same as 
    invoking getFullName.

13.  To find a list of dependencies required in this project, I could go look at package.json.

14.  When I install dependencies for this project, they are usually locally installed in ./node_modules 
    of the current package root, except for in cases where I install globally (-g), in which case it 
    is located in /usr/local/ or whereever node is installed.

15.  I write comments in my code one of two ways:
            // --- for single line comments
            or /*  */ /*--- for multi-line comments (ah, I see what you did there!)


*/


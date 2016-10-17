/* Problem #1 - Fizz Buzz!
Fizz buzz is a classic programming problem that commonly gets used as a litmus test for progammers.

Write a function (problem1) that prints the numbers from 1 to 100.
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
For numbers which are multiples of both three and five print "FizzBuzz".
*/
function problem1() {
    for(var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            consolg.log(i);
        }
    // console.log("Hello, world!");
}


/* Here is the situation for problems 2-5:

Tori's student records got damaged in the storm last weekend. All that survided the storm was a javascript list of objects.
The objects in this list represent uw info students. Somehow, the effects of the storm compromised the integrity of the iSchool
student records. It is damaged, and she needs your help to fix it!
*/

// This is all that is left of the data!
var students = [
    {
        name: 'Luis Naranjo',
        graduating: true,
        gpa: 25.0,
    },
    {
        name: 'Bobby Fischer',
        graduating: true,
        gpa: 12.96
    },
    {
        name: 'Michael Jordan',
        graduating: true,
        gpa: 12.0
    },
    {
        name: 'Tom Cruise',
        graduating: false,
        gpa: 12.96
    },
    {
        name: 'Cristiano Ronaldo',
        graduating: true,
        gpa: 12.25,
    },
    {
        name: 'Beyonce Knowles',
        graduating: false,
        gpa: 13.69,
    },

];


/* Problem #2 - forEach() practice

Unfortunately, all of the student's GPAs somehow got squared (gpa * gpa).
Use the forEach() function to fix the student GPAs by taking their square root.

Notes:
    * Javascript has a built in square root function. Look up how to use it!
    * Your function should actually update the gpa values in the students array.
*/

function problem2() {
    students.forEach(function(student) {
        student.gpa = Math.sqrt(student.gpa);
    } );
}

/* Problem #3 - map/filter/reduce practice

Tori needs a list of all of the info student's last names.
Write a function `problem3()` that uses either map(), filter(), or reduce() to return an array containing all of the student's 
last names.
*/
function problem3() {
    return students.map(function(student) {
        student.name.split(' ')[1];
    });
}

/* Problem #4 - map/filter/reduce practice

Tori has a list of all students, but she also needs a list that represents the subset of students who are graduating this year.
Write a function `problem4()` that uses either map(), filter(), or reduce() to return a list of students who are graduating this 
year.
*/
function problem4() {
    var graduating = students.filter(function(student) {
        if (student.graduating) {
            return student.graduating;
        }
    });
}
/* Problem #5 - map/filter/reduce practice

Tori needs your help computing the average GPA of info students.
Write a function that uses either map(), filter(), or reduce() to compute and return the average GPA of info students.

Note: You will need to run problem2() before you run this function, otherwise your result will be squared!
*/


/* Problem #6

Tori needs to know which letters from student names are the most common (for printing purposes).
Use an Object (aka an associative array, map, dictionary, or hash table) to record the frequency of each character 
used the in uw info student names.
Return the frequency map (the object) when you are done.

Note:
    * You will see a similar problem pattern to this on your homework!
    * If a letter isn't used by any of the student names, you don't need to include it. In other words, you can build this map 
      dynamically.
    * Don't worry about the spaces in between the first and last names
*/


/* Bonus problem

Can you log out a histogram of the letter frequencies?

*/

/* Here is the situation:

Tori's student records got damaged in the storm last weekend. All that survided the storm was a javascript list of objects.
The objects in this list represent uw info students. Somehow, the effects of the storm compromised the integrity of the iSchool
student records. It is damaged, and she needs your help to fix it!

Note: For each problem, you will need to do the following:
    * Log your output to the console with console.log()
    * Return your output at the end of your method
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
        name: 'Beyonce',
        graduating: false,
        gpa: 13.69,
    },

];


/* Problem #1 - map() practice https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Unfortunately, all of the student's GPAs somehow got squared (gpa * gpa).
Use the map() function with an anonymous callback to quickly fix the student GPA records by taking their square root.

Notes:
    * Javascript has a built in square root function. Look up how to use it!
    * Your function should actually update the gpa values in the students array.
    * Your function should also return a copy of the updated list of students with their corrected GPAs.
*/
function Problem1() {
    var roots = students.map(function(student, index, array) {
        array[index].gpa = Math.sqrt(student.gpa); // update students array
        return array[index]; // add item to roots array
    });
    return roots;
}

/* Problem #2 - filter() practice https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

Tori has a list of all students, but she also needs a list that represents the subset of students who are graduating this year.
Use the map() function with an anonymous callback to help her get her list!
*/
function Problem2() {
    var graduatingStudents = students.filter(function(student) {
        return student.graduating;
    });
    console.log(graduatingStudents);
    return graduatingStudents;
}

/* Problem #3 - reduce() practice https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Syntax

Tori needs your help computing the average GPA of info students.
Use the reduce() function to compute the average GPA of info students.

Note: You will need to first feed in the results of the Problem1() method to Problem3(), or else your average GPA will be squared!
*/
function Problem3() {
    var rootedGPAs = Problem1();
    var cumGPA = rootedGPAs.reduce(function(left, right) {
        return {gpa: left.gpa + right.gpa};
    });
    return cumGPA.gpa / students.length;
}

/* Problem #4

Tori needs to know which letter of the alphabet is the most common first letter among all the iSchool student names.
Help her out!

Example: If Cameron was the only student in the iSchool, then c=1 and all the other letters would = 0 

Note:
    * You will see a similar problem pattern on your homework
*/
function Problem4() {
    var frequency = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0
    };

}

/* Problem #5 - Fizz Buzz!
Fizz buzz is a classic programming problem that commonly gets used as a litmus test for progammers.

Write a function (Problem5) that prints the numbers from 1 to 100.
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
For numbers which are multiples of both three and five print "FizzBuzz".

*/

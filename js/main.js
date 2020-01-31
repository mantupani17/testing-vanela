var students = [];

// creating student function prototype
var Student = function({ name , qualification }){
   this.name = name;
   this.qualification = qualification;
}

// display student data
Student.prototype.display = function(){
    console.log(`name is ${this.getName()} and qualification ${this.getQualification()}`);
}

// get student name
Student.prototype.getName = function(){
    return this.name;
}

// get student qualification
Student.prototype.getQualification = function(){
    return this.qualification;
}

// add to students array
Student.prototype.addStudent = function(){
    const student = { name : this.name , qualification:this.qualification };    
    students.push(student);
}

// remove student
Student.prototype.removeStudent = function(student){
    if(students.length > 0){
       const index = students.indexOf(student) 
       students.pop(index);
    }
}

const studentUl = document.getElementById('students-ul');
const studentsItem = studentUl.querySelectorAll('li.collection-item');
studentsItem.forEach((element , index)=>{
    const studentNameElem = element.getElementsByTagName('studentname')[0];
    const studentQualElem = element.getElementsByTagName('studentqual')[0];
    var student = new Student({
        name: studentNameElem.innerHTML ,
        qualification:studentQualElem.innerHTML
    });
    // student.display()
    student.addStudent();
});

// filter method
function searchStudent(){
    const searchVal = this.value;
    studentsItem.forEach((element , index)=>{
        const studentNameElem = element.getElementsByTagName('studentname')[0];
        if(studentNameElem.innerHTML.toLowerCase().indexOf(searchVal) > -1 ){
            element.style.display = '';
        }else{
            element.style.display = 'none'; 
        }
    });
}

// remove student List
function removeStudentLi(){
    const stdLi = this.parentElement;
    stdLi.style.display = 'none';   
}

const filterElem = document.getElementById('filterStudent');

// add event click to remove-student
const removeElem = document.querySelectorAll('.remove-student');
for(let i = 0;i< removeElem.length;i++){
    removeElem[i].addEventListener('click', removeStudentLi);
}

// let obj = { a: 1, b:2, c:0}
// let obj2 = {
//     ...obj,
//     a:0
// }
// let obj1 = {
//     a: 1, b:2, c:0 , a:2
// }
// console.log(obj1 , obj)


function convertStrToInt(stringData){
    if(!isNaN(stringData)){
        return parseInt(stringData);
    }else{
        console.error('Invalid input');        
    }
}

var p1 = new Promise((resolve, reject)=>{
    setTimeout(function(){
        // console.log('p1 resolved')
        resolve('p1 resolved');
    },1000)
})

var p2 = new Promise((resolve, reject)=>{
    setTimeout(function(){
        // console.log('p2 resolved')
        resolve('p2 resolved');
    },1000)
})

var p3 = new Promise((resolve, reject)=>{
    setTimeout(function(){
        // console.log('p3 resolved')
        // console.log('promise resolved')
        resolve('p3 resolved');
    },3000)
})
// Promise.all([p1, p2, p3])

// function asyncFunc1(){
//     setTimeout(function(){
//         console.log('p1 resolved')
//         return 'p1 resolved'
//     },3000)
// }

// function asyncFunc2(){
//     setTimeout(function(){
//         console.log('p2 resolved')
//         return 'p2 resolved'
//     },4000)
// }

// function asyncFunc3(){
//     setTimeout(function(){
//         console.log('p3 resolved')
//         console.log('promise resolved')
//         return 'p3 resolved'
//     },5000)
// }

// asyncFunc1()
// asyncFunc2()
// asyncFunc3()


// console.log(convertStrToInt('1251a'));
// add event keyup to text field
filterElem.addEventListener('keyup' , searchStudent)

class Vehicle{
    display(){
        console.log(`Vehicle ${this.name} and its Color is ${this.color}`)
    }
    getVehicle(){
        return this.name;
    }
    getColor(){
        return this.color;
    }
}

class TwoWheeler extends Vehicle{
    constructor(name, color){   
        super()            
        this.name = name;
        this.color = color;
    }
}

class FourWheeler extends Vehicle{
    constructor(name, color){   
        super()            
        this.name = name;
        this.color = color;
    }
}

class ThreeWheeler extends Vehicle{
    constructor(name, color){   
        super()            
        this.name = name;
        this.color = color;
    }
}

// var vehicle = new ThreeWheeler('Auto' , 'red');
// vehicle.display()
// var proto = Object.getPrototypeOf(vehicle); 
// console.log(proto)
// class Person{
//     constructor(){
//         console.log('object created')
//     }

//     hello(){
//         console.log('hello')
//     }
// }

// Person.prototype.display = function(){
//     console.log('hi')
// }


// inheritance using prototype
function Person(name) {
    this.FirstName = name || "unknown";
};

Person.prototype.getFullName = function () {
    return this.FirstName + ' School: '+ this.SchoolName;
}


function User(name, schoolName, grade){
    Person.call(this, name);
    this.SchoolName = schoolName || "unknown";
    this.Grade = grade || 0;
} 

User.prototype = new Person();
User.prototype.data = 'nothing'
// User.prototype.constructor = User;


var std = new User("James Bond", "XYZ", 10);
            
// console.log(std.getFullName()); // James Bond
// console.log(std.data)
// console.log(std instanceof User); // true
// console.log(std instanceof Person); // true


// var ram = new Person()
// ram.display()
// ram.hello()

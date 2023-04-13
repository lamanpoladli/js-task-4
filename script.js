
// task-1-----------------------------------------------------------

// let data = [
//     {name: 'daniel', age: 45},
//     {name: 'john', age: 34},
//     {name: 'robert', age: null},
//     {name: 'jen', age: undefined},
//     {name: null, age: undefined}];

// const dataCheck =  ()=> {
//     data.map((object) =>{
//         if(object.name===undefined || object.name===null || object.age===undefined || object.age===null){
//             return;
//         }
//         else{console.log(object);}
//     });
// }
// dataCheck();


// task-2-------------------------------------------------------------

// const students = [
//     { name: "Leyla", points: 500 },
//     { name: "Akif", points: 500 },
//     { name: "Fikret", points: 3000 },
//     { name: "Rashad", points: 500 },
//     { name: "Turkan", points: 1900 },
//     { name: "Sabir", points: 1000 },
//     { name: "Idris", points: 340 },
//     { name: "Nijat", points: 940 },
//     { name: "Ismet", points: 1780 },
//   ];
//     students.map((student)=>{
//         return student.points += 30;    
//     });
//   console.log(students);


// task-3-------------------------------------------------------------

// let bdays = ['08-14', '10-04', '04-21', '08/14', '10/04', '04/21'];
// let bdaysOutput = bdays.map((item) => item.replace(/-/g, '/'));
// console.log(bdaysOutput);



// task-4-------------------------------------------------------------

// let numbers = [1.5, 2.56, 5.1, 12.33];
// for (let i=0; i<numbers.length; i++){
//     let number =Math.round(numbers[i]);
//     console.log(number);
// }


// task-5-------------------------------------------------------------

const b = "5,4,3,2,1";
const newArr= b.split(",").reduce((n1,n2) => Number(n1)+Number(n2),0);
console.log(newArr);
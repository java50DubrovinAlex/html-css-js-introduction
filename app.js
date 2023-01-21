// const employee1 = {id: 123, name: "Vasya", birthYear: 2000, 
// salary: 15000, address: {city: "Lod", country: "Israel"}};
// const employee2 = {id: 123, name: "Vasya", birthYear: 2000, 
// salary: 15000, address: {city: "Lod", country: "Israel"}};
// console.log(`employee1==employee2 is ${employee1 == employee2}`)
// const employee3 = employee1;
// console.log(`employee3==employee1 is ${employee3 == employee1}`)
// employee3.salary = 20000;
// console.log(`employee1 salary = ${employee1.salary} `)
function createEmployee(id, name, birthYear, salary, city, country) {
    return {id, name, birthYear, salary, address: {city, country}}
}
const employees = [
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Lod", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(126, "Abraham", 1990, 3000, "London", "UK"),
    createEmployee(127, "Moshe", 2001, 9000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 1000, "Tbilisi", "Gorgia"),
    createEmployee(129, "Sasha", 1976, 25000, "Ramat Gan", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Arad", "Israel")
]
//const index = employees.indexOf(createEmployee(126, "Abraham", 1990, 13000, "London", "UK"))
// const index = employees.findIndex(function(empl) {
//     return empl.id === 126;
// })
// const employee = employees.find(function(empl) {
//     return empl.id === 126;
// })
//HW #18
function getEmployee(employees, id) {
    //TODO
    //returns reference to an Employee object with a given id value
   
    return employees.find(elem => elem.id === id);
    
}

function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    //TODO
    //returns array of Employee objects that have salary in [salaryFrom, salaryTo]
    return employees.filter(employees => employees.salary >= salaryFrom && employees.salary <= salaryTo);
    
}


function getEmployeesByCity(employees, city) {
    //TODO
    //returns array of Employee objects from a given city
    return employees.filter(employees => employees.address.city == city);

}



function getEmployeeNames(employees) {
    //TODO
    //returns array of all Employee names
    return employees.map(employees => employees.name); // return employees.reduce((acc, cur) => acc.concat(cur.name), []);
}

function sortEmployeesByAge(employees) {
    //TODO
    //returns array of Employee objects sorted by age in ascending order
    return employees.sort((emplmin, emplmax ) => emplmax.birthYear - emplmin.birthYear); // return employees.map(employees => employees).sort((a,b) => b.birthYear - a.birthYear );
}



function computeSalaryBudget(employees) {
    //TODO
    //computes and returns total salary for all Employee objects
    return employees.reduce((res, cur) => res + cur.salary, 0);
}
//////////////////////////////////////////////////////////////////////////

function createAddress (city, street) {
    return {city, street}
}
function createPerson(id, name, address) {
    return {id, name, address}
}
const persons = [
    createPerson(123, "Vasya", createAddress("Rehovot", "Parshani")),
    createPerson(124, "Olya",  createAddress("Rehovot", "Pr.Plaut")),
    createPerson(125, "Tolya", createAddress("Tel-Aviv", "Dizengoff")),
    createPerson(126, "Sara",  createAddress("Lod", "Sokolov"))
] 

//=======================================
// 1 ) Calculate IN ONE LINE OF CODE the name of Person living in Rehovot and having maximal value of 'id'
//     The expected result: Olya
function rehovotMaxId(persons){
    
    return (persons.sort((perOne, perTow) => perTow.id - perOne.id)).find(per => per.address.city === "Rehovot");
}

// function getSumOfCitys(persons){

// //=======================================
// // 2*) Build IN ONE LINE OF CODE the statistics of persons amount per city. 
// //     The expected result is object: {Rehovot:2, 'Tel-Aviv':1,Lod:1}


//     const result = persons.address.reduce((acc, cur) =>{  cur.address.city ? acc[cur.address.city], {});
// }
// console.log(getSumOfCitys(persons));
// console.table(rehovotMaxId(persons));

// const res = getEmployee(employees, 129);
// console.log(res);

// console.table(getEmployeesBySalary(employees, 1000, 9000));

// console.table(getEmployeesByCity(employees, "Lod"));

// console.table(getEmployeeNames(employees));

// console.table(sortEmployeesByAge(employees));

// console.log(computeSalaryBudget(employees));


/// CW - 19


// let field = "salary";
// console.log(employees[0][field]);

// function displayFieldValue(employees, index, field){
//     console.log(employees[index][field]);
// }

// displayFieldValue(employees, 3, "birthYear");

// employees[0].department = "QA";

// displayFieldValue(employees, 0, "department");
// delete employees[0].department;
// displayFieldValue(employees, 0, "department");

// function computeMinMaxAvgSalary(employees){
//     const res = employees.reduce((res, empl) => {
//         if(res.minSalary > employees.salary){
//             res.minSalary = empl.salary;
//         } else if(res.maxSalary < empl.salary){
//             res.maxSalary = empl.salary;
//         }
//         res.avgSalary += empl.salary;
//         return res;
//     }, {minSalary: employees[0].salary, maxSalary: employees[0].salary, avgSalary: 0});
//     res.avgSalary /= employees.length;
//     return res;
// }

// function displayValue(minMaxAvg, field){
//     console.log(minMaxAvg[field]);
// }

// const minMaxAvg = computeMinMaxAvgSalary(employees);
// displayValue(minMaxAvg, "maxSalary");
// displayValue(minMaxAvg, "minSalary");
// displayValue(minMaxAvg, "avgSalary");
function createEmployee(id, name, birthYear, salary, city, country) {
    return { id, name, birthYear, salary, address: { city, country } }
}
const employees = [
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tel Aviv", "Israel"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Gorgia"),
    createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Arad", "Israel")
]

// //displayFieldValue(employees, 3, "id");
// // employees[0].salary = 20000;
// // employees[0].department = "QA";
// // displayFieldValue(employees, 0, "department");
// // delete employees[0].department
// // displayFieldValue(employees, 0, "department");
// function computeMinMaxAvgSalary(employees) {
//     const res = employees.reduce((res, empl) => {
//         if (res.minSalary > empl.salary) {
//             res.minSalary = empl.salary;
//         } else if (res.maxSalary < empl.salary) {
//             res.maxSalary = empl.salary;
//         }
//         res.avgSalary += empl.salary;
//         return res;

//     }, { minSalary: employees[0].salary, maxSalary: employees[0].salary, avgSalary: 0 });
//     res.avgSalary = res.avgSalary / employees.length;
//     return res;
// }
// function displayValue(minMaxAvg, field) {
//     console.log(`value of the field ${field} is ${minMaxAvg[field]}`)
// };
// const minMaxAvg = computeMinMaxAvgSalary(employees);
// // displayValue(minMaxAvg,"avgSalary");
// // displayValue(minMaxAvg,"minSalary");
// // displayValue(minMaxAvg,"maxSalary");
// const strings = ["b", "xyz", "lmn", "xyz", "lmn", "xyz", "a"];
// //assumed result:
// //xyz -> 3
// //lmn -> 2
// //a -> 1
// //b -> 1
// function displayStringOccurrences(strings) {
//     const stringOccurrences = getStringOccurrences(strings);
//     const arrayOccurrences = Object.entries(stringOccurrences);
//     arrayOccurrences.sort(stringComp);
//     arrayOccurrences.forEach(entry => console.log(`${entry[0]} -> ${entry[1]}`));
// }
// const aaa = getStringOccurrences(strings);
// function getStringOccurrences(strings) {
//     const res = {};
//     strings.forEach(str => {
//         if (!res[str]) {
//             res[str] = 1;
//         } else {
//             res[str]++;
//         }
//     });
//     return res;
// }
// function stringComp(entry1, entry2) {
//     let res = entry2[1] - entry1[1];
//     if (res == 0) {
//         res = entry1[0] < entry2[0] ? -1 : 1
//     }
//     return res;
// }
// displayStringOccurrences(strings);



//HW #19
//returns country with most amount of employees
function getMostPopulatedCountry(employees) {
    //returns country with most amount of employees
    const res = getSortObjectMostPopulatedCountry(employees);
    sorted = Object.entries(res).sort((a, b) => b[1] - a[1]);
    return `${sorted[0][0]}, employees: ${sorted[0][1]}`;

}
function getSortObjectMostPopulatedCountry(employees) {
    const res = {};
    employees.forEach(empl => !res[empl.address.country] ? res[empl.address.country] = 1 : res[empl.address.country]++);
    return res;
}
//returns a given number (conter) of countries with most amount of employees
function getMostPupulatedCountries(employees, counter) {
    const objCountryEmpl = getSortObjectMostPopulatedCountry(employees);
    const res = Object.entries(objCountryEmpl).sort((a, b) => b[1] - a[1]).slice(0, counter);

    return res;
}



//returns true if a given anagram is indeed an angram of a given word
//anagram must have  same length as word
//anagram must have all letters from word
//hello anagram examples: elolh, olleh, ohell, lehol
//exampls non-anagrams: eloll (no h), ollehh(different length),
// olaeh ("a" doesn't exist in word), oleh(different length)
function isAnagram(word, anagram) {
    let res = false;
    if (word.length == anagram.length) {
        let wordAnagram = {
            sortWord: word.split('').sort().join(''),
            sortAnagram: anagram.split('').sort().join('')
        };
        if(wordAnagram.sortWord === wordAnagram.sortAnagram){
            res = true;
        }   
    }
    return res;
}


getSortObjectMostPopulatedCountry(employees);
console.log(getMostPopulatedCountry(employees));
console.table(getMostPupulatedCountries(employees, 2));
console.log(isAnagram("hello", "elolh"));
console.log(isAnagram("hello", "olleh"));
console.log(isAnagram("hello", "ohell"));
console.log(isAnagram("hello", "lehol"));
console.log(isAnagram("hello", "eloll"));
console.log(isAnagram("hello", "ollehh"));
console.log(isAnagram("hello", "olaeh"));

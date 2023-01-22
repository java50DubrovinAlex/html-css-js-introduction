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

function personsInRehovotAndMaxId(persons){
    return persons.sort((a, b) => b.id - a.id).find(per => per.address.city === "Rehovot");
}

//=======================================
// 2*) Build IN ONE LINE OF CODE the statistics of persons amount per city. 
//     The expected result is object: {Rehovot:2, 'Tel-Aviv':1,Lod:1}

function personsInCity(persons) {
    // first ver.
    // let res ={};
    // persons.forEach(str => !res[str.address.city] ? res[str.address.city] = 1 : res[str.address.city]++); 
    // return res;

    //find in internet -> // return persons.reduce((acc, person) => { acc[person.address.city] = (acc[person.address.city] || 0) + 1; return acc; }, {})


    // second ver.
    return persons.reduce((acc, person) => {!acc[person.address.city] ? acc[person.address.city] = 1 : acc[person.address.city]++; return acc;}, {})
        
}

   console.log(personsInRehovotAndMaxId(persons));
console.log(personsInCity(persons));
const student = [
    { firstName: 'Vitaliy', lastName: 'Poruchenko', ratting: 60 },
    { firstName: 'Oleg',    lastName: 'Batun',      ratting: 85 },
    { firstName: 'Ivan',    lastName: 'Sidorchuk',  ratting: 90 },
    { firstName: 'Igor',    lastName: 'Mandzyuk',   ratting: 75 },
    { firstName: 'Nazar',   lastName: 'Bochnak',    ratting: 60 }
                 ];


// Вивести імена та прізвища одногрупників по алфавіту
const sortlastName = function (a , b) {
    if (a.lastName > b.lastName) {
        return 1;
    }
    if (a.lastName < b.lastName) {
        return -1;
    }
    return 0;
};


// Вивести імена та прізвища за оцінками
student.sort(sortlastName);
const sortRatting = function (a , b) {
    if (a.ratting < b.ratting) {
        return 1;
    }
    if (a.ratting > b.ratting) {
        return -1;
    }
    return 0;
};
student.sort(sortRatting);


// Вивести імена та прізвища учнів із максимальною оцінкою
let maxRate = student[0];
for (let i = 0; i < student.length; i++){
    if (student[i].ratting > maxRate.ratting) maxRate = student[i];
}
console.log(maxRate);


//  Вивести імена та прізвища учнів із мінімальною оцінкою
let minRate = student[0];
for (var i = 0; i < student.length; i++){
    if (student[i].ratting < minRate.ratting) minRate = student[i];
}
console.log(minRate);


//  Вивести імена та прізвища учнів із середньою оцінкою
let middleRate = 0;
let y;
for (let keys in student) {
    middleRate += student[keys].ratting;
}

y = Math.ceil(middleRate / student.length);

if (student.find(x => x.ratting === y) === "undefined") {

}
console.log(student);
console.log("=>",student.find(x => x.ratting === y));
console.log("=>", y);


// Завдання 3
function rate (){
    for (const key in student) {
        let value;
        value = Math.round(((maxRate/student[key].ratting)*100)-100);
        student[key].rate = value;
    }
}
rate();
console.log('\n'+'додавання поля rate: ');
console.log(student);

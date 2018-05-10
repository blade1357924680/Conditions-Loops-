/*##0*/
var tel = + (prompt('Please,enter phone number'));
if ((tel >= 9) && (tel <= 11)) {
    alert('Phone is right format')
    } else {
    alert('Phone is wrong format');
}

/*##1*/
var objectA = {
    name: 'John',
    lastname: 'Dou',
    age: 50
}
console.log(objectA);
var objectB = {};
for (var key in objectA){
    objectB[key] = objectA[key];
}
console.log(objectB);



/*##3* Не доделал/
/*var name = prompt('Please,enter your name');
var password = '';
var users = [{
    name: 'Alex',
    password: 123
}, {
    name: 'Chris',
    password: 456
}, {
    name: 'Bill',
    password: 789
}];
for (var i = 0 ; i < users.length; i++){
    while (name !== users[i].name){
        name = prompt('Please,enter your name');
    }
}*/

/*##4*/
var sumArray = 0;
var sum = 0;
while((typeof sumArray) === 'number'){
    sumArray = +(prompt('Please enter number'));
    if (sumArray/sumArray === 1){
        sum = sum + sumArray;
    } else{
        break;
    }
}
console.log(sum);

/*##5*/
var sum = 0;
var summetNumber = +(prompt('Please enter number'));
for (var i = 0; i <= summetNumber; i++){
    sum = sum + i;
}
console.log(sum);

/*##6* Не успел,сделаю дома/







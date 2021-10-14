
let arr = [999];

function array(num) {

    if (num > 0) {
        arr.push(num % 10);
        array(parseInt(num / 10));

    }

    return arr;
}

array(29333);
console.log(arr);


let obj = {};
let counter = 1;
function uuu(arg) {
    counter = 1;
    for (let j = 1; j <= arg.length; j++) {

        if (arg[0] === arg[j]) {
            counter++;

        }

        obj[arg[0]] = counter;

    }
    if (arg.length > 1) {
        uuu(arg.filter(function (item) {
            return item !== arg[0];
        }));

    }
    return (obj);

}

console.log(uuu(arr));

const printName = function() {
    let helloName = "hello Jhon"
    inner = function() {
        return helloName;
    }
    return inner;
}

console.log(printName()());
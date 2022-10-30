
const printName = function() {
    let helloName;
    inner = function() {
        helloName = "hello Jhon";
        console.log(helloName);
        return helloName;
    }
    return inner;
}

printName()();

function spy () {
    return "hi spy";
}

function receivesAFunction(fun) {
    return fun()
}



// console.log(receivesAFunction(spy));


function returnsANamedFunction() {
    return spy
}

// console.log(returnsANamedFunction());

function returnsAnAnonymousFunction() {
    return function () {
        return "hi";
    }
}

console.log(returnsAnAnonymousFunction());
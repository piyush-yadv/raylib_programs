function f(x){
    console.log(x);
    g(x);
}

function g(x){
    console.log(x ** 2);
    h(x);
}

function h(x){
    console.log(x ** 3);
}

f(5);
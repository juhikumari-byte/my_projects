function greet(name) {
    console.log(" Hello, " + name + "!");
}
greet("Alice");

const add = function(a, b) {
    return a + b;
};
console.log(" Addition:", add(10, 5)); 
let multiply = (x, y) => x * y;
console.log(" Multiplication:", multiply(4, 6)); 
function scopeDemo() {
    console.log(" Scope Demo Start");
    if (true) {
        var a = " var → function-scoped";
        let b = "let → block-scoped";
        const c = " const → block-scoped & immutable";

        console.log("Inside block:");
        console.log(a);
        console.log(b); 
        console.log(c); 
    }
    console.log("Outside block:");
    console.log(a); 
}
scopeDemo();

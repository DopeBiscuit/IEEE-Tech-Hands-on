var sum = 0;

do {
    var x = Number(prompt("Enter Your Number! (Enter 0 to exit!)"));
    sum += x;
}while(x)

document.write(`<h1>${sum}</h1>`);
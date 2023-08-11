var x = prompt("Enter your message!");

for(var i = 1;i < 7;i++)
{
    document.write(`<h${i}>${x}</h${i}>`);
}
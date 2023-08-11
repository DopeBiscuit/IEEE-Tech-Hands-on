function dataValidation()
{
    var Ruser = /^[a-z]$/gi;
    var Rnum = /^(010|011|012|015){1}[0-9]{8}$/;
    var Remail = /([a-z0-9])+@([a-z0-9])+\.[a-z]{3}/i;
    var Rpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

    var username = document.getElementById("user").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    var out = "";
    for(var char of username)
    {
        out += (char == char.toLowerCase()) ? char.toUpperCase(): char.toLowerCase();
    }
    username = out;
    
    if(!username.match(Ruser))
    {
        alert("User name must only contain alphabetic characters.");
        return;
    }
    if(!number.match(Rnum))
    {
        alert("Phone number must be 11 characters long, containing only digits, and start with 010, 011, 012, or 015");
        return;
    }
    if(!email.match(Remail))
    {
        alert("Email must conatain an @, can not contain special charcters and must contain a top level domain, and must contain letter before and after the @.")
        return;
    }
    if(!pass.match(Rpass))
    {
        alert("Password must be at least 8 characters long, and must contain at least 1 uppercase and 1 lowercase letter, and at least 1 number.");
        return;
    }
    
    printData(username, number, email);
    return;
}

function flip() {
    document.getElementById("c-form").style.display = "none";
    document.getElementById("c-answer").style.display = "flex";
    return;
}

function flipBack() {
    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');

    document.getElementById("c-form").style.display = "grid";
    document.getElementById("c-answer").style.display = "none";
    return;
}

function printData(username, number, email)
{ 
    var str = `Dear <p style="color: rgb(230, 190, 190);">${username}</p>, your email is <p style="color: rgb(230, 190, 190);">${email}</p>, and your phone number is <p style="color: rgb(230, 190, 190);">${number}</p>.`;
    document.getElementById("answer").innerHTML = str;
    flip();
    return;
}
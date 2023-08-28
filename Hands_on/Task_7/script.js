
var array = ['apple', 'strawberry', 'banana', 'orange', 'mango'];
var select = document.getElementById('elements');
populate();
solve();


function tabSwitch(param) {
    // List of list items elements
    var list = document.getElementsByClassName('nav-link');

    // resetting all active items, then activating clicked item.
    for (var i = 0; i < list.length; i++) {
        list[i].classList.remove('active');
    }
    param.classList.add('active');

    // Display corresponding div body and hiding others.
    if (param.id == 't1') {
        document.getElementById('task1').classList.remove('d-none');
        document.getElementById('task2').classList.add('d-none');
        // Call task1 function.
        populate();
    }
    else {
        document.getElementById('task1').classList.add('d-none');
        document.getElementById('task2').classList.remove('d-none');
    }
}

function addOption(name, index) {
    var option = document.createElement('option');
    option.value = index;
    option.innerHTML = name;
    return option;
}

function populate() {
    // Clear current elements
    select.innerHTML = '<option selected value="none" disabled class="text-muted">Select Element</option>';

    // Add all elements
    for (var i = 0; i < array.length; i++) {
        select.appendChild(addOption(array[i], i));
    }
    solve();
}

function popper() {
    if(select.value != 'none')
    {
        array.splice(select.value, 1);
        populate(select);
    }
}

function adder() {
    var txt = document.getElementById('txtelm');
    array.push(txt.value);
    txt.value = '';
    populate();
}

////////////////                            Solver part of the JS code

function solve () {
    var q1 = array.every(item => !parseInt(item));
    var q2 = array.some(item => item[0] == 'a');
    var q3 = array.map( item => "I love  " + item);

    console.log("trial");

    que1(q1);
    que2(q2);
    que3(q3);
}

function que1 (ans) {
    var p = document.getElementById('q1p');
    var s = document.getElementById('q1s');

    var imposter = 0;
    for(var i = 0;i < array.length;i++) {
        if(parseInt(array[i])) {
            imposter += 1;
        }
    }

    if(ans) {
        p.innerHTML = "YEP, all your elements are strings.";
        s.innerHTML = '';
    }
    else {
        p.innerHTML = "There is an imposter among us.";
        s.innerHTML = `There are exactly ${imposter} imposter(s) hiding. 🤫`;
    }

}

function que2 (ans) {
    var p = document.getElementById('q2p');
    var s = document.getElementById('q2s');

    var lovers = 0;

    for(var i = 0;i < array.length;i++) {
        if(array[i][0] == 'a') {
            lovers += 1;
        }
    }

    if(ans) {
        p.innerHTML = "Looks like you love my boy 'a'.😁";
        s.innerHTML = `${lovers} items start with the letter 'a'`;
    }
    else {
        p.innerHTML = "Wow, you don't have to be this harsh!";
        s.innerHTML = "Not a single item starts with the letter 'a'";
    }

}

function que3 (ans) {
    var s = document.getElementById('q3s');
    var string = '';

    ans.forEach(element => {
        console.log(element);
        string += element + '<br>';
    });
    console.log(string);
    s.innerHTML = string;
}

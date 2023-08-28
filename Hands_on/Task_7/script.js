
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
        list[i].style.backgroundColor = "#3f3f3f";
    }
    param.classList.add('active');
    param.style.backgroundColor = "#282828";

    // Display corresponding div body and hiding others.
    if (param.id == 't1') {
        document.getElementById('task1').classList.remove('d-none');
        document.getElementById('task2').classList.add('d-none');
        document.getElementById('singers').classList.add('d-none');
        // Call task1 function.
        populate();
    }
    else {
        document.getElementById('task1').classList.add('d-none');
        document.getElementById('task2').classList.remove('d-none');
        document.getElementById('task2').classList.add('d-flex');
        task2();
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
    select.innerHTML = '<option selected value="none" disabled>Select Element</option>';

    // Add all elements
    for (var i = 0; i < array.length; i++) {
        select.appendChild(addOption(array[i], i));
    }
    solve();
}

function popper() {
    if (select.value != 'none') {
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

function solve() {
    var q1 = array.every(item => !parseInt(item));
    var q2 = array.some(item => item[0] == 'a');
    var q3 = array.map(item => "I love  " + item);
    var q4 = array.filter(item => item[0] == 's' || item[0] == 'b');


    que1(q1);
    que2(q2);
    que3(q3);
    que4(q4);
}

function que1(ans) {
    var p = document.getElementById('q1p');
    var s = document.getElementById('q1s');

    var imposter = 0;
    for (var i = 0; i < array.length; i++) {
        if (parseInt(array[i])) {
            imposter += 1;
        }
    }

    if (ans) {
        p.innerHTML = "YEP, all your elements are strings.";
        s.innerHTML = '';
    }
    else {
        p.innerHTML = "There is an imposter among us.";
        s.innerHTML = `There are exactly ${imposter} imposter(s) hiding. 🤫`;
    }

}

function que2(ans) {
    var p = document.getElementById('q2p');
    var s = document.getElementById('q2s');

    var lovers = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i][0] == 'a') {
            lovers += 1;
        }
    }

    if (ans) {
        p.innerHTML = "Looks like you love my boy 'a'.😁";
        s.innerHTML = `${lovers} items start with the letter 'a'`;
    }
    else {
        p.innerHTML = "Wow, you don't have to be this harsh!";
        s.innerHTML = "Not a single item starts with the letter 'a'";
    }

}

function que3(ans) {
    var s = document.getElementById('q3s');
    var string = '';

    ans.forEach(element => {
        string += element + '<br>';
    });
    s.innerHTML = string;
}

function que4 (ans) {
    var p = document.getElementById('q4p');
    var s = document.getElementById('q4s');
    s.innerHTML = '';

    if(ans.length) {
        p.innerHTML = `Wowzer, ${ans.length} items start with 'b' or 's'.`
        ans.forEach(item => s.innerHTML += item + ', ');
    }
    else {
        p.innerHTML = "Not a single item starts with 'b' or 's'😔"
        s.innerHTML = 'Now this is BS😤'
    }
}



/////////////////////////                           Task 2
var objects = {};
var bands = document.getElementById('bands');
var singersSelect = document.getElementById('sngrslct');
var singer = []

function task2() {
    bands.innerHTML = '<option value="none" disabled selected>Select Band</option>'

    var xhr = new XMLHttpRequest();

    //2) Connect [Open Connection]
    xhr.open("GET", "rockbands.json");

    //3)send
    xhr.send('');

    //4) Listner [onreadystatechange]
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) { //404
                // console.log( JSON.parse(xhr.responseText) );
                // console.log(xhr.responseText);

                objects = JSON.parse(xhr.responseText);//[{},{},{}]
                var items = Object.keys(objects);

                for (var i = 0; i < items.length; i++) {
                    bands.appendChild(addOption(items[i], items[i]));
                }
            }
        }
    }
}

function singers () {
    document.getElementById('singers').classList.remove('d-none');
    singersSelect.innerHTML = '<option value="none" disabled selected>Select Singer</option>'
    
    singer = objects[bands.value];
    for(var i = 0;i < singer.length; i++) {
        singersSelect.appendChild(addOption(singer[i].name, singer[i].value));
    }
}

function redirect () {
    window.open(singersSelect.value, "_blank");
}
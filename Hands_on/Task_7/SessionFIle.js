var a = 3;
// a &&= 3;
a ||= 2;






var c = null ;
c ??=7;







var num1 = 150_000_00;
// console.log(num1);


var x = 10;
var myPromise1 = new Promise(function(resolve, reject){
    if(x == 0){
        resolve("Succesfullyyy done");
    }else{
        reject("7asal Error");
    }
})







// myPromise1.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })

class Person{
    // private name;
    // private age;
    // public Person(name,age){
    //     this.name = name;
    //     this.age = age;
    // }
    constructor(name="default name",age=30){
        this.name = name;
        this.age = age;
    }

    test(){
        console.log("Hello I'm working");
    }

}








// class employee extends Person{
//     constructor(name,age,salary){
//         super(name,age);
//         this.salary = salary;
//     }

// }
// var person  = new employee ("ahmed",20,20000);
// person.test();

    
    var arr = [2,3,4,20,5]

    //find


    // num=>num == 20 // function(num){ returns num == 20}
    // console.log(arr.find(function(num,index){
    //     console.log(num);
    //     return num == 20;
    // }));

    // console.log (
    //     arr.find((num)=>{return num == 200})
    // )//undefined
    //every [All Values At Array does it Equal To Num???]
    // console.log (
    //     arr.every( num=>num == 20 )
    // )
    // console.log (
    //     arr2.every( num=>num == 5 )
    // )//true
    //some [if there exist at least one item???]
    // console.log (
    //     arr.some( num=>num == 20 )
    // )//true
    // console.log (
    //     arr.some( num=>num == 2 )
    // )//false
    
    //Filter
    // console.log (
    //     arr.filter( num=>num > 4 ) 
    // )//[20]
    // console.log(arr);
    // console.log (
    //     arr.filter( num=>num % 2 == 0 )
    // )//[20]

    // console.log (
    //     )//[20]
    //     arr.forEach( num=> console.log(num)  )



    // console.log (
    //     arr.map( num=> "this is num "+num  )
    // )//[20]

   

    // var object = {firstname:"abdelrhman",age:22,blalbla:"blaala"};
    // var object2 = {firstname:"ahmwed",age:22,blalbla:"blaala"};
    // var object3 = {firstname:"hossam",age:22,blalbla:"blaala"};

    // var arrayOfObject = {object,object2,object3}


    // console.log(arrayOfObject);

    var object = {username:"bedobeco",age:20,department:"IT",
    interests:{
        firstinterest: "programming",
        secondinterest: "gaming"
    }
    }
    console.log(object);

    function GetData(){

        var xhr = new XMLHttpRequest();
        
        //2) Connect [Open Connection]
        xhr.open("GET","https://jsonplaceholder.typicode.com/users");
        
        //3)send
        xhr.send('');
        
        //4) Listner [onreadystatechange]
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){ //404
                    // console.log( JSON.parse(xhr.responseText) );
                    // console.log(xhr.responseText);

                    var Users = JSON.parse(xhr.responseText);//[{},{},{}]
                    console.log(Users);
                    var myDiv = document.getElementById("div");
                    for(let i = 0; i<Users.length;i++){
                        
                        myDiv.innerHTML += 
                        "<h1>"+Users[i].name+" Lives at "+Users[i].address.street+", "+Users[i].address.city+"</h1>"
                    }
                }
            }
        }



        //#endregion
    }
    GetData();

    
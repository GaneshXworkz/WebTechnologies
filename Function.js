
//function Express

let result =function add(a,b){
    console.log(a+b)
}

result(10,20)

//ananymous function

let ananmous =function(){
    console.log("calling ananymous function")

}
ananmous()

//LIFE immediate invoking function 
//time fuction in javaScript
//setTimeOut -After a particular time function will be called
//setTimeInterval -for every specified time function will be called

function repeatTask(){
    alert("Prepare for interview")
}

setTimeout(repeatTask,1000)


function dontUse(){
    alert("Dont use mobial phone preaparing")

}

setInterval(dontUse, 5000)

//Array
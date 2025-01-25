// const date2=new Date();
// console.log(date2);//this is the current date of international standard
// console.log(date2.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));// this is indian standard date

   
time =new Date().toLocaleTimeString();

// console.log(time);
// function hello(){
//     console.log("hello world");
// }
// // setTimeout(hello,3000);
// interval=setInterval(hello,3000);

// setTimeout(()=>{
//     clearInterval(interval);
// },8000);


"use strict"
let obj1={Name: "Aline", Age:"20", city:"New york"}
let obj2={Name: "Aline", Age:"20", city:"New york"}
let obj3={Name: "Aline2", Age:"2", city:"delhi"}
let obj=['2','4','5',"8"]

let ob1=Object.keys(obj1);
let ob2=Object.keys(obj1);
// console.log(ob1);
// console.log(ob2);
checkfun=()=>{
    if(ob1===ob2){
        return "equal";
    }
    else{
        return "not equal";
    }
}

// console.log(checkfun());

// for(let key of obj ){

//     // console.log("a=>" + obj[key]);
//     // console.log("b=>"+key)
    
// }

const forlop=()=>{
    for (let key in obj1){
        console.log(key+"=>"+ obj1[key])
       // console.log()
   }
   
}
// forlop();

RestParmeter=()=>{
 
   
}

const sum=(...num)=>{
        
    console.log(num);
//    let a = typeof(num)
//    let mysum=0;
//    console.log(a);
//    for(let x of num){
//     mysum=mysum+x;
//    }
    
// return mysum;

return num.reduce((accu,curval)=>(accu=accu+curval),0);
}


console.log(sum(1,2,4,3));
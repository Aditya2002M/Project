// function makeslice(str,start,end){
//     console.log("after slicing the string :",str.slice(start,end));
// }
// makeslice("hey aditya",2,9);

// function getsubstring (str,start,end){
//     console.log("substring is :",str.getsubstring(st));
// }

// console.log(parseInt("272assdsd"))

// let arr =[1,2,3,4]
// arr.shift(6)
// console.log(arr)


// const beforeTime = new Date();
// const beforetimeStamp = beforeTime.getTime();
// function getsum(){
//     let sum =0;
//     for (let i=0;i<100000000;i++){
//         sum +=i;
//     }
//     return sum ;
// }
// var ans = getsum();
// const afterTime = new Date();
// const afterTimeStamp =afterTime.getTime();

// let timeDifference = afterTime - beforeTime;
// console.log("time taken by function : ",timeDifference);



// function print(){
//     console.log(arguments)
// }
// const a= 10;
// print(a);


function fun1(){
    return 2;
}
function fun2(){
    return 4;
}
let a =(fun1,fun2);

console.log(a);
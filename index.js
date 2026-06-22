// let obj = {
//     name:"abhishek",
//     marks:{
//         math :70,
//         hindi:50,
//     }
// }
// obj.city="bhopal"
// obj["contry"]="india"
// obj.marks.eng = 90
// console.log(obj.marks);


// let student =[
//     {
//         name:"abhishek",
//         age:20
//     },
//      {
//         name:"abhishek",
//         age:20
//     },
//      {
//         name:"abhishek",
//         age:20
//     }
// ]
// console.log(student[0].name);

// let num = Math.random()*100+1;
// let number=Math.floor(num)
// console.log(number);

// function mult(a){
//   for(let i=0;i<=10;i++){
//     console.log(`${a}*${i}=${i*a}`);
//   }
// }

// mult(7)


// function sum(a){
//     let num = 0;
//     for(let i=0;i<=a;i++){
//         num=num+i;

//     }
//     console.log(num)
// }

// sum(5)


// function mrgstr(){
// let first = "abhishek";
// let last = "patel";

// // let fullname= first+""+last;

// console.log(first.concat(last));
// }

// mrgstr();

// let str = "aabhidsjkhds";
// let uni="";
// for(let i = 0; i<str.length;i++){
//     if(!uni.includes(str[i])){
//         uni += str[i];
//     }

// }
// console.log(uni);


// let contries =["paraswada","nandna", "bhopal"];
// let larcon ="";

// for(i=0;i<contries.length;i++){
//     for(j=0;j<contries[i].length;j++);
//     if(contries[i] >= contries[j]){
//       larcon = contries[i];
//     }
// }


// let str = "abhishek";
// let vowels = ""
// let count = 0;

// for (let i = 0; i <= str.length; i++) {
//     if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
//         count++;
//     }
// }
// console.log(count);


// let interval = setInterval(()=>{
//     console.log("hello ");
// },1000);

// setTimeout(()=>{
//     clearInterval(interval);
//     console.log("finish interval time");
// },6000);


// let arr =[1,2,3,4,5,6,7];
// let newarr = arr.map((el)=>2*el);
// console.log(newarr)

//  let arr =[1,2,3,4,5,6,7];
//  let newarr = arr.filter((el)=> 2%el!=0);
//   console.log(newarr)

//  [2,4,6].every((el)=>el%2);

// [2,4,6].some((el)=>el%2);

// let arr = [1,2,3,4];

// let neewarr = arr.reduce((res,el)=>{
//     if(el>res){
       
//         return el;
//     }else return res
    
// })


// let arr =[1,2,3,3,4,4,5,6];

// let arrr = (arr)=>{
//     console.log(...arr)
// }
// arrr(arr)




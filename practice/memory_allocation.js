//there are two types of data we have first one is premitive and another one is the non premative
//premitive data type conatins data type like Null,number,boolean,bigint,string,symbol,undefine which is generally store the data Stack memory which is used the copy of the variable
//non-premative data type contains the object and function  which is uesd the heap get refernce means if you perform the change in it it will repelicate in the original work

//Stack(primitive Type)   Heap(Non-Premetive data type)
//stack memory //show chage in only copy not in thr original one

let myName="vipul";
let name1=myName;
name1="vipulhedaoo"
console.log(name1)
console.log(myName)

// non premeitive type heap memory
let userone={
username:"Ram Raghuvanshi",
 upi:"RamRaghuvanshi@ybl"
}
let usertwo=userone
console.log(userone.username)
console.log(userone.upi)
usertwo.username="sita Raghuvnshi"
usertwo.upi="sitaRaghuvanshi@ybl"
console.log(usertwo.upi)
console.log(usertwo.username)
console.log(userone.username)//change in main variable due to reference of heap memory 
console.log(userone.upi)//change in main variable

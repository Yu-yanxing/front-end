//method ①
function printHello(){
    console.log("hello")
}
//method的呼出
printHello();

//method ② 有return
function sum(a,b){
    return a+b;
}
//method的呼出
console.log(sum(1,2));

//default
function print(str1, str2="hello",str3="hh"){
    console.log(str1 + "" +str2 +str3); 
}
//呼出
print("八潮市");
print("八潮市","割り算");
print("八潮市","割り算","ワンピース");

//lambda
let add =(x,y) => x+y;
console.log(add(2,3));

//object作成
let obj = {name:"Alice",id:122,isStudent:true};
console.log(obj);
//Alice名字的显示①
console.log(obj.name);
//Alice名字的显示②
console.log(obj["name"]);
//上书的仕方
obj.id = 30;
console.log(obj.id);
obj["isStudent"] = false;
console.log(obj["isStudent"]);
//for
/*for(let i = 0; i<0; i++){
    console.log(i);
}*/
//for-of
/*for(let a of arr){
    console.log(a);
}*/
for(let key in obj){
    console.log(key +":" + obj[key]);
}
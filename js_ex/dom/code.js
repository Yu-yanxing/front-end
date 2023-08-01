//要素取得
let text = document.getElementById("text-1");
console.log(text);
//要素内容取得
console.log(text.innerHTML);
//要素内容取を変更する
text.innerHTML = "Hello";

//a的链接获得 id link-1
//要素取得
let link = document.getElementById("link-1");
console.log(link);
//要素内容取得
console.log(link.innerHTML);
//href link内容获得
console.log(link.href);
//url変更
link.href = "https://developer.mozilla.org";
//target_blankをつけ足す
link.target = "_blank";

//指定class的值获得 ex-1
let ex1 = document.getElementsByClassName("ex-1");
console.log(ex1);
console.log(ex1[0]);
//指定tag值的获得 div
let ex2 = document.getElementsByTagName("div");
console.log(ex2);
console.log(ex2[2]);


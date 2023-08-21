$(function(){
//<ol>要素取得
let list = $("#list");
//<a>要素追加
let newLink = $("<a>");
//a标签内容追加
newLink.html("developer.mozilla.org");
//list的末尾追加
list.append(newLink);

//新list作成 <a>中加入li
let newItem = $("<li>");
list.append(newItem);
newItem.append(newLink);
 //练习-加入p标签并显示and more
 let newText =$("<p>");
newText.html("And more...");
//list的在下 插入
list.after(newText);
//要素的丸 消除
//list.remove();

//要素的中间取空 empty
list.empty();

//no click
$("#button1").click(()=>{
    console.log("hello");
})
//addEvent~
$("#button1").on("click",()=>{
    console.log("Goodbye");
})
$("#button1").on("click",()=>{
    console.log("Goodbye2");
})


});






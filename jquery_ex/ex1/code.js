$ (function() {
//中间是jquery的处理书写
//要素的取得
let text = $("#text-1");
//要素内容hello取得
console.log(text.html());
//hello-->goodbye变更
text.html("GoodBye")
});

//link
//link要素的取得
let link = $("#link-1");
//link-url
console.log(link.attr("href"));
//link变更
link.attr("href","https://kinarino.jp/cat8/38722");
link.attr("target","_blank");

//css
let texts = $(".text-class");
//上色
texts.css("color","red");
texts.eq(0).css("color","red");
texts.eq(2).css("color","red");
$("#text1").css();


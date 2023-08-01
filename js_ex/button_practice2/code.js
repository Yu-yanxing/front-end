//要素获得
let label = document.getElementById("label");
let button1 = document.getElementById("change-text1");
let button2 = document.getElementById("change-text2");
let button3 = document.getElementById("change-text3");

//リンゴ变更键 第1个按钮作成
button1.addEventListener('click',() => {
    label.innerHTML = "リンゴ";
});
//バナナ变更键 第2个按钮作成
button2.addEventListener('click',() => {
    label.innerHTML = "バナナ";
});
//みかん变更键 第3个按钮作成
button3.addEventListener('click',() => {
    label.innerHTML = "みかん";
});

/*练习：值:0 三个键为リセット 1を加算 1を減算 
与practice2 类似*/
let result = document.getElementById("text-result");
let button1 = document.getElementById("change-text1");
let button2 = document.getElementById("change-text2");
let button3 = document.getElementById("change-text3");

//值的文字列的定数
const BASE_TEXT = "值 : "
//计算结果的容纳变量
let resultValue = 0;
//值的显示
function changeResultText(){
    result.innerHTML = BASE_TEXT + resultValue;
}
//值的计算方法
function calculateResultValue(setValue){
    resultValue = resultValue + setValue;
}
//
buttonReset.addEventListener('click',() => {
    //
    resultValue =0;
    changeResultText();
})
//
buttonAdd.addEventListener('click',() => {
    calculateResultValue(1);
    changeResultText();
})
//
buttonSub.addEventListener('click',() => {
    calculateResultValue(-1);
    changeResultText();
})


/*button1.addEventListener('click',() => {
    label.innerHTML = "リセット";
});
button2.addEventListener('click',() => {
    label.innerHTML = "1を加算";
});
button3.addEventListener('click',() => {
    label.innerHTML = "1を減算";
});*/
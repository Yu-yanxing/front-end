//练习题代入讲新课；
$(function(){
 $(".sample_btn").click(function(){
  $.ajax({
    url:'text.html',
    type:'GET',
    dataType: 'html'
  }).done(function(data){
   //通信成功的情况:
   $(".result").html(data);
  }).fail(function(){
  //通信bu成功的情况:
  console.log("通信bu成功");
 });
});
});
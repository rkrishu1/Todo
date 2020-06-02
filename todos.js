// alert("connected");
$("ul").on("click","li", function() {
	$(this).toggleClass("completed");
});

//click on x to delete todos
$("ul").on("click" ,"span",function(event){
	$(this).parent().fadeOut(500,function(){
	$(this).remove();//.parent gives the whole li and remove deletes the whole li and this is for span
	});
	event.stopPropagation();//stopPropagation() is a jquery method which stop further action to occur it led to preform only one task
       
});
//to create a new todos
$("input[type='text']").keypress(function(event){
	if(event.which ===13){ //13 is a code for enter key 
		 var todoText=$(this).val();
		 $(this).val("");
          $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>")//append is used to add todotext to ul



}

});
$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle();
});
$('.icon1').keydown(function(e){
	if (e.which==37) {
		alert("left pressed");
		return false;
	}
});






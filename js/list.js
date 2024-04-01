$("table").on("click", "tbody td", function(event){
	$(this).children(".fa-check").css("opacity", "1");
	$(this).css({
		color: "rgba(121, 125, 122, 0.8)",
		textDecoration: "line-through"
	})
	event.stopPropagation();
})

$("table").on("click", "span", function(){
	$(this).parent(".second").parent("tr").fadeOut(400, function(){
		$(this).remove();
		if($("tr").length===1){
		$("h1").html("<h1>~ Good Job! ~</h1>");
	}
	})	
})

$("input[type=text").keypress(function(event){
	if(event.which===13){
		$("table").children("tbody").append("<tr><td><i class=\"fas fa-check fa-md\"></i>" + $(this).val() + "</td><td class=\"second\"><span><i class=\"fas fa-trash-alt fa-lg\"></i></span></td></tr>");
		$(this).val("");
		$("h1").html("<h1>~ Let's do this ~</h1>");
	}
})
$(".fa-edit").click(function(){
	if($("input[type=text]").css("display")==="inline-block"){
		$("input[type=text]").css("display", "none");
		$(this).css("float", "unset");
	}
	else{	
		$("input[type=text]").css("display", "inline-block");
		$(this).css("float", "right");
	}
})

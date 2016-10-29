$("#menu").click(function(){
	console.log("clicked");
	var currentState=$("#menu-content").css("height");
	console.log(currentState);
	if (currentState =="0px") {
		$("#menu-content").css("height", "250px");
	} else{
		$("#menu-content").css("height", "0px");

	}
})
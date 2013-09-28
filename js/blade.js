$(function(){
	initEvent();
	
});

function initEvent(){ 
	$("#ostg").hover(function(){
		$("#ostd").show();
	},function(){
		$("#ostd").hide();
	});
	$("#ostd").hover(function(){
		$("#ostd").show();
		$("#osth").css("z-index","2222");
	},function(){
		$("#ostd").hide();
	});

	$("#osttotal").hover(function(){
		$("#ostp").show();
	},function(){
		$("#ostp").hide();
	});


	$(".tabli").hover(function(){
		$(this).children(".taba").addClass("current");
		$(this).children(".lul").show();
	},function(){
		$(this).children(".taba").removeClass("current");
		$(this).children(".lul").hide();
	});


	$("#mlk").hover(function(){
		$(".listmain").show();
	},function(){
		$(".listmain").hide();
	});
}


//setInterval("fun();",1000);
//function fun(){
	//var time = new Date().toLocaleString();
	//alert(time);
//}
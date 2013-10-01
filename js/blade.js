$(function(){
	initEvent();
	handle = setInterval("showImg();",3000);
	initShowimg();
	initTabs();
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


function initShowimg(){
	$(".adbtn").hover(function(){
		clearInterval(handle);
		for (var i = 1; i <= 7; i++) {
	        var id1 = "#" + i;
	        $(id1).css({"background-position":"0 0"});
	        var img ="#img" +i;
            $(img).fadeOut("fast");
 	    }
 	    var idd = $(this).attr("id");
        $("#"+idd).css({"background-position":"-16px 0"});
        var img ="#img" +idd;
        $(img).fadeIn("slow");
     	curIndex = idd;  
	},function(){
		handle = setInterval("showImg();",3000);
	});
}


var curIndex = 1;
function showImg(){
	for (var i = 1; i <= 7; i++) {
	    var id1 = "#" + i;
	    $(id1).css({"background-position":"0 0"});
	    var img ="#img" +i;
        $(img).fadeOut("fast");
 	}
    var id2 = "#" + curIndex;
    //alert(id2);
    $(id2).css({"background-position":"-16px 0"});
    var img ="#img" +curIndex;
    $(img).fadeIn("slow");
 	curIndex = curIndex % 7 +1;
}


function initTabs(){
	$(".tabhover").hover(function(){
		$(this).addClass("currenthover");
	},function(){
		$(this).removeClass("currenthover");
	});
	$(".tabs").mouseover(function(){
		for (var i = 1; i <= 4; i++) {
		    var ele = $(this).attr("id");
		    var chtab = "chtab" + i;
		    if (ele == chtab) {
		    	$("#"+chtab).css({"color": "#8b0303", "border": "3px solid #6b0a0d"});
		    	$("#lay"+i).show();
		    }else{
		    	$("#"+chtab).css({"color": "#686868","border": "3px solid transparent"});
		    	$("#lay"+i).hide();
		    }
		}
	});

	$(".tabs1").mouseover(function(){
		for (var i = 1; i <= 4; i++) {
		    var ele = $(this).attr("id");
		    var chtab = "chtab1" + i;
		    if (ele == chtab) {
		    	$("#"+chtab).css({"color": "#8b0303", "border": "3px solid #6b0a0d"});
		    	$("#lay1"+i).show();
		    }else{
		    	$("#"+chtab).css({"color": "#686868","border": "3px solid transparent"});
		    	$("#lay1"+i).hide();
		    }
		}
	});

	$(".tabs2").mouseover(function(){
		for (var i = 1; i <= 7; i++) {
		    var ele = $(this).attr("id");
		    var chtab = "chtab2" + i;
		    if (ele == chtab) {
		    	$("#"+chtab).css({"color": "#8b0303", "border": "3px solid #6b0a0d"});
		    	$("#lay2"+i).show();
		    }else{
		    	$("#"+chtab).css({"color": "#686868","border": "3px solid transparent"});
		    	$("#lay2"+i).hide();
		    }
		}
	});

	$(".tabs3").mouseover(function(){
		for (var i = 1; i <= 7; i++) {
		    var ele = $(this).attr("id");
		    var chtab = "chtab3" + i;
		    if (ele == chtab) {
		    	$("#"+chtab).css({"color": "#8b0303", "border": "3px solid #6b0a0d"});
		    	$("#lay3"+i).show();
		    }else{
		    	$("#"+chtab).css({"color": "#686868","border": "3px solid transparent"});
		    	$("#lay3"+i).hide();
		    }
		}
	});
}


//setInterval("fun();",1000);
//function fun(){
	//var time = new Date().toLocaleString();
	//alert(time);
//}
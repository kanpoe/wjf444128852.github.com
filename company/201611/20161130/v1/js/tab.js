
$(document).ready(function(){

	

	$('.swt_m .close').click(function(){

	$(".swt_m_bg").hide();

	$(".swt_m").slideUp();

	setTimeout("openM()",25000);//10000

});

	

	setTimeout("openM()",3000);//10000

})





function openM(){

	$(".swt_m_bg").show();

	$(".swt_m").slideDown();

}





 

 



  
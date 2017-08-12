$(document).ready(function(){
   var now = moment();
   var time = now.format("h:mm:ss a");
   $('#res1').text(time);
   $('#res2').text(time);
   $('#res3').text(time);
   $('#res4').text(time);

console.log("ktime");
	var cDate = moment();
	var iDate = cDate.format("ddd ,DD MMM YYYY");
	$('#result').text(iDate);
	$('#r1').text(iDate);
	$('#r2').text(iDate);
	$('#r3').text(iDate);
});
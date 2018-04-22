const socket = io('https://hidden-spire-15882.herokuapp.com', {
  path: '/nodemanager'
});
  socket.on('basic_stats',function(stats){
		var basic = stats.split('\n');
		console.log(basic);
		$('.spinner').hide();
		$("#cpu").html('<center>'+basic[1]+'</center>');
$("#ram").html('<center>'+ Math.round(basic[2])+'%</center>');
	$("#file").html('<center>'+basic[3]+'</center>');	
  });

//socket.emit('get_cpu_usage');
//socket.on('res_cpu_usage',function(data){

//	console.log(data);
//});
 
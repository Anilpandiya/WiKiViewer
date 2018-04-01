var input ;
$(document).ready(function(){
	
	$("#search").click(function (){
	input = $("#to_search").val();	
	
	getdetails(input);
});

})

function getdetails(input){
	var urlString = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + input + '&format=json&origin=*	';
	
	$.ajax({
		url: urlString,
	    success: function (result) {
	    	$('.info').html('');
			// alert("Success");
			for(var i = 0 ; i < result[1].length ;i++){
				$('.info').append('<div style="background-color:#FCFACC ; margin-bottom:20px ; "><br><a href='+result[3][i]+' target="_blank" >'+result[1][i]+'<br></a><p>'+result[2][i]+'</p><br></div>');
			}
			
		},
		error : function(error){
			alert("Error");
		}
	});
}
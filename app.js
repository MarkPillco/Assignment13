$(document).ready(function(){
	
$.ajax({
		"url": "https://na1.api.riotgames.com/lol/status/v3/shard-data?api_key=RGAPI-0da06ec9-b6e2-48be-a725-c8760ecc0ab5",
		"type": "GET",
		// could be XML or JSON
		"dataType": "JSON",
		success: function(data) {
			console.log(data);
			console.log(":-)");
				$("#One").hide();
				$("#Two").hide();

				// call this function if request works
					// give me an array of last 10 or less articles with my search term
			$(".button").html("The server is: ");
			
			$("button").dblclick(function(){
				$("p").empty();
				$("#One").hide();
				$("#Two").hide();



			})
			
			if (data.services[0].status == "online"){
					$("button").click(function(){
					$(".Status").html('Game Servers are online!');
					$("#Two").show();
					
					
				
			})

			}

			else{
				$("button").click(function(){
					$('p').html('Error, servers are currently offline :(');
					$("#One").show();
					
					
			    	})
				}

			},
			

		error: function(data, textStatus, errorThrown){
			console.log(errorThrown);
			console.log("Rip");
		},


})

})
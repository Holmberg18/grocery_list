var items = [];

$(document).ready(function() {
	if(localStorage.items)items = JSON.parse(localStorage.items);//checking for localStorage existence.
	
	if(!items || !Array.isArray(items)) items = []; //if no items, make array or if not array, make an array out items.
	

	
	$(".add-item").submit(function() {
		var text = $(".add-item_input").val();
		items.push(text);
		localStorage.items = JSON.stringify(items);//add items as an object which we
		
		add(text);	
		return false;
		
	
		
	})
	var add = function(text){
		var li = $('<li><input type="checkbox" class="check-item">' + text + '<img src="images/trash.png"></li>'); //idea to add an trash icon to delete 
		li.find('.check-item').click(function(){
			var itemli = $(this).parent();
			$('.things-i-have #second-list').append(itemli);
			$(this).addClass('hidden')
		});
		var liJquery = $(document.createElement("li")).text(text);
		$(".things-i-need ul").append(li);
		$("img").click(function() { 
		$(this).parent().remove(); 
		});
	}
	
		for(i = 0; i < items.length; i++){
		add(items[i]); 
	}
	
	
});


		
	


// $("ul#theList").append("<li><a href='url-here'>Link Text</a></li>");
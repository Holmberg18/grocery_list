var items = '';

$(document).ready(function() {
	
	$(".add-item").submit(function() {
		var text = $(".add-item_input").val();
		
		
		var li = $('<li><input type="checkbox" class="check-item">' + text + '<img src="images/trash.png"></li>'); //idea to add an trash icon to delete 
		li.find('.check-item').click(function(){
			var itemli = $(this).parent();
			$('.things-i-have #second-list').append(itemli);
			$(this).addClass('hidden')
		});
		var liJquery = $(document.createElement("li")).text(text);
		$(".things-i-need ul").append(li);
		return false;
	})
	
	$(".check-item")
	
});
		
	


// $("ul#theList").append("<li><a href='url-here'>Link Text</a></li>");
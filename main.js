$(document).ready(function() {
	var $input = $('input');
	var $button = $('button');
	var $list = $('.list ul');
	var $warning = $('#warning');

	// button.addEventListener...
	$button.on('click', function(event){
		event.preventDefault();

		if ($input.val() !== '' ) {
			$warning.text('');

			var newTodo = $('<li></li>').html($input.val() + "<span class='delete'> x </span>")
			$list.prepend(newTodo);
			$input.val('');

		} else {
			$warning.text("Item can't be blank!");
		}

			
		}); //end button click
		$list.on('click', function(event){
			var $item = $(event.target);
			
			if ( $item.hasClass('delete') ) {
				console.log('lets delete this item!');
			}


		}); //end button click

		$list.on('click', '.delete', function(event) { console.log('clicked x')
			
			$(this).hide();
			$(this).parent()
				.addClass('strike')
				.delay(1000)
				.hide(700);
		}); //end list click

}); //end document.ready
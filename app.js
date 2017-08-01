
$('#valider').click(function() {
	
	var objet = {
				first_name:	 $('#first_name').val(),
				last_name:	$('#last_name').val(),
				city:	$('#city').val()
	};

console.log(objet);	
$('#username').html(objet.first_name + ' ' + objet.last_name + ' de ' + objet.city );
});



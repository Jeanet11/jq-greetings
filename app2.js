$('#valider').click(function(){
	var prenom = $('#prenom').val();
	var nom = $('#nom').val();
	var age = $('#age').val();

	$('h1').append("Vous vous apppelez "+prenom + " "+ nom + " et vous avez " +age + "ans.");
});

//thead
$('thead').append("<tr class='titre'></tr>");
$('.titre').append("<td>PRENOM</td><td>nom</td><td>age</td>");//affichage dans tableau html

//tbody 
$('#ajout').click(function(){
	var prenom = $('#prenom').val();
	var nom = $('#nom').val();
	var age = $('#age').val();

	$('.pers').append("<tr><td>" + prenom+ "</td>" + "<td>"+ nom +"</td>" + "<td>"+ age +"</td><tr/>");

});
/*
//initialisation objet vide
var objet = {
	prenom : null,
	nom : null,
	age: null
};



//qd on rempli un input les valeurs sont stockées dans l'objet	
$('input').change(function() {
	objet.prenom = $('#prenom').val();
	objet.nom = $('#nom').val();
	objet.age = $('#age').val();
// écriture dans html
	$('h1').html("Vous vous apppelez "+ objet.prenom + " "+ objet.nom + " et vous avez " + objet.age + "ans.");
})
*/


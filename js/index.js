$(document).ready(function(){

	// Define as mascaras dos campos
	$('#peso').mask('000,00', {reverse:true});
	$('#altura').mask('0,00', {reverse:true});
	$('#idade').mask('000');

	$('input').keypress(function(e){
		if(e.keyCode == 13){
			$(this).parent().find('.next, .end').trigger('click');
		}
	});

	// Evento de prosseguir para o próximo campo
	$('.next, .end').click(function(){

		// Verifica se o campo estiver vazio
		if($(this).parent().find('input').val() == ''){
			for (var i = 0; i < 5; i++) {
				$(this).parent().animate({
					marginLeft: '3px'
				}, 30);
				$(this).parent().animate({
					marginLeft: '-3px'
				}, 30);
			}
			$(this).parent().animate({
				marginLeft: '0'
			}, 30);

			$(this).parent().append('<small class="required">Preenchimento do campo obrigatório!</small>');
			$(this).parent().find('small.required').delay(5000).slideUp('slow');
		}else if($(this).parent().find('input').val() == '0'){
			for (var i = 0; i < 5; i++) {
				$(this).parent().animate({
					marginLeft: '3px'
				}, 30);
				$(this).parent().animate({
					marginLeft: '-3px'
				}, 30);
			}
			$(this).parent().animate({
				marginLeft: '0'
			}, 30);

			$(this).parent().append('<small class="required">O valor não é válido!</small>');
			$(this).parent().find('small.required').delay(5000).slideUp('slow');
			
		}else{
			$(this).parent().animate({
				'left': '-100%'
			}, 400);
			$(this).parent().next().show().animate({
				'left': '0'
			}, 400);

			$('.progress').animate({width: '+=33.33%'}, 400);
		}
	});

	$('.end').click(function(){
		if($(this).parent().find('input').val() == ''){
			for (var i = 0; i < 5; i++) {
				$(this).parent().animate({
					marginLeft: '3px'
				}, 30);
				$(this).parent().animate({
					marginLeft: '-3px'
				}, 30);
			}
			$(this).parent().animate({
				marginLeft: '0'
			}, 30);

			$(this).parent().append('<small class="required">Preenchimento do campo obrigatório!</small>');
			$(this).parent().find('small.required').delay(5000).slideUp('slow');
		}else if($(this).parent().find('input').val() == '0'){
			for (var i = 0; i < 5; i++) {
				$(this).parent().animate({
					marginLeft: '3px'
				}, 30);
				$(this).parent().animate({
					marginLeft: '-3px'
				}, 30);
			}
			$(this).parent().animate({
				marginLeft: '0'
			}, 30);

			$(this).parent().append('<small class="required">O valor não é válido!</small>');
			$(this).parent().find('small.required').delay(5000).slideUp('slow');
		}else{
			var peso	= parseFloat($('#peso').val().replace(',','.'));
			var altura	= parseFloat($('#altura').val().replace(',','.'));
			var idade	= parseInt($('#idade').val());
			var imc		= 0;

			imc = peso / (altura*altura);
			imc = imc.toFixed(1);
	 
			window.location.href = "result.html?imc="+imc+"&idade="+idade;
		}

		
	});


});
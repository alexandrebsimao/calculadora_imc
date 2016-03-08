$(document).ready(function(){
	var parametros = paramUrl();
	var idade 	= parametros.idade;
	var imc 	= parametros.imc;
	var frase_peso_ideal	= 'Parabéns, você está no PESO IDEAL :)';
	var frase_peso_ops		= 'Ops, está na hora de rever seus hábitos :/';
	var classificacao 	= '';
	var resultado 		= '';

	if(!idade || !imc){
		window.location.href = "index.html";
	}

	if(idade <= 20){
		resultado = criancasJovens(imc);
	}else if(idade >= 21 && idade <= 65 ){
		resultado = adultos(imc);
	}else{
		resultado = idosos(imc);
	}
	
	imc = (imc+'').replace('.',',');

	$('#resultado').html(resultado);
	$('#imc').html(imc);

	function criancasJovens(imc){
		if(imc < 18.5){
			classificacao = '[Baixo peso] '+frase_peso_ops;
		}else if(imc >= 18.5 && imc <= 24.9 ){
			classificacao = frase_peso_ideal;
		}else if(imc >= 25 && imc <= 29.9){
			classificacao = '[Excesso de peso] '+frase_peso_ops;
		}else{
			classificacao = '[Obesidade] '+frase_peso_ops;
		}
		return classificacao;
	}

	function adultos(imc){
		if(imc < 18.5){
			classificacao = '[Baixo peso] '+frase_peso_ops;
		}else if(imc >= 18.5 && imc <= 24.9 ){
			classificacao = frase_peso_ideal;
		}else if(imc >= 25 && imc <= 29.9){
			classificacao = '[Pré-obesidade] '+frase_peso_ops;
		}else if(imc >= 30 && imc <= 34.9){
			classificacao = '[Obesidade, grau I</strong] '+frase_peso_ops;
		}else if(imc >= 35 && imc <= 39.9){
			classificacao = '[Obesidade, grau II] '+frase_peso_ops;
		}else{
			classificacao = '[Obesidade mórbida] '+frase_peso_ops;
		}
		return classificacao;
	}

	function idosos(imc){
		if(imc < 22){
			classificacao = '[Desnutrição] '+frase_peso_ops;
		}else if(imc >= 22 && imc <= 23.9 ){
			classificacao = '[Risco de desnutrição] '+frase_peso_ops;
		}else if(imc >= 24 && imc <= 26){
			classificacao = frase_peso_ideal;
		}else if(imc >= 27 && imc <= 32){
			classificacao = '[Pré-obesidade] '+frase_peso_ops;
		}else{
			classificacao = '[Obesidade] '+frase_peso_ops;
		}
		return classificacao;
	}


	function paramUrl() {
	    var result = {}, keyValuePairs = location.search.slice(1).split("&");
	    keyValuePairs.forEach(function(keyValuePair) {
	        keyValuePair = keyValuePair.split('=');
	        result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
	    });
	    return result;
	}
	
	$('#btn-classificacao').click(function(){

		if($('#classificacao').is(':hidden')){
			$('#classificacao').slideDown('slow');
		}else{
			$('#classificacao').slideUp('slow');
		}
	});
});
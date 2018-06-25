(function() {

	var val_a, val_b, result, somarInt, val_c, val_d, somarExt, multiplicar;

	function initGlobals() {
	}

	function initLinks() {
	}

	function fn_soma (a, b) {
		return a + b;
	}
	
	function fn_subtrai (a, b) {
		return fn_soma(a, -b);
	}

	function fn_soma1 () {
		result.innerText = fn_soma(parseInt(val_a.value), parseInt(val_b.value));
	}
	function cpValues(){
		val_a.value = val_c.value;
		val_b.value = val_d.value;
	}

	function fn_somaComplete () {
		cpValues();
		var event = new Event('click');
		somarInt.dispatchEvent(event);
	}

	function initButtons() {
		val_a = $("val_a");
		val_b = $("val_b");
		result = $("result");
		somarInt = $("somarInt");
		somarInt.addEventListener('click', fn_soma1);
	}

	function fn_multiplicar () {
		cpValues();
		var op1, op2, i, ret;
		op1 = parseInt(val_a.value);
		op2 = parseInt(val_b.value);
		ret = 0;

		for (i=0;i<op2;i++) {
			ret = fn_soma(ret, op1);
		}

		result.innerText = ret;
	}

	function fn_sub () {
		cpValues();
		result.innerText = fn_subtrai (parseInt(val_a.value), parseInt(val_b.value));
	}

	function fn_dividir () {
		cpValues();
		var op1, op2, i=0, ret;
		op1 = parseInt(val_a.value);
		op2 = parseInt(val_b.value);

		for (ret = op1; ret > 0; i++) {
			ret = fn_subtrai(ret,op2);
		}
		result.innerText = i;
	}


	function initValue() {
		val_c = $("val_c");
		val_d = $("val_d");
		somarExt = $("somarExt");
		multiplicar = $("multiplicar");
		subtrair = $("subtrair");
		dividir = $("dividir");
		somarExt.addEventListener('click', fn_somaComplete);
		multiplicar.addEventListener('click', fn_multiplicar);
		subtrair.addEventListener('click', fn_sub);
		dividir.addEventListener('click', fn_dividir);
	}

	function init() {
		initGlobals();
		initLinks();
		initButtons();
		initValue();
	}

	window.addEventListener('load', function() { init(); });

})();

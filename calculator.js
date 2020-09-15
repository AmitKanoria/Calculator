
var tempStorage;
var op;
function tmpstr(operation){
	tempStorage = Number(document.getElementById('textarea').value);
	document.getElementById('textarea').value = '';
	op=operation
}
		
function concatText(num1){
	var txtfld1 = document.getElementById('textarea');
	txtfld1.value = txtfld1.value + num1;
}


document.getElementById('btn1').addEventListener('click', function(){ concatText('1');});
document.getElementById('btn2').addEventListener('click', function(){ concatText('2');});
document.getElementById('btn3').addEventListener('click', function(){ concatText('3');});
document.getElementById('btn4').addEventListener('click', function(){ concatText('4');});
document.getElementById('btn5').addEventListener('click', function(){ concatText('5');});
document.getElementById('btn6').addEventListener('click', function(){ concatText('6');});
document.getElementById('btn7').addEventListener('click', function(){ concatText('7');});
document.getElementById('btn8').addEventListener('click', function(){ concatText('8');});
document.getElementById('btn9').addEventListener('click', function(){ concatText('9');});
document.getElementById('btn0').addEventListener('click', function(){ concatText('0');});
document.getElementById('btn.').addEventListener('click', function(){ concatText('.');});
document.getElementById('btn+').addEventListener('click', function(){tmpstr('+');});
document.getElementById('btn-').addEventListener('click', function(){tmpstr('-');});
document.getElementById('btn*').addEventListener('click', function(){tmpstr('*');});
document.getElementById('btn/').addEventListener('click', function(){tmpstr('/');});

	

document.getElementById('btn=').addEventListener('click',function(){
	var fieldvalue = Number(document.getElementById('textarea').value);
	var res=0;
	if(op=='+'){
		res = fieldvalue + tempStorage;
	}
	else if(op == '-'){
		res = tempStorage - fieldvalue;
	}
	
	else if (op == '*') {
		res =  fieldvalue * tempStorage;
	}
	else if (op == '/'){
		res = tempStorage / fieldvalue;
	}
	else{
		document.getElementById('textarea').value = 'KUCH NAHI';
	}	
		
	document.getElementById('textarea').value = tempStorage +op+ fieldvalue+"="+res;
});

/*
	* This file is provided for custom JavaScript logic that your HTML files might need.
	* Maqetta includes this JavaScript file by default within HTML pages authored in Maqetta.
*/
require(["dojo/ready"], function(ready){
	ready(function(){
		// logic that requires that Dojo is fully initialized should go here
		dijit.byId('widget_944').set('font', '10px sans-serif');
		dijit.byId('widget_222944').set('font', '10px sans-serif');
		
	});
});



function convertArrayFromQ24(oldValue)
{
	var i = 0;
	
	return i;
}



function convertArrayFromQ24(oldValue) {
	var i = 0;
	var convertedArray = new Array(oldValue.length);
	for (i=0;i<oldValue.length; i++) {
		convertedArray[i] = Math.round(oldValue[i]*(Math.pow(2,24)));
	}
	return convertedArray;
}

function ConvertPowerBoard(oldValue)
{	
	var EPC9146=0;
	var EPC9176=1;
	var EPC9167=2;
	var EPC9145=3;
	var EPC9173=4;
	var unknown=5; 
	

	if (oldValue >= unknown) {
		return unknown;
	}
	else {
		return oldValue;
	}
}


function ConvertEstimatorState(oldValue)
{	
	var EST_State_Error=0;
	var EST_State_Idle=1;
	var EST_State_RoverL=2;
	var EST_State_Rs=3;
	var EST_State_RampUp=4;
	var EST_State_IdRated=5;
	var EST_State_RatedFlux_OL=6;
	var EST_State_RatedFlux=7;
	var EST_State_RampDown=8;
	var EST_State_LockRotor=9;
	var EST_State_Ls=10;
	var EST_State_Rr=11;
	var EST_State_MotorIdentified=12;
	var EST_State_OnLine=13;
	var EST_numStates=14;
	
	
	if (oldValue == EST_State_Error) {
		return EST_State_Error;
	}
	else if (oldValue == EST_State_Idle) {
		return EST_State_Idle;
	}
	else if (oldValue >= EST_State_MotorIdentified) {
		return EST_State_Idle;
	}
	else if (oldValue < EST_State_MotorIdentified) {
		return EST_State_Error;
	}
}



function Zero_Decimals  (oldValue)
{	
	var result = Math.round(oldValue);
	return ( result )
}

function Divideby_1000_andRound(oldValue)
{	
	return  Math.round(oldValue/1000);
}

function Multiplyby_1000_andRound(oldValue)
{	
	return  Math.round(oldValue*1000);
}

function Round_to_two_decimal_places(oldValue)
{	
	return Math.round(oldValue * 100 )/100
}

function DivideByQ24andRound_to_five_decimal_places(oldValue)
{	
	var toQ24 = oldValue/(Math.pow(2,24)); 
	var result = (Math.round(toQ24*100000))/100000;
	if( result == 0) {
		return "0.0";
    }
	return (result)
}	
	
function Round_to_seven_decimal_places(oldValue)
{	
	return Math.round(oldValue * 10000000 )/10000000
}

function Round_to_four_decimal_places(oldValue)
{	
	return Math.round(oldValue * 10000 )/10000
}

function Round_to_Ten_decimal_places(oldValue)
{	
	return Math.round(oldValue * 10000000000 )/10000000000
}				

function Multiply_by_1000_divide_by_Q24_returnString(oldValue)
{	
	var toQ24 = oldValue/(Math.pow(2,24)); 
	var result = new Number(Math.round(toQ24 * 1000));
	var s = result.toString();
	return (s)
}

function Multiply_by_Q24_retString(oldValue)
{	
	var Q24value = oldValue;
	var result = new Number(Math.round(Q24value*(Math.pow(2,24))));
	return ( result.toString() )
}

function Divide_by_Q24_retString(oldValue)
{	
	
	var toQ24 = oldValue/(Math.pow(2,24)); 
	var result = new Number((Math.round(toQ24*100))/100);
	return (result.toString())
}	


function Divide_by_Q24_five_precision(oldValue)
{	
	var toQ24 = new Number(oldValue/(Math.pow(2,24))); 
	var n = toQ24.toPrecision(6);
	var s = n.toString();
	return (s)
}

	
function Multiply_by_Q20(oldValue)
{	
	var Q20value = oldValue;
	var result = Math.round(Q20value*(Math.pow(2,20)));
	return (result)
}

function Divide_by_Q20(oldValue)
{	
	
	var toQ20 = oldValue/(Math.pow(2,20)); 
	var result = (Math.round(toQ20*100))/100;
	if( result == 0) {
		return "0.0";
    }
	return (result)
}


function Multiply_by_Q20_returnStr(oldValue)
{	
	var Q20value = oldValue;
	var result = Math.round(Q20value*(Math.pow(2,20)));
	return ( result )
}

function Divide_by_Q20_returnStr(oldValue)
{	
	
	var toQ20 = new Number(oldValue/(Math.pow(2,20))); 
	var n = toQ24.toPrecision(3);
	var s = n.toString();
	return (s)
}



function Divide_by_Q24_round_four_places(oldValue)
{	
	var toQ24 = oldValue/(Math.pow(2,24)); 
	var result = (Math.round(toQ24*10000))/10000;
	if( result == 0) {
		return "0.0";
    }
	return result.toString();
	
}		

function Divide_by_Q24_Array(oldValue)
{
	var i = 0;
	var convertedArray = new Array(oldValue.length);
	for (i=0;i< oldValue.length; i++) {
		convertedArray[i] = oldValue[i]/(Math.pow(2,24)); 
	}
	
	return convertedArray; 
}


function dec_to_mili(oldValue)
{	
	var result = oldValue*1000; 
	return (result)
	
}

function usec_to_KHz(oldValue)
{	
	var result = Math.round(1000/oldValue); 
	return (result)
	
}


function error_percent_q24(oldValue)
{	
	var toQ24 = new Number(oldValue/(Math.pow(2,24))); 
	var dec = toQ24 * 100;
	var perc = dec.toPrecision(2);
	var s = perc.toString();
	return (s)
}

function precision_two(oldValue)
{	
	var n = oldValue.toPrecision(2);
	var s = n.toString();
	return (s)
}	

function multiply_by_100(oldValue)
{	
	var result = oldValue*100; 
	return (result)
	
}

function Multiply_by_1000_divide_by_Q24(oldValue)
{	
	var toQ24 = oldValue/(Math.pow(2,24)); 
	var result = Math.round(toQ24 * 1000);
	return (result)
}

function Multiply_by_Q24(oldValue)
{	
	var Q24value = oldValue;
	var result = Math.round(Q24value*(Math.pow(2,24)));
	return (result)
}

function Divide_by_Q24_two_precision(oldValue)
{	
	var toQ24 = new Number(oldValue/(Math.pow(2,24))); 
	var n = toQ24.toPrecision(3);
	var s = n.toString();
	return (s)
}	

function Divide_by_Q24_eight_precision(oldValue)
{	
	var toQ24 = new Number(oldValue/(Math.pow(2,24))); 
	var n = toQ24.toPrecision(9);
	var s = n.toString();
	return (s)
}

function DivideQ24_multiply1000(oldValue)
{	
	var toQ24 = oldValue/(Math.pow(2,24)); 
	var result = Math.round(toQ24 * 1000);
	return (result)
	
}

function DivideQ24_multiply1000_eight_precision(oldValue)
{	
	var toQ24 = oldValue/(Math.pow(2,24)); 
	var result = (toQ24 * 1000);
	var n = result.toPrecision(8);
	var s = n.toString();
	return (s)
}


function DivideQ24_multiply360(oldValue)
{	
	var toQ24 = oldValue/(Math.pow(2,24)); 
	var result = (toQ24 * 360);
	var n = result.toPrecision(5);
	var s = n.toString();
	return (s)
}

function Divide1000_multiplyQ24(oldValue)
{      
       var divide = oldValue/1000; 
       var result = divide*(Math.pow(2,24)); 
       return Math.floor(result).toString();
}

function Divide1000(oldValue)
{      
       var divide = oldValue/1000; 
       return divide.toString();
}


function Divide_by_1000_multiply_by_Q24(oldValue)
{	
	var Q24value = oldValue / 1000;
	var result = Math.round(Q24value*(Math.pow(2,24)));
	if( result == 0) {
		return "0";
    }
	return (result)
}	


function Divide_by_Q24(oldValue)
{	
	
	var toQ24 = oldValue/(Math.pow(2,24)); 
	var result = (Math.round(toQ24*100))/100;
	if( result == 0) {
		return "0.0";
    }
	return (result)
}	

function times64( valueFromTarget) {
       return valueFromTarget * 64;
}

function div64( valueToTarget) {
       return valueToTarget / 64;
}

function ModulationConvertFromQ24( valueToTarget) {
       var Q24value = valueToTarget;
       if (Q24value < 0) {
              Q24value = 0;
       }
       else if (Q24value > 1.33) {
              Q24value = 1.33;
       }
       var result = new Number(Math.round(Q24value*(Math.pow(2,24))));
       var w = dijit.byId('widget_3');
       w.set('value',Q24value.toString());
       return result;
}


function Divide_by_Q20_two_precision(oldValue) {
	var toQ20 = new Number(oldValue/(Math.pow(2,20))); 
	var n = toQ20.toPrecision(3);
	var s = n.toString();
	return (s)
}

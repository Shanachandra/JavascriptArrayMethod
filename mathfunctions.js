function evaluatemath(x,y,z)
{

var roundresult=roundfun(y);
console.log("Math.Round()")
console.log("Output is "+roundresult);
 var poweresult=powerfun(x,roundresult);
 console.log("Math.Pow()")
 console.log("Output is "+poweresult);
var sqresult=squarefun(x);
console.log("Math.Sqrt()");
console.log("Output is "+sqresult);
var absresult=absfun(z);
console.log("Math.abs()");
console.log("Output is "+absresult);
var ceilresult=ceilfun(y);
console.log("Math.ceil()");
console.log("Output is "+ceilresult);
var floorresult=floorfun(y);
console.log("Math.floor()");
console.log("Output is "+floorresult);

}

function powerfun(x,y)
{
    var final=x**y;
    //console.log(final);
    return final;
}

function roundfun(roundvalue)
{
var decimal=roundvalue%1;
if(decimal>0.4)
{
    roundvalue=roundvalue+1;

}
var roundfinal=parseInt(roundvalue);
//console.log(roundfinal);
return roundfinal;
}


function squarefun(sqrvalue)
{
    var squarefinal=sqrvalue**0.5;
    return squarefinal;

}
function absfun(absvalue)
{
var absfinal=-(absvalue);
return absfinal;
}

function ceilfun(ceilvalue)
{
    ceilvalue =ceilvalue+1;
    var ceilfinal=parseInt(ceilvalue);
    return ceilfinal;
}

function floorfun(floorvalue)
{
    floorvalue=floorvalue-1;
    var floorfinal=parseInt(floorvalue);
    return floorfinal;
}

function MathModule(evaluatemath,param1,param2,param3)
{
evaluatemath(param1,param2,param3)
}

MathModule(evaluatemath,25,4.7,-7.8)

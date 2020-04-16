//cond

const condfunction=(val)=>{
if(val==10)
{
    return 'water freezes at 0°C';
}
else if(val==100)
{
    return 'water boils at 100°C';
}
else{
    return 'nothing special happens at ' + val + '°C';
}
}
const final=condfunction(10);
console.log(final)

//converge

function convergefunction(data)
{

var total=data.reduce(function (accum,val){
return accum+val;
},0);

var length=data.length;
var finalvalue=total/length;
return finalvalue;
}
const final=convergefunction([2,3,4,5,6,7]);
console.log(final);

//ifelse


const ifelsefunction=(value)=>
{
    if(value=="count")
    {
return value+"(found)";
    }
    else{
        return value+"(Notfound)"
    }

}
const final=ifelsefunction("count");
console.log(final);

//PickAll
const pickallfunction=(arrval,objval)=>
{
    
return arrval.map(function(data)
{
return Object.keys(objval).map(function(key,index)
{
if(objval[key]==data)
{
    var finall=objval[key]
   var result=[
       {
           finall:objval[value]
       }
    ]
    
}
return result
});
});
}
const final=pickallfunction(['a','b'],{a:5,b:10,c:10});
console.log(final);

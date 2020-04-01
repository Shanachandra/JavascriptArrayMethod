
// ArrayMethod.Every()
const isBelowThreshold = (currentValue) => currentValue < 40;
 const array1 = [1, 30, 39, 29, 10, 13];


function predefined(arr,Prefun)
{

for(var index=0;index<arr.length;index++)
{
    if(Prefun(arr[index]))
    {
        continue;
    }
    else{
         return false;
         
     }
}
return true;
}

console.log(predefined(array1,isBelowThreshold))




//ArrayMethod.Filter()
 const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

 //const result = words.filter(word => word.length > 6);

// //console.log(result);
function predefined(word){
    var newarray=[];
    var newindex=0;
    for (var index=0;index<word.length;index++)
    {
        if(word[index].length>6)
        {
            newarray[newindex]=word[index];
            newindex+=1;
        }
    }
    return newarray
}

console.log(predefined(words))



// ArrayMethod.Find()
const array1 = [5, 12, 8, 130, 44];

//const found = array1.find(element => element > 10);

//console.log(found);
// expected output: 12

function predefined(array)
{
var result;
for(var index=0;index<array.length;index++)
{
    if(array[index]>10)
    {
        result=array[index];
        return result;
    }
}
return result;
}

console.log(predefined(array1))




//ArrayMethod.FindIndex()
const array1 = [5, 12, 8, 1, 4];

const isLargeNumber = (element) => element > 13;

//console.log(array1.findIndex(isLargeNumber));
// expected output: 3

function predefined(array, prefun)
{
var result;
for(var index=0;index<array.length;index++)
{
    if(prefun(array[index]))
    {
     result=index;
     return result;
    }
    else{
        continue;
    }
}
return -1;
}

console.log(predefined(array1,isLargeNumber))



//ArrayMethod.some()

const array = [1, 21, 3, 41, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

//console.log(array.some(even));
// expected output: true

function predefine(arr,newfunc)
{
 var result=false;
 for(var index=0;index<arr.length;index++)
 {
     if(newfunc(arr[index]))
     {
         result=true;
         return result;
     }
 }
 return result;
}
console.log(predefine(array,even))



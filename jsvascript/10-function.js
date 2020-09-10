function add(x, y){
    return x + y;
}
console.log(add(5, 5));

//Anonymous functions
sum = function(x, y){
    console.log(x + y);
} 
console.log(typeof(sum))
sum(1, 2);

addition = (x, y)=>{
    console.log(x + y);
} 
console.log(typeof(addition))
addition(6, 8);

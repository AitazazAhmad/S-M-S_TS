let name = String(prompt(`Enter the Name of the customer:`));
let limit = Number(prompt(`Enter the total items:`));
let items : Number[] = [];
for(let i=0;i<limit ; i++)
{
   items [i] = Number(prompt(`Enter the item #${[i+1]}`));
}
let total  = items.reduce((e1,e2)=>
{
    return Number(e1+e2);
});
console.log(`The total amount of the items are: ${total}`);
let amount = Number(prompt(`Enter the total amount from the customer:`));
let difference =()=>
{
    return amount - Number(total) ;
}
console.log(`The balance amount are is:${difference()}`);

console.log(`Thanks ${name} for shopping:`);




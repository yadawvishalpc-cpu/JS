//Const = Const means fix value they not change 
// Let = let means we change the value
//


const accountId = 144553
let accountEmail = "Vishal@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed  
// because  that acc id is const that not change 
// ACC ID change nhi hoga agr ek baar likh diya to wahi se change hoga kaha pehle likha hai eg. 1 No 


accountEmail = "yv@yv.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
//Email pass city 
// we are change any time 


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


// console.table use hotya ki sari cheeze ek sath print ho jaye or ek hi baar me 
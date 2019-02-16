var sharks = ["Baby","Daddy","Mommy","Grandpa","Grandma"].map(s=>(s+" Shark"+(" doo".repeat(6))+"<br>").repeat(3)+s+" Shark!<br><br>").join("");
var actions = ["Let's go hunt","Run away","Safe at last","It's the end"].map(a=>(a+(" doo".repeat(6))+"<br>").repeat(3)+a+"!<br><br>").join("");
document.body.innerHTML = sharks+actions;
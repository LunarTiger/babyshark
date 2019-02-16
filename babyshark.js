var sharks = ["Baby","Daddy","Mommy","Grandpa","Grandma"].map(s=>(s+" Shark,"+(" doo".repeat(6))+"\n").repeat(3)+s+" Shark!\n\n").join("");
var actions = ["Let's go hunt","Run away","Safe at last","It's the end"].map(a=>(a+","+(" doo".repeat(6))+"\n").repeat(3)+a+"!\n\n").join("");
document.body.innerHTML = "<pre>"+sharks+actions+"</pre>";

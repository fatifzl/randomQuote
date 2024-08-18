const loadQuote=async(first=false)=>{
    try{
        if(!false){
            const btn = document.getElementById("btn");
            btn.innerText="Quote Loading...";
            btn.classList.add("btn-loading");
        }
        req = await fetch ("http://api.quotable.io/random");
        const response = await req.json();
        if(!false){
            btn.innerText="New Quote";
            btn.classList.remove("btn-loading");
        }
        printQuote(response);
        }catch(err){
        console.log(err);
        }   
}
const printQuote=(quote)=>{
    document.getElementById("quote").innerText=quote.content;
}
function dice(){
    const values=[]
    const images=[]
    const tb=document.getElementById("tb").value;
    const dicevalues=document.getElementById("dicevalues");
    const diceimages=document.getElementById("diceimages")
    for(let i=0;i<tb;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="/dim/${value}.png">`);
    }
    dicevalues.textContent=`dice:${values.join(", " )}`
    diceimages.innerHTML=images.join("  ")
}
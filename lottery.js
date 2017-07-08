function lottery(quarters){
    quarters = document.getElementById("inout").innerHTML;
    document.getElementById("output").innerHTML = quarters;
    while(quarters > 0){
       if((Math.trunc(Math.random() * 100)+1) == 20){
           console.log("You won!");
           quarters += Math.trunc(Math.random() * 100)+51;
       }
        quarters--;
    }if(quarters <= 0){
        console.log("No quarters left!");
    }
}
lottery();

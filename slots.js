function slots(quarters){
    if(Math.floor((Math.random()*100)+1) ==1){
        var winnings = Math.floor((Math.random()*50)+51);
        quarters += winnings;
        console.log("You won", winnings, "quarters. you have", quarters, "quarters left.")
    }else{
        quarters--;
    }
}
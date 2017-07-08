function double(penny){
    var penny = 0.01;
    var day = 1;
    var reward = 0;
    for(var day = 1; day <= 30; day++){
        console.log("Day " +day+ " reward is " +penny);
        penny = penny + penny;
        reward += penny;
    }
    console.log("The total reward after month: " +reward);
}
double();
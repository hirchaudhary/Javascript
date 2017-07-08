
function time(hour, minute, period){
    if(period == "AM"){
        if(minute < 30){
            console.log("It's just after " +hour+ " in the morning");
        }else if(minute > 30){
            console.log("It's almost " +(hour+1)+ " in the morning");
        }else if(minute == 30){
            console.log("it's " +hour+ " and half hour in morning");
        }
     }else if(period == "PM"){
        if(minute < 30){
            console.log("It's just after " +hour+ " in the evening");
        }else if(minute > 30){
            console.log("It's almost " +(hour+1)+ " in the evening");
        }else if(minute == 30){
            console.log("it's " +hour+ " and half hour in evening");
        }
    }
}
time();

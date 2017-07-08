function birthday(){
    var daysYntilMyBirthday = 60;
    for(var daysYntilMyBirthday = 60 ; daysYntilMyBirthday>=0 ; daysYntilMyBirthday--){
        if(daysYntilMyBirthday >= 30){
            console.log(daysYntilMyBirthday+ " days until my birthday. Such a long time... :(");
        }else if(daysYntilMyBirthday < 30 && daysYntilMyBirthday >= 5){
            console.log(daysYntilMyBirthday+ " days until my birthday. I am so excited!");
        }else if(daysYntilMyBirthday < 5 && daysYntilMyBirthday > 0){
            console.log(daysYntilMyBirthday+ " days until my birthday. Just can't wait for the day");
        }else if(daysYntilMyBirthday == 0){
            console.log("It's my birthday! Let's have a party");
            console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
        }
    }
}
birthday();
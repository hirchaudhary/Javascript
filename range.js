function printRange(start, end, skip){
    if(skip == null) {
        skip = 1;
    }
    if(end == null){
        end = 0;
    }
    if(start < end){
        for(var i = start; i < end; i += skip){
            console.log(i);
        }
    }else if(start > end){
        for(var i = start; i > end; i -= skip){
            console.log(i);
        }
    }
}
printRange(-2,10);
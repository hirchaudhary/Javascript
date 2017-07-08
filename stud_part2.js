function studInstruct(){
    var users = {
        'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
        ],
        'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
    ]
}

    for(var key in users){
        if(key == 'Students'){
            console.log('Strudents');
            for(var i in users.Students){
                console.log(i, users.Students[i].first_name ," ", users.Students[i].last_name, ((users.Students[i].first_name).length + (users.Students[i].last_name).length));
            }
        }
        if(key == 'Instructors'){
            console.log('Instructors');
            for(var j in users.Instructors){
                console.log(j, users.Instructors[j].first_name ," ", users.Instructors[j].last_name, ((users.Instructors[j].first_name).length + (users.Instructors[j].last_name).length));
        }
        }
    }
}
studInstruct();
function stud(){
    var Students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
    ]
    for(var key in Students){
        console.log(key);
        console.log(Students[key].first_name+ " " +Students[key].last_name);
    }
}
stud();
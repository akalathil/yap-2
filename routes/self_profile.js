// Get all of our friend data
var data = require("../self_information.json");

exports.getprofile = function(req, res){

    /* GENERALIZE THIS JSON READING */
    /*
    var users = data["users"];

    var userData;
    var index = 0;

    while (true) {
        var currentPerson = users[index];
        if( currentPerson.fullname == req.query.name){
            userData = users[index];
            console.log(userData);
            break;
        }
        index++;
    }
    /*console.log(data);*/
    

    res.render('self_profile', data); 
}



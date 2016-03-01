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

document.addEventListener('keydown', function (event) {
  var esc = event.which == 27,
      nl = event.which == 13,
      el = event.target,
      input = el.nodeName != 'INPUT' && el.nodeName != 'TEXTAREA',
      data = {};

  if (input) {
    if (esc) {
      // restore state
      document.execCommand('undo');
      el.blur();
    } else if (nl) {
      // save
      data[el.getAttribute('data-name')] = el.innerHTML;

      // we could send an ajax request to update the field
      /*
      $.ajax({
        url: window.location.toString(),
        data: data,
        type: 'post'
      });
      */
      log(JSON.stringify(data));

      el.blur();
      event.preventDefault();
    }
  }
}, true);

function log(s) {
  document.getElementById('debug').innerHTML = 'value changed to: ' + s;
}



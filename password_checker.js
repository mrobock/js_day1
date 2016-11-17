//function that requests a username and password
//creates an object based upon username and password using a closure
//validates password against a set of criteria
//notifies user if username and password are true or false - include reason for failure

var user_Criteria = [];
var pass_Criteria = [];

function passCheck () {
//request username and password
  var user = "user$";
  var pass = "pas";

  var userInfo = userIdBuilder(user, pass);


  console.log(userInfo.check_user());
  console.log(userInfo.check_pass());
 //return userInfo.check_user();

}

//function/closure to create object
function userIdBuilder(user,pass) {
  return {
    user: user,
    pass: pass,
    check_master: function() {
      return check_user() + check_pass();
    },
//function within closure that checks the supplied username
    check_user: function() {
      if (user == pass || user.length < 6 || user.includes("$") || user.includes("!") || user.includes("#")) {
        userChecker(user, pass);
        //console.log("valid: false - Your username does not meet the following criteria: "+ user_Criteria);
        return "valid: false - Your username does not meet the following criteria:"+ "\n"+ user_Criteria.join("");
      }
      return ("valid: Your password is true");
    },
//function within closure that checks the supplied password
    check_pass: function() {
      if (pass.length > 6 && pass != "password" && (!pass.includes("$") || !pass.includes("!") || !pass.includes("#"))) {
        return ("valid: Your password is true");
      }
        passChecker(pass, user);
        return "valid: false - Your password does not meet the following criteria:" + "\n" + pass_Criteria.join("");
    },
  }
}
//Checks if username has the following criteria: longer than 6 characters, is not equal to "password," and does not contain $, #, or !
function userChecker(user, pass) {
  if (user == pass) { user_Criteria.push("Username equals password" + "\n"); }
  if (user.length < 6) { user_Criteria.push("Username is too short (min: 6 char)" + "\n"); }
  if (user.includes("$") || user.includes("!") || user.includes("#")) { user_Criteria.push("Username includes a special character ($, #, !)." + "\n"); }
}
//Checks if password has the following criteria: longer than 6 characters, is not "password," and contains either $, #, or !
function passChecker(pass, user) {
  if (pass == user) { pass_Criteria.push("Password equals username" + "\n"); }
  if (pass.length < 6) { pass_Criteria.push("Password is too short (min: 6 char)" + "\n"); }
  if (!pass.includes("$") || !pass.includes("!") || !pass.includes("#")) { pass_Criteria.push("Password does not include a special character ($, #, !)." + "\n");}
}



 passCheck();

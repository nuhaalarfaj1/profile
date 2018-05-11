

function getUserData() {
var results = document.getElementById('results');
  
 var userName = document.getElementById('userName').value;
 var userPassword = document.getElementById('userPassword').value;
var	userEmail= document.getElementById('userEmail').value;
var	number= document.getElementById('number').value;


for(var i = 0; i < userGenderEls.length; i++) {

    if(userGenderEls[i].checked) {
        userGender = userGenderEls[i].value;
    };
};
var userProfile = {
name: userName,
password : userPassword,
email : userEmail,
 gender: userGender,
 number: number
};
users.push(userProfile)
	console.log(userProfile);
	setTimeout(function() {
		displayProfile(userProfile);
	}, 1000);
};



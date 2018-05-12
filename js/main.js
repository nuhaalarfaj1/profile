document.getElementById('updateProfile').style.display = "none";


var count = 1;
var users = [{
  name      : "",
  password  : "",
  email     : "",
  gender    : "",
  month     : "",
  day       : "",
  year      : "",
  age       :  getUserAge(1, 1, 2000).toString(),
  image     : ""
}];

var user = {};



function getUserData() {
  var results = document.getElementById('results');

	
	var userName     = document.getElementById('userName').value;
  var userPassword = document.getElementById('userPassword').value;
	var	userEmail    = document.getElementById('userEmail').value;

	
	var userGenderEls = document.getElementsByClassName("userGender");
  var userMonthEls  = document.getElementsByClassName("userMonth");
  var userDayEls  = document.getElementsByClassName("userDay");
  var userYearEls  = document.getElementsByClassName("userYear");


	
	var userGender, userMonth, userDay, userYear;


  

  
  if( validateEmail(userEmail) == false) {
   
    alert("please enter a valid email address");

		return;

  }

	
	for(var i = 0; i < userGenderEls.length; i++) {
		
		if(userGenderEls[i].checked) {
			
			userGender = userGenderEls[i].value;
		};
	};

  
  for (var i = 0; i < userMonthEls.length; i++) {
    
    if(userMonthEls[i].selected){
      
      userMonth = userMonthEls[i].value;
    }
  }
  console.log(userMonth);
  if (userMonth == "") {
    
    alert("you forgot to add a month for your birth date");

    
		return;
  }


  
  for (var i = 0; i < userDayEls.length; i++) {
    
    if(userDayEls[i].selected){
      
      userDay = userDayEls[i].value;
    }
  }
  if (userDay == "") {
    
    alert("you forgot to add a day for your birth date");

    
    return;
  }

   else if (userDay == 31 && ( userMonth == 4 || userMonth == 6 || userMonth == 9 || userMonth == 11)) {
      alert("please enter a valid date");

      
      return;
  }

  
  for (var i = 0; i < userYearEls.length; i++) {
    
    if(userYearEls[i].selected){
     
      userYear = userYearEls[i].value;
    }
  }

  if ( userMonth == 2) {
    console.log(userYear);
    if (userYear % 4 != 0 && userDay >= 29 ) {
      alert("please enter a valid date");

     
      return;
    } else if (userDay > 29) {
      alert("please enter a valid date");

      
      return;
    }
  }

	
  var userAge = getUserAge(userMonth, userDay, userYear).toString();

	
	var userProfile = {
		name     : userName,
    password : userPassword,
    email    : userEmail,
		gender   : userGender,
    month    : userMonth,
    day      : userDay,
    year     : userYear,
    age      : userAge,
    
	};

 
  users.push(userProfile)

	
	console.log(userProfile);

	
	setTimeout(function() {
		displayProfile(userProfile);
	}, 1000);
};



function create() {
  
  document.getElementById('userName').value = "";
  document.getElementById('userPassword').value = "";
  document.getElementById('userEmail').value = "";



  document.getElementById('newProfile').style.display = "block";
};


document.getElementById('create').addEventListener('click', create, false);
document.getElementById('sendData').addEventListener('click', getUserData, false);

document.getElementById('signOut').addEventListener('click', create, false);



function displayProfile(userProfile) {

  document.getElementById('newProfile').style.display = "none";
  document.getElementById('oldProfile').style.display = "none";

  
  document.getElementById('updateProfile').style.display = "block";

  var userName    = document.getElementById('updateName');
  var userAge     = document.getElementById('updateAge');
  var userEmail   = document.getElementById('updateEmail');
  var userGender  = document.getElementById('updateGender');
  var userBirth   = document.getElementById('updateBirth');
 

  
  userName.innerText   = userProfile.name;
 
  userAge.innerText    = userProfile.age + " years old";
  userEmail.innerText  = userProfile.email;
  userGender.innerText = userProfile.gender;
  userBirth.innerText  =  months[userProfile.month].name + " " + userProfile.day + ", " + userProfile.year;

  
  count++;
}


var days = [];
for (var i = 1; i <= 31; i++) {
  days.push(i);
}


var months = [
  {id: 1, name:"January"},
  {id: 2, name:"February"},
  {id: 3, name:"March"},
  {id: 4, name:"April"},
  {id: 5, name:"May"},
  {id: 6, name:"June"},
  {id: 7, name:"July"},
  {id: 8, name:"August"},
  {id: 9, name:"September"},
  {id: 10, name:"October"},
  {id: 11, name:"November"},
  {id: 12, name:"December"}
];


var years = [];
var date = new Date();

for (var i = (date.getFullYear()-13); i > (date.getFullYear()-100); i--) {
  years.push(i)
}


function birthdayInfo (){

 
  for (var i = 0; i < months.length; i++) {
   
    var option = document.createElement('option');
    var monthText = document.createTextNode(months[i].name);
    option.appendChild(monthText);

   
    var addHere = document.getElementById('month');
    addHere.appendChild(option);
    option.value =  months[i].id;
    option.className = 'userMonth';
  }

 
  createOptions(days, "day", "userDay");

 
  createOptions(years, "year", "userYear");

}

function createOptions(numberArray, idName, className){

  for (var i = 0; i < numberArray.length; i++) {
  
    var option = document.createElement('option');
    var number = document.createTextNode(numberArray[i]);
    option.appendChild(number);

 
    var addHere = document.getElementById(idName);
    addHere.appendChild(option);
    option.value =  numberArray[i];
    option.className = className;
  }
}

birthdayInfo();



function getUserAge (month, day, year) {

  var today     = new Date();
  var nowyear   = today.getFullYear();
  var nowmonth  = today.getMonth();
  var nowday    = today.getDate();


  var age       = nowyear - year;
  var ageMonth  = nowmonth - month;
  var ageDay    = nowday - day;

  if( ageMonth < 0 || (ageMonth == 0 && ageDay < 0)){
    age = age - 1;
  }

  if (count != 1) {
    console.log("user age: " + age);
  }
  return age;
}




function validateEmail (email) {
  var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  console.log(regEx.test(email));
  return regEx.test(email);
}



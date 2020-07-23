// 
 
// function am(a,b){
 
// //   return
// a =     10;
// b = 20;
// return (a,b)


// }  


// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100));


// let side1 = prompt('Enter side1: ');
// let side2 = prompt('Enter side2: ');
// let side3 = prompt('Enter side3: ');

// // calculate the semi-perimeter
// let s = (side1 + side2 + side3) / 2;

// //calculate the area
// let areaValue = Math.sqrt(
//   s * (s - side1) * (s - side2) * (s - side3)
// );

// console.log(
//   `The area of a triangle with side length ${side1}, ${side2}  and ${side3} is ${areaValue}`
// )

// var students =  [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

// var Avgmarks = 0;

// for (var i=0; i < students.length; i++) {
//         Avgmarks += students[i][1];
//         var avg = (Avgmarks/students.length);
// }

// console.log("Average grade: " + (Avgmarks)/students.length);

//         if (avg < 60){
//           console.log("Grade : F");      
//           } 
//         else if (avg < 70) {
//                 console.log("Grade : D"); 
                   
//             } 
//         else if (avg < 80) 
//              {
//                 console.log("Grade : C"); 
//         } else if (avg < 90) {
//                 console.log("Grade : B"); 
//         } else if (avg < 100) {
//                 console.log("Grade : A"); 
// }





// var string = "heelloo world";
// var vowel = ["a", "e", "i", "o", "u",];

// String.prototype.character = function name() {
//     var i;
//     for ( i = 0; i < vowel.length; i++) {
//         var secondLoop = string.length;
//         for ( j = 0; j < secondLoop; j++) {
//             if (vowel[i] == string.charAt(j)) {
//                 string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
//             }

//         }
//     }
// }

// string.character();
// console.log(string);



// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
//   console.log(findOccurrences());


// #include<stdio.h>
// int main()
// {
//     float km, m, cm, f, in;
//     printf("Enter distance in kilometers: ");
//     scanf("%f", &km);
//     /* calculate the conversion */
//     m = km * 1000;
//     cm = km * 1000 * 100;
//     f = km * 3280.84;
//     in = km * 39370.08;
//     printf("The distance in Feet: %f\n", f);
//     printf("The distance in Inches: %f\n", in);
//     printf("The distance in Meters: %f\n", m);
//     printf("The distance in Centimeters: %f\n", cm);
//     return (0);
// }



// #include<stdio.h>
// #include<conio.h>
// int main()
// {
//     int count = 1, working_hours, over_time;
//     float over_time_pay;

//     while(count<=10)
//     {
//         printf("Enter the working hours of employee no %d: ", count);
//         scanf("%d", &working_hours);
//         if(working_hours>40)
//         {
//             over_time = working_hours - 40;
//             over_time_pay = over_time * 12.00;
//             printf("Employee No %d overtime pay is %.2f\n", count, over_time_pay);
//         }
//         else
//             printf("You have to work for more than 40 hours to get over time pay\n");

//         count++;
//     }
// }




// #include<stdio.h>
// int main()
// {
// 	int amount;
// 	printf("Please input amount for withdraw : ");
// 	scanf("%d",&amount);

// 	//calculations
// 	printf("\n\nRequired notes of Rs. 100  :  %d", amount / 100);
// 	printf("\n\nRequired notes of Rs. 50   :  %d", (amount % 100) / 50);
// 	printf("\n\nRequired notes of Rs. 10   :  %d", (((amount % 100) % 50) / 10));
// 	printf("\n\nAmount still remaining Rs. :  %d", (((amount % 100) % 50) % 10));
// 	return 0;
// }

// var aElems = document.getElementsByTagName('a');

// for (var i = 0, len = aElems.length; i < len; i++) {
//     aElems[i].onclick = function() {
//         var check = confirm("Are you sure you want to leave?");
//         if (check == true) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
// }​


// var aElems = document.getElementsByTagName('a');

// for (var i = 0, len = aElems.length; i < len; i++) {
//     aElems[i].onclick = function() {
//         return confirm("Are you sure you want to leave?");
//     };
// }


// function myFunction() {
//     alert("Hello!  how are you ?");
//   }




// function addRow(tableID) {

//     var table = document.getElementById(tableID);

//     var rowCount = table.rows.length;
//     var row = table.insertRow(rowCount);

//     var cell1 = row.insertCell(0);
//     var element1 = document.createElement("input");
//     element1.type = "checkbox";
//     element1.name="chkbox[]";
//     cell1.appendChild(element1);

//     var cell2 = row.insertCell(1);
//     cell2.innerHTML = rowCount + 1;

//     var cell3 = row.insertCell(2);
//     var element2 = document.createElement("input");
//     element2.type = "text";
//     element2.name = "txtbox[]";
//     cell3.appendChild(element2);


// }

// function deleteRow(tableID) {
//     try {
//     var table = document.getElementById(tableID);
//     var rowCount = table.rows.length;

//     for(var i=0; i<rowCount; i++) {
//         var row = table.rows[i];
//         var chkbox = row.cells[0].childNodes[0];
//         if(null != chkbox && true == chkbox.checked) {
//             table.deleteRow(i);
//             rowCount--;
//             i--;
//         }


//     }
//     }
//     catch(e) {
//         alert("owais");
//     }
// }

// function bigImg(x) {
//     x.style.height = "200px";
//     x.style.width = "200px";
//   }
  
//   function normalImg(x) {
//     x.style.height = "50px";
//     x.style.width = "50px";
//   }


// int clicks = 0;
// function click() {
//     clicks += 1;
//     document.getElementById("clicks").innerHTML = clicks;
// };








// function formValidation()
// {
// var uid = document.registration.userid;
// var passid = document.registration.passid;
// var uname = document.registration.username;
// var uadd = document.registration.address;
// var ucountry = document.registration.country;
// var uzip = document.registration.zip;
// var uemail = document.registration.email;
// var umsex = document.registration.msex;
// var ufsex = document.registration.fsex; if(userid_validation(uid,5,12))
// {
// if(passid_validation(passid,7,12))
// {
// if(allLetter(uname))
// {
// if(alphanumeric(uadd))
// { 
// if(countryselect(ucountry))
// {
// if(allnumeric(uzip))
// {
// if(ValidateEmail(uemail))
// {
// if(validsex(umsex,ufsex))
// {
// }
// } 
// }
// } 
// }
// }
// }
// }
// return false;
// }
// function userid_validation(uid,mx,my)
// {
// var uid_len = uid.value.length;
// if (uid_len == 0 || uid_len >= my || uid_len < mx)
// {
// alert("User Id should not be empty / length be between "+mx+" to "+my);
// uid.focus();
// return false;
// }
// return true;
// }
// function passid_validation(passid,mx,my)
// {
// var passid_len = passid.value.length;
// if (passid_len == 0 ||passid_len >= my || passid_len < mx)
// {
// alert("Password should not be empty / length be between "+mx+" to "+my);
// passid.focus();
// return false;
// }
// return true;
// }
// function allLetter(uname)
// { 
// var letters = /^[A-Za-z]+$/;
// if(uname.value.match(letters))
// {
// return true;
// }
// else
// {
// alert('Username must have alphabet characters only');
// uname.focus();
// return false;
// }
// }

// function alphanumeric(uadd)
// { 
// var letters = /^[0-9a-zA-Z]+$/;
// if(uadd.value.match(letters))
// {
// return true;
// }
// else
// {
// alert('User address must have alphanumeric characters only');
// uadd.focus();
// return false;
// }
// }


// function countryselect(ucountry)
// {
// if(ucountry.value == "Default")
// {
// alert('Select your country from the list');
// ucountry.focus();
// return false;
// }
// else
// {
// return true;
// }
// }



// function allnumeric(uzip)
// { 
// var numbers = /^[0-9]+$/;
// if(uzip.value.match(numbers))
// {
// return true;
// }
// else
// {
// alert('ZIP code must have numeric characters only');
// uzip.focus();
// return false;
// }
// }


// function ValidateEmail(uemail)
// {
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(uemail.value.match(mailformat))
// {
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// uemail.focus();
// return false;
// }
// }

// function validsex(umsex,ufsex)
// {
// x=0;

// if(umsex.checked) 
// {
// x++;
// } if(ufsex.checked)
// {
// x++; 
// }
// if(x==0)
// {
// alert('Select Male/Female');
// umsex.focus();
// return false;
// }
// else
// {
// alert('Form Successfully Submitted');
// window.location.reload()
// return true;}
// }

// function formValidation()
// {
// var uid = document.registration.userid;
// var passid = document.registration.passid;
// var uname = document.registration.username;
// var uadd = document.registration.address;
// var ucountry = document.registration.country;
// var uzip = document.registration.zip;
// var uemail = document.registration.email;
// var umsex = document.registration.msex;
// var ufsex = document.registration.fsex; if(userid_validation(uid,5,12))
// {
// if(passid_validation(passid,7,12))
// {
// if(allLetter(uname))
// {
// if(alphanumeric(uadd))
// { 
// if(countryselect(ucountry))
// {
// if(allnumeric(uzip))
// {
// if(ValidateEmail(uemail))
// {
// if(validsex(umsex,ufsex))
// {
// }
// } 
// }
// } 
// }
// }
// }
// }
// return false;

// } function userid_validation(uid,mx,my)
// {
// var uid_len = uid.value.length;
// if (uid_len == 0 || uid_len >= my || uid_len < mx)
// {
// alert("User Id should not be empty / length be between "+mx+" to "+my);
// uid.focus();
// return false;
// }
// return true;
// }
// function passid_validation(passid,mx,my)
// {
// var passid_len = passid.value.length;
// if (passid_len == 0 ||passid_len >= my || passid_len < mx)
// {
// alert("Password should not be empty / length be between "+mx+" to "+my);
// passid.focus();
// return false;
// }
// return true;
// }
// function allLetter(uname)
// { 
// var letters = /^[A-Za-z]+$/;
// if(uname.value.match(letters))
// {
// return true;
// }
// else
// {
// alert('Username must have alphabet characters only');
// uname.focus();
// return false;
// }
// }
// function alphanumeric(uadd)
// { 
// var letters = /^[0-9a-zA-Z]+$/;
// if(uadd.value.match(letters))
// {
// return true;
// }
// else
// {
// alert('User address must have alphanumeric characters only');
// uadd.focus();
// return false;
// }
// }
// function countryselect(ucountry)
// {
// if(ucountry.value == "Default")
// {
// alert('Select your country from the list');
// ucountry.focus();
// return false;
// }
// else
// {
// return true;
// }
// }
// function allnumeric(uzip)
// { 
// var numbers = /^[0-9]+$/;
// if(uzip.value.match(numbers))
// {
// return true;
// }
// else
// {
// alert('ZIP code must have numeric characters only');
// uzip.focus();
// return false;
// }
// }
// function ValidateEmail(uemail)
// {
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(uemail.value.match(mailformat))
// {
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// uemail.focus();
// return false;
// }
// } function validsex(umsex,ufsex)
// {
// x=0;

// if(umsex.checked) 
// {
// x++;
// } if(ufsex.checked)
// {
// x++; 
// }
// if(x==0)
// {
// alert('Select Male/Female');
// umsex.focus();
// return false;
// }
// else
// {
// alert('Form Succesfully Submitted');
// window.location.reload()
// return true;
// }
// }




// document.onkeydown = function(e) {
//     if(e.keyCode === 13) { // The Enter/Return key
//       document.activeElement.click();
//     }
//   };



// var list = document.getElementsByTagName("div")
// console.log(list.n)


// var target = document.getElementById("p2")
// console.log(target.attributes[1].nodeValue) 
// var a = document.childNodes[0].childNodes[0]
// console.log(a)
// var target = document.getElementById("bt")

// target.setAttribute('class',"blue")
// console.log(target.getAttribute("class"))
// if(target.hasAttribute("class")){
//     alert("ok")
// }


// if (target.getAttribute("class")){

// alert("Availabe")

// }else{
    
//     ("Not Available ")
// }




// var p = document.createElement('p');

// var text = document.createTextNode("Hello World")

// p.appendChild(text)

// console.log(p)








// function myFunction(){


//     alert("Hello")
// }


// function  addTodo(){



// function AddName(){

//    var form-content = document.getElementById("first-name")
// console.log(first-name.value)

// }

// var list = document.appendChild("list")










// var p = document.createElement('p');

// var text = document.createTextNode("Hello World")

// p.appendChild(text)

// console.log(p)








// function form-content(){

//     var first-name = document.appendChild("first-name")
//     console.log(first.first value)
// }














//Javascript Objects

/* for javascript objects

keyword variableName = {
key : value ,
key2 : value2 , 
}
*/

let person1 = {
    name : 'John',
    age : 27 ,
    isStudent :  true
}
console.log(person1);
console.log(person1.name);
console.log(person1.age);
console.log(person1.isStudent); 
//accessing object properties

//updating object properties
person1.age = 28;
console.log(person1.age);

//console.
person1.name = 'Doe';
console.log(person1.name);

//name,brand,yearOfRegistration,color
let car1 = {
    name : 'BMW',
    brand : 'X5',
    yearOfRegistration : 2020,
    color : 'Black',
    "lastMaintenanceDate" : '2024-05-15'
}
console.log(car1["name"]);

//adding new properties to object
car1.numberOfTyres = 4 
console.log(car1);
delete car1.name;
console.log(car1);


//conditional statements with objects
//if, if-else,if-else if-else

/* if (condition==true){
statement that take place when condition is true
}
*/

noBreak=false
if (noBreak){
    alert("We will all remain in class happily")    
}
//comparison operators
if(10==10){//this is a false condition
    console.log("10 is truly equal to 10")
}
if(10<10){
    console.log("10 is truly equal to 10")
}else{
    console.log("10 is not greater than 10")
}

    //if else if
    /*
    dayOfTheWeek=prompt("Enter day of the week").toLowerCase();
    if(dayOfTheWeek=="Monday"){
        console.log("Monday is the first day of the week")
    }else if(dayOfTheWeek=="Tuesday"){
        console.log("Tuesday is the second day of the week")
    }else if(dayOfTheWeek=="Wednesday"){
        console.log("Wednesday is the third day of the week")
    }else if(dayOfTheWeek=="Thursday"){
        console.log("Thursday is the fourth day of the week")
    }else if(dayOfTheWeek=="Friday"){
        console.log("Friday is the fifth day of the week")
    }else if(dayOfTheWeek=="Saturday"){
        console.log("Saturday is the sixth day of the week")
    }else if(dayOfTheWeek == 'sunday'){
        console.log("Sunday is the seventh day of the week")
    }else {
        console.log('Wrong choice try again')
    }
        */


    //functions
    /*function nameOfFunction() {
    function statement
    } 
    */
   function greet(){
    console.log('welcome to the afternoon class')
   }
   //calling the function greet
   greet()
   greet()
   greet()
   greet()

   //function with parameters

   /*
   
   function nameOffunction (parameters){
   what should happen when function is called
   }
   
   */

   function morningGreting(userName) {
    console.log(`Good morning ${userName}`)
    
   };
   morningGreting('Hamza')
   morningGreting('Daudda')
   morningGreting('Sherifa')
   //morningGreeting() wont give you the result you want 

   
   function addition(number1,number2) {
    let sum = number1 + number2
    console.log(sum,'This your addtion result')
    
   }
   addition(2,5)

   //finding the area of circle
   function areaOfCircle(radius1,radius2,) {
    let area = radius1 * radius2 * 3.14159
    console.log('The area of the circle is',area)
   }
   areaOfCircle(4,4,)

   //function with return types
   /*
   form1
   function nameOfFunction (){
   what should happen

   return
   }
   */
   /*
   form2
   function nameOfFunction (){
   what should happen

   return
   }
   */

   // any code after return it will not work
   function areaRectangleWithReturn(width,height) {
    let areaRectangle = width * height

    return areaRectangle
    
   }
   let areaRectangle = areaRectangleWithReturn(5,10)

   //afternoon greetings function

   function goodAfternoon(personToGreet) {

    return `Good afternoon ${personToGreet}`
    
   }
   kofi = goodAfternoon('Hamza')

   // loops
   /*
   types,
   while loop
   for loop
   do while

        for loop
   for ( initialize ; condtion ; iterator){
    what the loop should do
   }
   */

   //counting 1 to 5
   for (let i = 1 ;i<=5; i = i+1){
    console.log(i)
   }

   // second version of the for loop
   for (let count = 1; count != 6;    count++) {
    console.log('counting',count);
    
   }

   //while loops
   /*initator
   while(condition){
   what the code should do
   iterator
   } */
  count = 1
  while (count<=5) {
    alert(count)
    count = count + 1
    
  }



   console.log('end of program')


   

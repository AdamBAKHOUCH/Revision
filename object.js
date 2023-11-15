// 1.Fix the syntax & style issues with the three objects below:

//  {firstName 'Yan', lastname: 'Fan' } 
//  {a: 1, b:2 c: 3 d 4} 
//  { 
//        animal: 'dog' 
//        noise: 'bark', 
//        age: 3, 
//        type 'Golden Retriever' 
//        color: 'Yellow', 
//  }
// 2. Create an object that represents you. It should contain your first name, last name, age and hometown. Assign it to a variable called person.

// 3.Access the favorite food property in the object using dot notation, and reassign it to a different food.

// 4.Change your object to have a single name key, the value of which is an object – this object should have first, last and middle keys containing your first, last, and middle names respectively.

// 5.Write a function called emptyObject that takes no parameters and returns an empty object.

// function emptyObject(){  
//   //Write your code here 
// }  
// emptyObject() -> {}
// 6.Write a function called addProperty that takes two parameters, an object, and a key as a string. It then adds the key as a property in the object and gives it the value true.

// function addProperty(object, key) {   
//  //Write your code here
//  }  
// var‌ ‌‌myObject‌ ‌‌=‌‌ ‌{‌ ‌        ‌animal:‌ ‌‘cat’‌, ‌        ‌food:‌ ‌‘turkey’‌, ‌        ‌age:‌ ‌‌3‌ ‌ } 
//  console.log‌(myObject.kittens) -> ‌undefined addProperty‌(myObject,‌ ‌‘kittens’)‌‌ ‌
//  console.log‌(myObject.kittens) -> ‌true‌ 
// 7.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌deleteProperty‌‌ ‌that‌ ‌takes two parameters an‌ ‌object‌ ‌and‌ a key as a string. It then removes the property with that key from the object.

// ‌function‌‌ ‌‌deleteProperty‌(‌object,‌ ‌key‌)‌ ‌{‌ ‌ 
//   ‌‌//Write‌ ‌your‌ ‌code‌ ‌here‌ ‌ 
// }‌ ‌  
// var‌‌ ‌‌myObject‌ ‌‌=‌‌ ‌{‌ ‌        ‌animal:‌ ‌‘cat’‌, ‌        ‌food:‌ ‌‘turkey’, ‌        ‌age:‌ ‌‌3‌ ‌ }
// console.log‌(myObject.age) ‌‌-> ‌3 deleteProperty‌(myObject,‌ ‌‘age’)‌‌
// console.log‌(myObject.age) ‌‌-> ‌undefined‌ ‌
// 8.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addObjectProperty‌‌ ‌that‌ ‌takes‌ ‌three‌ ‌parameters,‌ ‌an‌ ‌object,‌ ‌a‌ ‌string as a key‌, ‌and‌ ‌a second ‌object. It then adds a new property with the passed key and the second object as its value.

// ‌function‌‌ ‌‌addObjectProperty‌(‌object1,‌ ‌key,‌ ‌object2‌)‌ ‌{‌
//  ‌   ‌‌//Write‌ ‌your‌ ‌code‌ ‌here‌ ‌ 
//  }‌ ‌  
//  var‌‌ ‌‌person1‌ ‌‌=‌‌ ‌{‌ ‌    ‌
//  	name:‌ ‌‌'Ahmad'‌,‌ ‌    ‌
//  	role:‌ ‌‌'worker'‌ ‌ 
//  }
//  var‌‌ ‌‌person2‌ ‌‌=‌‌ ‌{‌
//  	name:‌ ‌‌'Fadi'‌,‌
//  	role:‌ ‌‌'manager'‌ ‌ 
//  }
//  console.log‌(person1.manager) ‌‌-> undefined 
//  addObjectProperty‌(person1,‌ ‌‌‘manager’‌,‌ ‌person2)  ‌
//  console.log‌(person1.manager) ‌‌-> {name: ’Fadi’,‌ role: ’manager’}‌ ‌
// 9.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addFullNameProperty‌‌ ‌that‌ ‌takes‌ ‌an‌ ‌object‌ ‌as‌ ‌a‌ ‌parameter.‌ ‌If the object has both a firstName and a lastName property, then it adds a new property with the key fullName and the value as a string of the firstName and lastName combined with a space between them.

// ‌function‌‌ ‌‌addFullNameProperty‌(‌object‌)‌ ‌{‌ ‌ 
//   ‌‌//Write‌ ‌your‌ ‌code‌ ‌here‌ ‌ 
// }‌ ‌ 
// var‌‌ ‌‌person‌ ‌‌=‌‌ ‌{‌ ‌   ‌firstName:‌ ‌‌'Leena'‌,‌ ‌   ‌lastName:‌ ‌‌'Atia'‌ ‌ }
// console.log‌(person.fullName) ‌‌-> undefined ‌ 
// addFullNameProperty‌(person) ‌ 
// console.log‌(person.fullName) ‌‌-> ‌‘Leena‌ ‌Atia’‌ ‌‌
// 10.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addArrayProperty‌‌ ‌that‌ ‌takes‌ ‌three‌ ‌parameters,‌ ‌an‌ ‌object,‌ ‌a‌ ‌string as a key‌ ‌and‌ ‌an‌ ‌array.‌ ‌It then adds a new property to the object with the specified key and its value is the array.

// function‌‌ ‌‌addArrayProperty‌(‌object,‌ ‌key,‌ ‌array‌)‌ ‌{‌
//    ‌‌//Write‌ ‌your‌ ‌code‌ ‌here‌ ‌ 
// }‌
// var‌‌ ‌‌myObject‌ ‌‌=‌‌ ‌{} ‌ 
// var‌‌ ‌‌myArray‌ ‌‌=‌‌ ‌[‌1‌,‌ ‌‌3‌] 
// console.log‌(myObject.myProperty) ‌-> ‌undefined 
// addArrayProperty‌(myObject, ’myProperty’‌‌, myArray);‌
// console.log‌(myObject.myProperty) ‌-> ‌[1,3]‌ ‌‌‌
// 11.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌printAllProperties‌‌ ‌that‌ takes ‌an‌ ‌object‌ ‌as a parameter. It then prints out to the console the values of all the object’s properties.

// ‌function‌‌ ‌‌printAllProperties‌(‌object)‌ ‌{‌ ‌ 
//   ‌‌//Write‌ ‌your‌ ‌code‌ ‌here‌
// }‌ ‌  
// var‌‌ ‌‌person‌ ‌‌=‌‌ ‌{‌ ‌   ‌firstName:‌ ‌‌'Leena'‌,‌ ‌   ‌lastName:‌ ‌‌'Atia'‌ ‌ }
// printAllProperties‌(person);‌ -> ‘Leena’     ‘Atia’‌
// NOTE: Use‌ ‌this‌ ‌to‌ ‌practice‌ ‌(for...in‌) ‌statements‌‌‌.
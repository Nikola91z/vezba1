
let directory = ["person1", "person2", "person3"];

let person1 = {
        firstname: "Nikola",
        lastname: "Perovic",
        age: 31,
        mobile: "064111222333",
        profession: "Kuvar"


}

console.log(person1.firstname, person1.lastname);


        for (let property in person1) {
             console.log(person1[property]);
        
              if (property == "age") {      
              if(person1["age"] < 18) {
              console.log("maloletan");
      }       else {
              console.log("punoletan");
          }
        }
      }



let person2 = {
        firstname:"Zorana",
        lastname:"Radisic",
        age: 30,
        mobile:"063222333444",
        profession:"Recepcioner",
}
      
console.log(person2.firstname, person2.lastname);

     

   
        for (let property in person2) {
                console.log(person2[property]);
               
               if (property == "age") {      
               if(person1["age"] < 18) {
               console.log("maloletan");
       }       else {
               console.log("punoletan");
           }
         }
       }



let person3 = { 
        firstname: "Mihailo",
        lastname: "Kosanovic",
        age: 28,
        mobile: "065888777",
        profession: "Magacioner"
}

console.log(person3.firstname, person3.lastname);

        

       for (let property in person3) {
        console.log(person3[property]);
       
       if (property == "age") {      
       if(person3["age"] < 18) {
       console.log("maloletan");
}       else {
       console.log("punoletan");
   }
 }
}



let people = [ 
     {
        firstname: "Nikola",
        lastname: "Perovic",
        age: 31,
        mobile: "064111222333",
        profession: "Kuvar",
        imeIPrezime: function ()    {
                return this.firstname + " " + this.lastname; 
           }
   
    },
    
     {
        firstname:"Zorana",
        lastname:"Radisic",
        age: 30,
        mobile:"063222333444",
        profession:"Recepcioner",
        imeIPrezime1: function ()    {
                return this.firstname + " " + this.lastname; 
           }

     },

     { 
        firstname: "Mihailo",
        lastname: "Kosanovic",
        age: 28,
        mobile: "065888777",
        profession: "Magacioner",
        imeIPrezime2: function ()    {
                return this.firstname + " " + this.lastname; 
           }
}
];
  
console.log(people[0].imeIPrezime());
console.log(people[1].imeIPrezime1());
console.log(people[2].imeIPrezime2());

            for (let property in people[0]) { 
           
                if (property == "age") {       
                if(people[property] < 18) {
                console.log("Nikola je maloletan");
               }       else {
                console.log("Nikola je punoletan");
              }}};
              
              
              for (let property in people[1]) { 
           
                if (property == "age") {       
                if(people[property] < 18) {
                console.log("Zorana je maloletna");
               }       else {
                console.log("Zorana je punoletna");
              }}};

         
              for (let property in people[2]) { 
           
                if (property == "age") {       
                if(people[property] < 18) {
                console.log("Mihailo je maloletan");
               }       else {
                console.log("Mihailo je punoletan");
              }}};
      
              
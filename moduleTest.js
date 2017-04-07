
// has to be called module.exports? what if you have more then 1?
module.exports = {
  name: "Matt",
  lastName: "Socha",
  fullName: function() {
    // why do I have to use this?
    console.log(this.name + " Patrick " + this.lastName);
  }
};




// THIS IS POSSIBLE FOR USERS AND EXAMPLES FOR SHOPPING CARTS
// // has to be called module.exports? what if you have more then 1?
// module.exports = {
//   user: {
//     name: "Matt",
//     lastName: "Socha",
//     fullName: function() {
//       // why do I have to use this?
//       console.log(this.name + " Patrick " + this.lastName);
//     },
//   },
//   shopCart: {
//     items: [],
//
//   }
// };

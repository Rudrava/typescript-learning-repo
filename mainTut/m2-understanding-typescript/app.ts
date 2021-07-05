// as we throw an error the function would stop exec for which

// it dosent return anything or NEVER`
const logError = (message: string, error: number): never => {
  throw { message: message, error: error };
};

// // this returns nothing if the while loop never breaks or returns anythin
// const lyrics = (count: number): never => {
//   while (true) {
//     count--;
//     console.log("Never gonna give you up");
//     console.log("Never gonna let you down");
//     console.log("Never gonna run around and desert you");
//     console.log("Never gonna make you cry");
//     console.log("Never gonna say goodbye");
//     console.log("Never gonna tell a lie and hurt you");
//     if (count === 0) break;
//   }
// };
const lyrics = (): never => {
  while (true) {
    console.log("Never gonna give you up");
    console.log("Never gonna let you down");
    console.log("Never gonna run around and desert you");
    console.log("Never gonna make you cry");
    console.log("Never gonna say goodbye");
    console.log("Never gonna tell a lie and hurt you");
  }
};

// Variables with Impossible Types
// where a var is a union type and checking it
function checkType(age: string | number) {
  if (typeof age === "string") {
    age; // Type string
  } else if (typeof age === "number") {
    age; // Type number
  } else {
    // as the types are exhausted so it would be never
    // as the control would NEVER reach here
    age; // Type never
  }
}

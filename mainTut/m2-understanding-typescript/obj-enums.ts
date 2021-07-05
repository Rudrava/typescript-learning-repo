enum Role {
  ADMIN = 12342312,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: "Rudrava",
  age: 20,
  hobbies: ["music", "coding", "design web"],
  role: Role.ADMIN,
};

// console.log(Role);
// console.log(person);

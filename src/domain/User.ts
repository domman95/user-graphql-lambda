const users = [
  { id: "1", name: "Dominik", age: "28" },
  { id: "2", name: "Klaudia", age: "23" },
];

export class User {
  async getAllUsers() {
    return users;
  }
}

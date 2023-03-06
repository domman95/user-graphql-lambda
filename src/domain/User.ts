import { IEventStore } from "shared/EventStore/EventStore";
import { Event } from "shared/EventStore/EventStore";

const users = [
  { id: "1", name: "Dominik", age: "28" },
  { id: "2", name: "Klaudia", age: "23" },
];

export class User {
  constructor(private eventStore: IEventStore) {}

  async getAllUsers() {
    return users;
  }

  async addNewUser(id: string, name: string, age: string) {
    const event: Event = {
      type: "AddedNewUser",
      data: {
        id,
        name,
        age,
      },
    };
    
    console.log("HELLO_USER: ", event);
    console.log("HELLO_USER_2: ", this.eventStore);

    const result = await this.eventStore.saveEvent(event);
    console.log("USER: ", result);
    
    return result;
  }
}

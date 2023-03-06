import {
  EventStoreDBClient,
  jsonEvent,
  JSONEventType,
  NO_STREAM,
} from "@eventstore/db-client";
import { AckNack, Status } from "~generated/graphql/types";

export type User = {
  id: string;
  name: string;
  age: string;
};

export type Event = {
  type: string;
  data: User;
};

export interface IEventStore {
  saveEvent(event: Event): Promise<AckNack>;
}

export class EventStore implements IEventStore {
  private __client: EventStoreDBClient;

  constructor(private readonly host: string) {}

  protected client(): EventStoreDBClient {
    if (this.__client === undefined)
      this.__client = EventStoreDBClient.connectionString`${this.host}`;
    return this.__client;
  }

  async saveEvent(event: Event): Promise<AckNack> {

    const resultEvent = jsonEvent({
      type: event.type,
      data: event.data,
    });

    try {
      await this.client().appendToStream(
        "FirstTestStream",
        resultEvent
      );
    } catch (err) {
      throw new Error("Something went wrong with save event to EventStoreDB!");
    }

    return { status: Status.Ack };
  }
}

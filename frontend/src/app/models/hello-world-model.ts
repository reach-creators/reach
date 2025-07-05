import { HelloWorld } from "../data-access/hello-world";

export class HelloWorldModel {
  readonly message: string;
  readonly timestamp: Date;

  constructor(domain: HelloWorld) {
    this.message = domain.message;
    this.timestamp = domain.timestamp;
  }
}

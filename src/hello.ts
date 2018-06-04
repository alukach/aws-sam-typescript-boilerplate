// If this is to be invoked directly, we can create our own event
export interface Event {
  name: string;
}

// Or if it were to be called via APIGateway or S3, we could specify those events specifically:
// type Event = AWSLambda.APIGatewayEvent | AWSLambda.S3Event;

// This example demonstrates a NodeJS 8.10 async handler[1], however of course you could use
// the more traditional callback-style handler.
// [1]: https://aws.amazon.com/blogs/compute/node-js-8-10-runtime-now-available-in-aws-lambda/
export default async (event: Event): Promise<string> => (
  `Hello ${event.name}`
);

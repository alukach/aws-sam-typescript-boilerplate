import handler, { Event } from './hello';

describe('Hello handler', () => {

  const eventBase: Event = {
    name: 'World',
  };

  it('should greet user', () => {
    return handler(eventBase).then((result) => {
      expect(result).toEqual('Hello World');
    });
  });
});

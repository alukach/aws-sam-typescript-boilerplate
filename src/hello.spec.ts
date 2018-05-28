import * as chai from 'chai';
import { expect } from 'chai'; // tslint:disable-line:no-duplicate-imports
import 'mocha';

import handler, { Event } from './hello';

describe('Hello handler', () => {

  const eventBase: Event = {
    name: 'World',
  };

  it('should greet user', () => {
    return handler(eventBase).then((result) => {
      expect(result).to.equal('Hello World');
    });
  });
});

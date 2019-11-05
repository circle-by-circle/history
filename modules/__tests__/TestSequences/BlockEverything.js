import expect from 'expect';

import execSteps from './execSteps.js';

export default function(history, done) {
  let steps = [
    ({ location }) => {
      expect(location).toMatchObject({
        pathname: '/'
      });

      let unblock = history.block();

      history.push('/home');

      expect(history.location).toMatchObject({
        pathname: '/'
      });

      unblock();
    }
  ];

  execSteps(steps, history, done);
}

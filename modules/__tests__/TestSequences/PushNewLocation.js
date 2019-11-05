import expect from 'expect';

import execSteps from './execSteps.js';

export default function(history, done) {
  let steps = [
    ({ location }) => {
      expect(location).toMatchObject({
        pathname: '/'
      });

      history.push('/home?the=query#the-hash');
    },
    ({ action, location }) => {
      expect(action).toBe('PUSH');
      expect(location).toMatchObject({
        pathname: '/home',
        search: '?the=query',
        hash: '#the-hash'
      });
    }
  ];

  execSteps(steps, history, done);
}

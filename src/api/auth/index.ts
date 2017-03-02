import {post} from '../server/';

const LOGIN_ERR_MSG = `
  The username or password you have entered is invalid.
`;

export function login(user) {
  return new Promise((resolve, reject) => {
    return post('/Users/login', user)
      .then((json: any) => {
        if (json.error) {
          reject(new Error(json.error.message));
        }
        resolve(json);
      })
      .then(null, (err) => reject(new Error(LOGIN_ERR_MSG)));
  });
}

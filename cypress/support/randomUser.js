import { faker } from '@faker-js/faker';

function randomUser () {
 const email = faker.internet.email();
 const userName = faker.internet.userName();
 const password = 'Qwer123@'

  return {
    email,
    userName,
    password
  };
}

module.exports = { randomUser };

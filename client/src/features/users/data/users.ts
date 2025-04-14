// import { faker } from '@faker-js/faker'

// export const users = Array.from({ length: 20 }, () => {
//   const firstName = faker.person.firstName()
//   const lastName = faker.person.lastName()
//   return {
//     id: faker.string.uuid(),
//     firstName,
//     lastName,
//     username: faker.internet
//       .username({ firstName, lastName })
//       .toLocaleLowerCase(),
//     email: faker.internet.email({ firstName }).toLocaleLowerCase(),
//     phoneNumber: faker.phone.number({ style: 'international' }),
//     status: faker.helpers.arrayElement([
//       'active',
//       'inactive',
//       'invited',
//       'suspended',
//     ]),
//     role: faker.helpers.arrayElement([
//       'superadmin',
//       'admin',
//       'cashier',
//       'manager',
//     ]),
//     createdAt: faker.date.past(),
//     updatedAt: faker.date.recent(),
//   }
// })


import { faker } from '@faker-js/faker'

// Sample Indian names
const indianFirstNames = [
  'Aarav', 'Vivaan', 'Aditya', 'Krishna', 'Ishaan',
  'Diya', 'Anaya', 'Myra', 'Aadhya', 'Ira',
]

const indianLastNames = [
  'Sharma', 'Verma', 'Patel', 'Reddy', 'Gupta',
  'Mehta', 'Joshi', 'Naidu', 'Khan', 'Chopra',
]

export const users = Array.from({ length: 100 }, () => {
  const firstName = faker.helpers.arrayElement(indianFirstNames)
  const lastName = faker.helpers.arrayElement(indianLastNames)
  // const phoneNumber = `+91-${faker.phone.number('9#########')}` // Indian format

  return {
    id: faker.string.uuid(),
    firstName,
    lastName,
    username: faker.internet
      .username({ firstName, lastName })
      .toLowerCase(),
    email: faker.internet.email({ firstName }).toLowerCase(),
    phoneNumber: faker.phone.number({ style: 'national' }),
    status: faker.helpers.arrayElement([
      'active',
      'inactive',
      'invited',
      'suspended',
    ]),
    role: faker.helpers.arrayElement([
      'superadmin',
      'admin',
      'cashier',
      'manager',
    ]),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})


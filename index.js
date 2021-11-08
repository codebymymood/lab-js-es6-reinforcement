// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************
let usersArray = require('./data')
// console.log(usersArray)

const getFirstNames = arr => {
  const firstNames = [];
  for (let user of arr) {
    firstNames.push(user.firstName)
  }
  return firstNames;
};


console.log(getFirstNames(usersArray));


// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = arr => {
  // Your code goes here ...
  
  const  fullNames = [];
  for (let user of arr) {
    fullNames.push(`${user.firstName} ${user.lastName}`)
  }

  return fullNames
  
};
console.log(getFullNames(usersArray));

// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = arr => {
  const usersCreditDetails = [];

  for (let user of arr) {
    let {firstName, lastName, balance } = user;

    const newObj = {
      firstName,
      lastName,
      balance
    }

    usersCreditDetails.push(newObj);
    
  }
  return usersCreditDetails
};

console.log(getUsersCreditDetails(usersArray));


// expected output:
// [ { firstName: 'Kirby', lastName: 'Doyle', balance: '$3,570.06' },
// { firstName: 'Tracie', lastName: 'May', balance: '$1,547.73' },
// { firstName: 'Kendra', lastName: 'Hines', balance: '$12,383.08' },
// { firstName: 'Kinney', lastName: 'Howard', balance: '$3,207.06' },
// { firstName: 'Howard', lastName: 'Gilmore', balance: '$21,307.75' },
// { firstName: 'Rachelle', lastName: 'Schneider', balance: '$35,121.49' },
// { firstName: 'Lizzie', lastName: 'Alford', balance: '$4,382.94' } ]

// ***************************************************************************
// Iteration 4 - practice `.filter()` method and how to return two elements
// ***************************************************************************

const genderView = users => {
 
  let femaleUsers = usersArray.filter( (elem) => {
      return elem.gender =='female'    
  })
  
  let maleUsers = usersArray.filter((elem) => {
    return elem.gender == 'male'
  })
 

return [getFullNames(femaleUsers),getFullNames(maleUsers)];
 

};

console.log(genderView(usersArray));
// expected output:
// {
//    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
//    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
// }

// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************

const data = genderView(usersArray);

const genderCount = data => {
  return [genderView(usersArray)[0].length, genderView(usersArray)[1].length]
};

console.log(genderCount(data));
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = users => {
  let balanceStr = parseInt(users.balance)
  let eligibleUser = [];

  if (balanceStr > 20000) {
    eligibleUser.push(usersArray)
    return `Dear ${users.firstName}, since your balance is ${users.balance}, you are eligible to apply for this awesome credit card.`
  }
  console.log(eligibleUser);
};


// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  // Your code goes here ...
};

addActive(usersArray);
// expected output:
// [
//    { firstName: 'Kirby',
//      lastName: 'Doyle',
//      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
//      isActive: true,
//      balance: '$3,570.06',
//      gender: 'male'
//    },
//    {
//      // ...
//    }
// ]

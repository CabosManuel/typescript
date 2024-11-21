import _ from 'lodash';

const data = [
  {
    username: 'Nico',
    role: 'admin'
  },
  {
    username: 'Valentina',
    role: 'seller'
  },
  {
    username: 'Juan',
    role: 'seller'
  },
  {
    username: 'Pedro',
    role: 'customer'
  }
];

const rta = _.groupBy(data, (item) => item.role);
console.log('🚀 ~ rta:', rta);
/*
{
  admin: [ { username: 'Nico', role: 'admin' } ],
  seller: [
    { username: 'Valentina', role: 'seller' },
    { username: 'Juan', role: 'seller' }
  ],
  customer: [ { username: 'Pedro', role: 'customer' } ]
*/

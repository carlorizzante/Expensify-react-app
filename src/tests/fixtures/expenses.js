import moment from 'moment';

export default [{
  // id: 1,
  id: 'ab12',
  description: 'In the past',
  note: '...',
  amount: 100,
  createdAt: moment(0).valueOf()
}, {
  // id: 2,
  id: 'bc23',
  description: 'A bit later',
  note: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
  amount: 200,
  createdAt: moment(0).subtract(10, 'days').valueOf()
}, {
  // id: 3,
  id: 'vf45',
  description: 'Much later',
  note: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
  amount: 300,
  createdAt: moment(0).add(10, 'days').valueOf()
}];

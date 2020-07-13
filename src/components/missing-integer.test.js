import puppeteer from "puppeteer";
import {missing_integer_data} from 'components/missing-integer-data';
import {missing_integer, perm_check, frog_river_one, count_div} from 'components/onlinetests';


// test.each(missing_integer_data)(
//   'missing_integer_data (%s) = %s', (input, expected) => {
//     expect(missing_integer(input)).toBe(expected);
//   },
// );

const perm_check_data = [
  [ [4, 1, 3, 2] , 1 ],
  [ [4, 1, 1, 2] , 0 ],
  [ [4, 1, 3] , 0 ],
  [ [9, 5, 7, 3, 2, 7, 3, 1, 10, 8] , 0]
  // [ [1, 2, 2, 3], 4],
  // [ [1, 1, 2, 3], 4],
  // [ [ -1,-3], 1  ],
  // [ [ -1,-3, 2] , 1  ],
  // [ [ -1,-3, 1] , 2  ],
  // [ [ 0 ], 1  ],
  // [ [-1000000 ], 1  ],
  // [ [-1000000, 1 ] , 2  ],
  // [ [ 1000000  ],  1 ],
  // [ [ 999999, 999998, 1000000 ] , 1  ],
  // [ [ 1, 3, 999999, 999998, 1000000 ] , 2  ],

]

// test.each(perm_check_data)(
//   'perm_check (%s) = %s', (input, expected) => {
//     expect(perm_check(input)).toBe(expected);
//   },
// );

const frog_river_one_data = [
  [ 5, [ 1, 3, 1, 4, 2, 3, 5, 4], 6  ],
  [ 3, [ 1, 3], -1  ],
  [ 2, [ 1, 1, 1, 1], -1  ],
  [ 3, [ 1, 4, 2, 3], 3  ],
  [ 2, [ 1, 4, 2, 3], 2  ],
  [ 4, [ 1, 2, 3, 2, 3, 3, 1, 2, 2, 4, 2, 1 ], 9  ],
  [ 4, [ 1, 2, 3, 2, 3, 3, 1, 2, 4, 4, 2, 1 ], 8  ],
  [ 4, [ 1, 2, 3, 4, 3, 3, 1, 2, 4, 4, 2, 1 ], 3  ],

]


// test.each(frog_river_one_data)(
//   'frog_river_one (%s, %s) = %s', (x, y, expected) => {
//     expect(frog_river_one(x, y)).toBe(expected);
//   },
// );

count_div(3, 5, 3) // 1
count_div(4, 5, 6) // 0
count_div(4, 5, 3) // 0
count_div(4, 8, 3) // 1
count_div(4, 9, 3) // 2
count_div(3, 9, 3) // 3

const count_div_data = [
  [ 0, 0, 4, 1 ],
  [ 3, 5, 3, 1 ],
  [ 3, 5, 3, 1 ],
  [ 4, 5, 6, 0 ],
  [ 4, 5, 3, 0 ],
  [ 4, 8, 3, 1 ],
  [ 4, 9, 3, 2 ],
  [ 3, 9, 3, 3 ],
]

test.each(count_div_data)(
  'count_div (%s, %s, %s) = %s', (x, y, z, expected) => {
    expect(count_div(x, y, z)).toBe(expected);
  },
);
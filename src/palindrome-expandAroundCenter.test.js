import puppeteer from "puppeteer";
import {palindrom_data} from './palindrom-data';
import {longestPalindrome_expandAroundCenter} from './palindrome-expandAroundCenter';



// test.each(palindrom_data)(
//   'palindrom (%s) = %s', (input, expected) => {
//     expect(palindrom(input)).toBe(expected);
//   },
// );


test.each(palindrom_data)(
  'longestPalindrome_expandAroundCenter (%s) = %s', (input, expected) => {
    expect(longestPalindrome_expandAroundCenter(input)).toBe(expected);
  },
);
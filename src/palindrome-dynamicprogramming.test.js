import puppeteer from "puppeteer";
import {palindrom_data} from 'palindrom-data';
import {longestPalindrome_dynamicprogramming} from 'palindrome-dynamicprogramming';


test.each(palindrom_data)(
  'longestPalindrome_dynamicprogramming (%s) = %s', (input, expected) => {
    expect(longestPalindrome_dynamicprogramming(input)).toBe(expected);
  },
);
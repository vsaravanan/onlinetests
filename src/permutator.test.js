import puppeteer from "puppeteer";
import {permutator} from 'permutator';
import {PrintList} from 'PrintList';
import React from 'react'




let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true,
    devtools: true
  });
  page = await browser.newPage();
  await page.goto("http://localhost:3000/");
});


test('permutator( cat )', () => {
  let res = '["cat", "cta", "act", "atc", "tca", "tac"]'.toString()
  res = res.replace(/"/g,'') 
  res = res.replace(/ /g,'') 
  res = res.replace(/\[/g,'') 
  res = res.replace(/\]/g,'') 
  expect(permutator(['c','a','t']).toString() ).toBe(res) ;
});


test("renders permutator-cat", async () => {
  await page.waitForSelector(".permutator-cat");
  const permutator_test1 = await page.$eval(".permutator-cat > ul ", e => e.innerText)
  console.log(permutator_test1)
  expect(permutator_test1).toBe("cat cta act atc tca tac".replace(/ /g,'\n'))
});

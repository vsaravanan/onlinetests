import React from 'react'
import {PrintList} from 'lib/PrintList';
import {fact} from 'components/fact';
import {permutator} from 'components/permutator';
import {longestPalindrome_dynamicprogramming} from 'components/palindrome-dynamicprogramming';
import {longestPalindrome_expandAroundCenter} from 'components/palindrome-expandAroundCenter';
import { Tree } from 'components/binarytree/tree'
import { ThemeProvider } from 'styled-components';
import { darkTheme } from 'theme';
import { GlobalStyles } from 'global';

class App extends React.Component {
  constructor(props) {
    super(props) 

    this.tree = new Tree()
    let tree = this.tree
    tree.addValue(5);
    tree.addValue(3);
    tree.addValue(9);
    // tree.addValue(4);
    // tree.addValue(8);
    // tree.addValue(7);
    // tree.addValue(10);
    console.log(tree)
    tree.traverse()


    tree = tree.sorted()


    tree.addValue(6)
    tree.traverse()    
    tree = tree.sorted()
    tree.traverse()    
    // tree.remove(3)
    // tree.traverse()    

  }

  render() {

    
    return (
      <ThemeProvider theme={darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
        <div>
          Factorial 
          <ul>

            <li> fact(3n)        => {  fact(3n).toString() } </li>
            <li> fact(4n)        => {  fact(4n).toString() } </li>
            <li> fact(5n)        => {  fact(5n).toString() } </li>
            <li> fact(100n)        => {  fact(100n).toString() } </li>

          </ul>
        </div> 
        <div>
          permutator 
          <ul >

            <li className='permutator-cat' > permutator(['c','a','t'])        => <PrintList items={permutator(['c','a','t'])}   />  </li>

          </ul>
        </div>        
        <div>
          longestPalindrome_dynamicprogramming 
          <ul>
            <li> racecar   => { longestPalindrome_dynamicprogramming('racecar') } </li>
            <li> racecbr   => { longestPalindrome_dynamicprogramming('racecbr') } </li>
            <li> rarecbr   => { longestPalindrome_dynamicprogramming('rarecbr') } </li>
            <li> racakbr   => { longestPalindrome_dynamicprogramming('racakbr') } </li>
            <li> rbacabkbr => { longestPalindrome_dynamicprogramming('rbacabkbr') } </li>
          </ul>
        </div>
        <div>
        longestPalindrome_expandAroundCenter 
          <ul>
            <li> racecar   => { longestPalindrome_expandAroundCenter('racecar') } </li>
            <li> racecbr   => { longestPalindrome_expandAroundCenter('racecbr') } </li>
            <li> rarecbr   => { longestPalindrome_expandAroundCenter('rarecbr') } </li>
            <li> racakbr   => { longestPalindrome_expandAroundCenter('racakbr') } </li>
            <li> rbacabkbr => { longestPalindrome_expandAroundCenter('rbacabkbr') } </li>
          </ul>
        </div>
      </div>
            
      </>
    </ThemeProvider>


    );
  }
}


export default App;





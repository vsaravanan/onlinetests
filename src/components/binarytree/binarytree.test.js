import { Tree } from 'components/binarytree/tree'

test('binarytree (  )', () => {
    // let res = '["cat", "cta", "act", "atc", "tca", "tac"]'.toString()
    // res = res.replace(/"/g,'') 
    // res = res.replace(/ /g,'') 
    // res = res.replace(/\[/g,'') 
    // res = res.replace(/\]/g,'') 
    // expect(permutator(['c','a','t']).toString() ).toBe(res) ;
    let tree = new Tree()
    tree.addValue(5);
    tree.addValue(3);
    tree.addValue(9);
    tree.traverse()


    tree = tree.sorted()
    expect(tree.tostring()).toBe('359')

    tree.addValue(6)
    expect(tree.tostring()).toBe('3569')

    tree.traverse()    
    tree = tree.sorted()
    tree.traverse() 
    tree.remove(3)
    tree.traverse() 
    expect(tree.tostring()).toBe('569')

    // tree.addValue(6)
    // tree.traverse()    
    // tree = tree.sorted()
    // tree.traverse()    
    // tree.remove(3)
    // tree.traverse()  
    
    
    

  });
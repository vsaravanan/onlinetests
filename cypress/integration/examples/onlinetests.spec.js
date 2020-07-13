describe("all-cypress-test", () => 
{
    it('factorial', () => 
    {
        cy.visit('/')   


        cy.get('.factorial').closest('ul').should(($el) => 
        {
            expect($el.get(0).innerText.replace(/\n/g,' ')).to.eq("fact(3n) => 6 fact(4n) => 24 fact(5n) => 120 fact(100n) => 93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000")
        })
    })    
    
    it('permutator-cat', () => 
    {

        cy.get('.permutator-cat > ul').should(($el) => 
        {
            expect($el.get(0).innerText.replace(/\n/g,' ')).to.eq("cat cta act atc tca tac")
        })
    })      

    it('findmaxslice on [-2, -3, 4, -1, -2, 1, 5, -3] should return 7', () => 
    {
     
        cy.contains('div', 'findmaxslice').get('.findmaxslice').should(($e) => 
        {
            const tmp = $e.get(0).innerText
            console.log(tmp)
            expect(tmp.replace(/\n| /g,'')).to.eq("7")
        })
    })  


    it('longestPalindrome_dynamicprogramming', () => 
    {

        cy.contains('div', 'longestPalindrome_dynamicprogramming')
        .get( ($c) => {
            $c.contains('li', 'racecar')
            .should( ($e) => {
                expect($e.get(0).innerText.replace(/\n| /g,'')).to.eq("racecar=>racecar")
            })
            $c.contains('li', 'racecbr')
            .should( ($e) => {
                expect($e.get(0).innerText.replace(/\n| /g,'')).to.eq("racecbr=>cec")
            })                        
        })
        cy.contains('div', 'longestPalindrome_dynamicprogramming').contains('li', 'rarecbr') 
        .should( ($e) => {
            expect($e.get(0).innerText.replace(/\n| /g,'')).to.eq("rarecbr=>rar")
        }) 
        cy.contains('div', 'longestPalindrome_dynamicprogramming').contains('li', 'racakbr') 
        .should( ($e) => {
            expect($e.get(0).innerText.replace(/\n| /g,'')).to.eq("racakbr=>aca")
        })  
        cy.contains('div', 'longestPalindrome_dynamicprogramming').contains('li', 'rbacabkbr') 
        .should( ($e) => {
            expect($e.get(0).innerText.replace(/\n| /g,'')).to.eq("rbacabkbr=>bacab")
        })                         

    })  

})




        // cy.get('.findmaxslice')
        // .then( ($e) => {
        //     console.log($e)
        //     debugger
        // } )
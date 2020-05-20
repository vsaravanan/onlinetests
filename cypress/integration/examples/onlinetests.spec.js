describe("permutator-cypress-test", () => 
{
    it('permutator-cat > ul', () => 
    {
        cy.visit('/')   
        cy.get('.permutator-cat > ul').should(($ul) => 
        {
            // debugger
            expect($ul.get(0).innerText.replace(/\n/g,' ')).to.eq("cat cta act atc tca tac")
        })
    })     


})

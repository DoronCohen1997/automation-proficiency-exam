const SeleniumInfra = require('./seleniumInfra');

const seleniumInfra = new SeleniumInfra()

const URL = "https://elevation-local-todo.herokuapp.com";


class TodosPage {
    constructor(url) {
        seleniumInfra.getURL(url)
    }



    async insertAndDelete(todoText) {

        let insertvalue = await seleniumInfra.write(todoText, "id", "todo-input")

        await seleniumInfra.clickElement("id", "addToDo")

        let result = await seleniumInfra.getTextFromElement("className", "text")

        let findnewdiv = await seleniumInfra.findElementBy("className", "todo")

        if (findnewdiv) {

            console.log("found a new div")


            if (result == todoText) {
                console.log("New div has the same text")

            }

            else {
                console.log("Error: New div does not has the same text")
            }
        }
        else {
            console.log("Error: Can’t find a new div")
        }

        await seleniumInfra.clickElement("xpath", "/html/body/div[2]/div/span[2]")

        let checkElement = await seleniumInfra.isElementExists("xpath", "/html/body/div[2]/div")

        if (!checkElement) {

            console.log("The div was deleted")

        }

        else {
            console.log("The div was not deleted")
        }

    }



    async insertAndComplete(todoText) {

        let insertvaluesecondfunction = await seleniumInfra.write(todoText, "id", "todo-input")

        await seleniumInfra.clickElement("id", "addToDo")

        let checkElementsecondfunction = await seleniumInfra.isElementExists("xpath", "/html/body/div[2]/div")

       if (!checkElementsecondfunction) {

            console.log("Can’t find a new div")
    }
    else{
        console.log("found a new div")
    }

     await seleniumInfra.clickElement("xpath", "/html/body/div[2]/div/i")

    let checkfunctionnew = await seleniumInfra.isElementExists("className", "todo complete")
     
    if (checkfunctionnew) {

        console.log("the new div was checked")
        
    }

    else{
        console.log("Error: the new div was NOT checked")
    }



}

    async insertTwoDeleteFirst(todoText1, todoText2) {

        let insertvaluethirdfunction = await seleniumInfra.write(todoText1, "id", "todo-input")

        await seleniumInfra.clickElement("id", "addToDo")

        let checkElementthirdfunction = await seleniumInfra.isElementExists("id", "todos")

        if (!checkElementthirdfunction) {

            console.log("Can’t find a new div")
    }
    else{
        console.log("found a new div")
    }

    let insertvaluethirdfunction2 = await seleniumInfra.write(todoText2, "id", "todo-input")

    await seleniumInfra.clickElement("id", "addToDo")

    let checkfunctionthird = await seleniumInfra.isElementExists("xpath", "/html/body/div[2]/div[2]")
     
    if (checkfunctionthird) {

        console.log("found a new div")
        
    }

    else{
        console.log("Error: Can’t find a new div")
    }

    await seleniumInfra.clickElement("xpath", "/html/body/div[2]/div[1]/span[2]/i")

    let checkfunctionthirdnew = await seleniumInfra.isElementExists("xpath", "/html/body/div[2]/div[1]")

    if (checkfunctionthird) {

        console.log("the first div was deleted")
        
    }

    else{
        console.log("Error: the first div was NOT deleted")
    }

    }

}





module.exports = TodosPage


let test = async function () {


    let z1 = new TodosPage("https://elevation-local-todo.herokuapp.com");

    //await z1.insertAndComplete("doron")

    //await z1.insertTwoDeleteFirst("doron", "cohen")

    //await z1.insertAndDelete("doron")  


}

test()
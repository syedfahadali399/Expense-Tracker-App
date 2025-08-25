let formData = document.getElementById("form")
let showIncome = document.getElementById("show-income-data")
let showExpense = document.getElementById("show-expense-data")
let showBalance = document.getElementById("show-balance-data")

let array = []
let amount = 0
let incomeAmount = 0
let expenseAmount = 0


formData.addEventListener("submit", function(e) {
    e.preventDefault()
    
    let getText = document.getElementById("get-name").value
    let getAmount = document.getElementById("get-amount")
    let getUserChioce = document.getElementById("choose-chioce").value
    let convertAmount = Number(getAmount.value)

    let obj = {
        name: getText,
        amount: convertAmount,
        chioce: getUserChioce
    }
    
    array.push(obj)

    function showData() {
        let showData = document.querySelector("#show-data")
        let biggerDiv = document.createElement("div")
        let createForText = document.createElement('p')
        let createForAmount = document.createElement('p')
            
        biggerDiv.setAttribute("class", "upper-div")
        createForText.setAttribute("class", "new-text")
        createForAmount.setAttribute("class", "new-amount")

        createForText.textContent = `${obj.name}`
        if(obj.chioce == "income") {
            createForAmount.textContent = `+${obj.amount}`
        } else {
            createForAmount.textContent = `-${obj.amount}`
        }

        biggerDiv.classList.add("upper-div")
        
        showData.insertAdjacentElement("afterbegin", biggerDiv)
        biggerDiv.insertAdjacentElement("afterbegin", createForAmount)
        biggerDiv.insertAdjacentElement("afterbegin", createForText)
    
    }
    
    if(obj.chioce == "income") {
        showBalance.textContent = `$${amount}`
        amount = amount + obj.amount
        incomeAmount = incomeAmount + obj.amount
        showBalance.textContent = `$${amount}`
        showIncome.textContent = `$+${incomeAmount}`

        showData()
    }
    
    if(obj.chioce == "expense") {
        amount = amount - obj.amount
        expenseAmount = expenseAmount - obj.amount
        showBalance.textContent = `$${amount}`
        showExpense.textContent = `$${expenseAmount}`

        showData()
    }
        
    if(obj.chioce == "choose") {
        alert("Please Enter Valid Choice")
    }
    
})
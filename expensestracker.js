var text = document.getElementById('inputbox1')
var amount = document.getElementById('inputbox2')
var bal = document.getElementById('bal')
var inc = document.getElementById('inc')
var exps = document.getElementById('exps')

var balance;


function add_transaction(){
    if (amount.value != "" &&  text.value != ""){
        if (amount.value > 0){
            var income = parseInt(inc.innerText);
            income += parseInt(amount.value);
            inc.innerText = income;
            
            
            balance = parseInt(bal.innerText);
            balance += (parseInt(amount.value));
            bal.innerText = balance;

            showHistory();
        }
        else{
            var expense = parseInt(exps.innerText);
            expense += Math.abs(parseInt(amount.value));
            exps.innerText = expense;


            balance = parseInt(bal.innerText);
            balance -= Math.abs(parseInt(amount.value));
            bal.innerText = balance;
            
        }
    }
    else{
        alert("All fields are manditory")
    }
    amount.value = "";
    text.value = "";

}

function showHistory(){
    var hisbox = document.getElementById('hisbox');
    hisbox.innerHTML +=  `<div class="history">
                          <p>${text.value}</p>
                          <p>${amount.value}</p>
                          </div>`;
}

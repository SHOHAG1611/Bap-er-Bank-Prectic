// at first active your deposit button 
document.getElementById('deposit-button').addEventListener('click', function () {

    // get the deposit amound first 
    const depositInput = document.getElementById('deposit-input')
    const newDepositAmoundText = depositInput.value;
    const newDepositAmound = parseFloat(newDepositAmoundText);

    // add deposit input amonud in deposit amonud 
    depositTotal = document.getElementById('deposit-total')
    const previusDepositText = depositTotal.innerText
    const previusDepositAmound = parseFloat(previusDepositText);
    const newDepositTotal = previusDepositAmound + newDepositAmound;
    depositTotal.innerText = newDepositTotal;

    // update main balance with deposit amonund
    const balanceTotal = document.getElementById('Main-Balance');
    const balanceTotalText = balanceTotal.innerText
    const previusBalanceTotal = parseFloat(balanceTotalText);
    const newMainBalance = previusBalanceTotal + newDepositAmound;
    balanceTotal.innerText = newMainBalance;

    // clear the deposit input 
    depositInput.value = '';

})


// at first active your widrthdraw button 
document.getElementById('widthdraw-button').addEventListener('click', function () {


    // het the widrthdraw amonud first
    const widrthdrawInput = document.getElementById('widthdraw-input');
    const WidrthdrawAmoundText = widrthdrawInput.value;
    const newWirdthdrawAmoun = parseFloat(WidrthdrawAmoundText);
    console.log(newWirdthdrawAmoun);

    // add widrthdraw input amonud in wirdthdraw amound
    const widrthdrawTotal = document.getElementById('Widthdraw-total')
    const previusWidrthdrawText = widrthdrawTotal.innerText;
    const previusWidrthdrawTotal = parseFloat(previusWidrthdrawText);
    const newWirdthdrawTotal = previusWidrthdrawTotal + newWirdthdrawAmoun;
    widrthdrawTotal.innerText = newWirdthdrawTotal;

    // update Main Balance ufter widrthdraw amound
    const balanceTotal = document.getElementById('Main-Balance')
    const previusBalanceText = balanceTotal.innerText
    const previusBalance = parseFloat(previusBalanceText);
    const nowTotalBalance = previusBalance - newWirdthdrawAmoun;
    balanceTotal.innerText = nowTotalBalance;

    // clear the widrthdraw input 
    widrthdrawInput.value = '';
})
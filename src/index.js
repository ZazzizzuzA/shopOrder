import "./styles/styles";

/*  переменные для комментария    */

let textArea = document.getElementById('commentArea'),
    linkToComment = document.getElementById('toComment'),

    /*  переменные для переключение между табами. при больших количествах удобнее реализовывать с помощью Vue-routera (для меня на данный момент)  */

    newBuyer = document.getElementById('newBuyer'),
    regBuyer = document.getElementById('regBuyer'),
    contentForReg = document.getElementsByClassName('item_content-for-reg-user')[0],
    contentForNew = document.getElementsByClassName('item__content')[0],

    /*  переменные для подсчета суммы заказа    */

    prices = Array.from(document.getElementsByClassName('price_absolute')),
    sum = document.getElementById('sumOfOrder');

/*     подсчет суммы заказа по всем позициям     */

window.addEventListener('load', function getPrices() {
    let priceValue = +"";
    for (let price of prices) {
        priceValue += parseInt(price.textContent);
    }
    sum.innerText = priceValue + " грн.";
})

/*  вывод окна для комментария на экран    */

linkToComment.addEventListener('click', (event) => {
    event.preventDefault();
    textArea.classList.toggle('activeComment');
    textArea.removeAttribute('disabled');
})

/*  переключение между табами  */

newBuyer.onclick = () => {

    if (regBuyer.classList.contains('active')) {
        newBuyer.classList.toggle('active');
        contentForNew.classList.toggle('hide');
        contentForReg.classList.toggle('hide');
        regBuyer.classList.remove('active')
    } else {
        false;
    }
}
regBuyer.onclick = () => {

    if (newBuyer.classList.contains('active')) {
        regBuyer.classList.toggle('active');
        contentForNew.classList.toggle('hide');
        contentForReg.classList.toggle('hide');
        newBuyer.classList.remove('active')
    } else {
        false;
    }
}
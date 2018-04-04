import "./styles/styles";

let textArea = document.getElementById('commentArea'),
    linkToComment = document.getElementById('toComment'),
    newBuyer = document.getElementById('newBuyer'),
    regBuyer = document.getElementById('regBuyer'),
    contentForReg = document.getElementsByClassName('item_content-for-reg-user')[0],
    contentForNew = document.getElementsByClassName('item__content')[0];

linkToComment.addEventListener('click', (event) => {
    event.preventDefault();
    textArea.classList.toggle('activeComment');

})
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
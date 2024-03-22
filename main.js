const buttonOpen = document.getElementById('reserveHotelModalOpen');
const modal = document.getElementById('reserveModal');
// ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
    modal.style.display = 'block';
}
// モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
// モーダルコンテンツ以外がクリックされた時
addEventListener('click', CloseButtonClick);
function CloseButtonClick() {
    modal.style.display = 'none';
}
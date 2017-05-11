var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");
var mapLink = document.querySelector(".js-open-map");
var mapOverlay = document.querySelector(".modal-overlay");
var gallery = document.querySelector(".gallery");
var buttons =
'button class="btn gallery-prev" type="button">Назад</button>'+'<button class="btn gallery-next" type="button">Вперед</button>';
var prev = document.querySelector(".gallery-prev");

/*Прогрессивное улучшение: если JS не сломан - фотогалерея имеет другой вид*/
gallery.classList.add("gallery-live");
/*Добавление кнопок. Но есть другой, более верный способ*/
gallery.innerHTML = gallery.innerHTML + buttons;
prev.setAttribute('disabled','disabled');

link.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.add("modal-content-enter");
	if (storage) {login.value = storage; password.focus();}
	else {login.focus();};
});
close.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.remove("modal-content-enter");
	popup.classList.remove("modal-error");
});
form.addEventListener("submit", function(event){
	if (!login.value || !password.value) {
		event.preventDefault();
		console.log("Не заполнено!");
		popup.classList.add("modal-error");}
	else {localStorage.setItem("login", login.value)};
});
window.addEventListener("keydown", function(event){
	if (event.keyCode === 27) {
	popup.classList.remove("modal-error");
	if (popup.classList.contains("modal-content-enter")) {popup.classList.remove("modal-content-enter");}}
});
mapLink.addEventListener("click", function(event){
	event.preventDefault();
	mapOverlay.classList.add("modal-overlay-enter");
	mapPopup.classList.add("modal-content-enter");
});
mapClose.addEventListener("click", function(event){
	event.preventDefault();
	mapOverlay.classList.remove("modal-content-enter");
	mapPopup.classList.remove("modal-overlay-enter");
});

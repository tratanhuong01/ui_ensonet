//load
document.addEventListener("DOMContentLoaded", () => {
  const coDinh = document.getElementById("header");
  const main_full = document.getElementById("content");
  const main_left_allinfo1 = document.getElementById("wrapper-scrollbar")
  function style_load1() {
    var padding_codinh = getComputedStyle(coDinh).height;
    var st = padding_codinh.replace("px", "");
    var height_ = window.innerHeight - parseInt(st);
    main_full.style.paddingTop = padding_codinh;
    // main_left_allinfo1.style.maxHeight = height_.toString() + "px";
    console.log();
  }
  style_load1();
  window.onresize = () => {
    style_load1();
  };
});
document.addEventListener("DOMContentLoaded", () => {
  const coDinh = document.getElementById("header");
  const main_full = document.getElementById("content");
  const main_left_allinfo1 = document.getElementsByClassName("wrapper-content-right")[0];
  function style_load2() {
    var padding_codinh = getComputedStyle(coDinh).height;
    var st = padding_codinh.replace("px", "");
    var height_ = window.innerHeight - parseInt(st);
    main_full.style.paddingTop = padding_codinh;
    main_left_allinfo1.style.maxHeight = height_.toString() + "px";
    console.log();
  }
  style_load2();
  window.onresize = () => {
    style_load2();
  };
});
function openPost() {
  var register = document.getElementById("modal-one");
  register.style.display = "block";
  var web = document.getElementById("main");
  web.style.opacity = "0.2";
}
function closePost() {
  var register = document.getElementById("modal-one");
  register.style.display = "none";
  var web = document.getElementById("main");
  web.style.opacity = "1";
}
function openRequestFriend() {
  var register = document.getElementById("connectfriend");
  register.style.display = "block";
}
function closeRequestFriend() {
  var register = document.getElementById("friend-request-1");
  register.style.display = "none";
}
function openMessenger() {
  var register = document.getElementById("messenger-facebook");
  register.style.display = "block";
}
function closeMessenger() {
  var register = document.getElementById("messenger-facebook");
  register.style.display = "none";
}
var modal_one = document.getElementById("modal-one");
var modal_addPost = document.getElementById("modal-two");
var modal_feel = document.getElementById("modal-three");
var modal_local = document.getElementById("modal-four");
var modal_tag = document.getElementById("modal-five");
var modal_gif = document.getElementById("modal-six");
var modal = [modal_addPost, modal_feel, modal_local, modal_tag, modal_gif];
function clickOpenModal(index) {
  modal[index].style.display = 'block';
  modal_one.style.display = 'none';
}
function clickCloseModal(index) {
  modal[index].style.display = 'none';
  modal_one.style.display = 'block';
}
function viewInfoHover(index, event) {
  var d = document.getElementsByClassName("friends-online-info");
  var topPos = event.clientY;
  d[index].style.display = 'flex';
  d[index].style.top = topPos - 144 + "px";
}
function viewInfoLeave(index) {
  var d = document.getElementsByClassName("friends-online-info");
  d[index].style.display = 'none';
}
var cmt = document.getElementsByClassName("comment-per");
var tym_cmt = document.getElementsByClassName("tym-comment");
for (var index = 0; index < cmt.length; index++) {
  var width_cmt = cmt[index].offsetWidth;
  if (width_cmt <= 135) {
    tym_cmt[index].style.right = -24 + "px";
    tym_cmt[index].style.bottom = -8 + "px";
  }
  else {
    tym_cmt[index].style.right = 16 + "px";
    tym_cmt[index].style.bottom = -20 + "px";
  }
}
function openEditFriend(index) {
  var editFriend = document.getElementsByClassName("edit-friend");
  editFriend[index].style.display = 'block';
  document.getElementsByClassName("main-friends")[0].addEventListener("click", function () {
    editFriend[index].style.display = 'none';
  }, true);
}
function searchAccount() {
  document.getElementById("show-gui-getacc").style.display = "block";
  document.getElementById("get-account-main").style.display = "none";
  document.getElementById("web").style.opacity = "0.2";
}
function loadTextBoxType() {
  document.getElementById("messages").style.height = 1000;
  var d = document.getElementById("newExcen");
  var e = document.getElementById("addOrCancel")
  if (d.style.display == 'block') {
    d.style.display = 'none';
    e.style.transition = '0.5s linear';
    e.style.transform = "rotate(0deg)";
  }
  else {
    var len = document.getElementById("messages").scrollHeight;
    document.getElementById("messages").scrollTop = len;
    e.style.transition = '0.5s linear';
    e.style.transform = "rotate(-45deg)";
  }
}
var mess_right = document.getElementsByClassName("mess-right");
var mess_user = document.getElementsByClassName("mess-user");
var img_mess_right = document.getElementsByClassName("img-mess-right");
var mess_user_r = document.getElementsByClassName("mess-user-r");
var mess_user_r1 = document.getElementsByClassName("mess-user-r1");
var mess_user_r2 = document.getElementsByClassName("mess-user-r2");
for (var a = 0; a < mess_right.length; a++) {
  img_mess_right[a].style.top = mess_right[a].offsetHeight - 16 + "px";
  mess_right[a].style.minWidth = mess_right[a].offsetWidth + 6 + "px";
  mess_user_r1[a].style.width = mess_right[a].offsetWidth + "px";
  mess_user_r[a].style.width = mess_user[a].offsetWidth - 50 - mess_user_r1[a].offsetWidth + mess_user_r2[a].offsetWidth + "px";
}
function openSettingChat(index) {
  var setting_chat = document.getElementsByClassName("setting-chat");
  if (setting_chat[index].style.display == 'none') {
    setting_chat[index].style.display = 'block';
    setting_chat[index].style.zIndex = 99;
  }
  else
    setting_chat[index].style.display = 'none';
}
function typeChat(index) {
  var three_exten = document.getElementsByClassName("three-exten");
  var three_exten1 = document.getElementsByClassName("three-exten1");
  var place_input_type = document.getElementsByClassName("place-input-type");
  if (place_input_type[index].innerText.length > 0) {
    three_exten[index].style.display = 'none';
    three_exten1[index].style.width = "83%";
    three_exten1[index].style.paddingLeft = "1em";
  }
  else {
    three_exten1[index].style.width = "50%";
    three_exten1[index].style.paddingLeft = "0em";
    three_exten[index].style.display = 'block';
  }
}
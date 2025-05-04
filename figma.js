function seachingacts() {
    const isclicked = document.querySelector('.seaching_area');
    const bodydis = document.querySelector('body');
    isclicked.classList.toggle('active');
    bodydis.classList.toggle('activated')
}
const searched_entered = document.getElementById('inputed_searching');
const outputne = document.getElementById('ouputOfS');
searched_entered.addEventListener("keydown", (e)=> {
    if(e.key ===  'Enter') {
        outputne.innerHTML = `You have searched ${inputed_searching.value}`;
    }
})
function menu_function() {
    const isclicked = document.querySelector('.wrapper_btn_header');
    isclicked.classList.toggle('active');
}
function beingFunction() {
    alert("This feature is under construction.")
}
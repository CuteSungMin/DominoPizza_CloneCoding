//더보기 누르면 사이드 메뉴 내려오는거
const btn_more = document.querySelector('.btn_more');
const more = document.querySelector('.more');

btn_more.addEventListener('click',function(){
    more.classList.toggle('active')
})
//더보기 누르면 사이드 메뉴 내려오는거

//IU제거
const IU = document.querySelector('.floating');
function IUR() { 
    IU.style.display = 'none'
}   
//IU제거






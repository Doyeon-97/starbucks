//변수선언
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

//이벤트가 온 뒤에는 항상 function
searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

//classList.contains: 값이 존재하는지 체크한다(true/false)
//classList.toggle(): 클래스 값이 있는지 체크하고 없으면 더하고 있으면 제거한다.

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});



const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021
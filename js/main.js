

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// 스크롤 시
window.addEventListener('scroll', _.throttle(function( ) {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        //배지 숨기기
        // badgeEl.style.display = 'none';
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        //버튼 보이기!
        gsap.to(toTopEl, .2, {
            x: 0
        });
    } else {
        //배지 보이기 
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        //버튼 숨기기!
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}, 300));
// _.throttle(함수, 시간)


toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    });
})

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index){
    gsap.to(fadeEl, 1, {
        // index는 0이기 때문에 숫자 1을 더해주는 것임
        delay: (index + 1) * .7, // 첫번째 요소는 0.7초 뒤, 두번재 요소는 1.4초 뒤, 세번째 요소는 2.1 초 뒤 실행
        opacity: 1
    });
});

//new 는 생성자
//소괄호 사이에다가 넣는것을 인수라고 함

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

//direction 기본값은 수평 슬라이드이기 때문에  따로 명시 할 필요는 없다.
new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion //눌러서 안보이게 된다면 토글은 또 false 인 상태가 되어있기 때문에 true = false 이고 false = true 처럼 (마치 토글) 정의해준것
    if(isHidePromotion) {
        //숨김처리
        promotionEl.classList.add('hide');
    } else {
        //보임처리
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션);
    gsap.to(
        selector, //선택자
        random(.5, 2.5), //에니메이션 동작 시간
        {   //옵션
        y: size,
        repeat: -1, //무한반복
        yoyo: true,  //위에 올라갔다가 내려오는걸 반복하는
        ease: Power1.easeInOut,
        delay: random(0, delay)
        }
    );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    //Scene은 보여짐 여부를 감시하는 요소
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .8 //section의 0.8 지점을 지나는 순간 show
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller()); 
});

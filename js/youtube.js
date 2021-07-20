// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    // <div id="player"></div>
    // '#player' 라고 하면 안됨. 
    // 유튜브 우클릭 하면 소스코드 복사가 있는데 그것을 사용하면 제어가 안되기 때문에 따로 음소거나 설정 할 것이 있으면 소스코드 말고 링크주소에 고유 아이디가 있는데 그것을 사용해야 함.
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8', //최초 재생 할 유튜브 영상 ID
        playerVars: {   //영상을 재생하기 위한 여러가지 변수들
            autoplay :true, // 자동 재생 유무
            loop: true, //반복 재생 유무
            playlist: 'An6LvWQuj_8' //반복 재생 할 유튜브 영상 ID 목록
        },
        events: {
            onReady: function (event) {
                event.target.mute() //음소거 
            }
        }
    });
}
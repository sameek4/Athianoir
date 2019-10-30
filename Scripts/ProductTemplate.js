//var tag = document.createElement('script');
//tag.id = 'iframe-demo';
//tag.src = 'https://www.youtube.com/iframe_api';
//var firstScriptTag = document.getElementsByTagName('script')[0];
//firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//var player;
//function onYouTubeIframeAPIReady() {
//    player = new YT.Player('FeaturedVideoFrame', {
//        events: {
//            'onReady': onPlayerReady,
//            'onStateChange': onPlayerStateChange
//        }
//    });
//}
//function onPlayerReady(event) {
//}

//function changeBorderColor(playerStatus) {
//    var color;
//    if (playerStatus === -1) {
//        color = "#37474F"; // unstarted = gray
//    } else if (playerStatus === 0) {
//        color = "#FFFF00"; // ended = yellow
//    } else if (playerStatus === 1) {
//        color = "#FF6D00"; // playing = green
//    } else if (playerStatus === 2) {
//        color = "#DD2C00"; // paused = red
//    } else if (playerStatus === 3) {
//        color = "#AA00FF"; // buffering = purple
//    } else if (playerStatus === 5) {
//        color = "#FF6DOO"; // video cued = orange
//    }
//    if (color) {
//        document.getElementById('FeaturedVideoFrame').style.borderColor = color;
//    }
//}

//function onPlayerStateChange(event) {
//    if (event.data === YT.Player.playerStatus.ENDED) {
//        $('#FeaturedVideoFrame').css('display', 'none');
//        $('#FeaturedVideoFrame').show();
//    }

//}

var vid = document.getElementById("FeaturedVideo");
vid.onended = function () {
    vid.currentTime = 2; 
    $('#FeaturedVideoThumb').show();
    vid.style.display = 'none';
}; 

$('#FeaturedVideoThumb').on('click', function (ev) {
    $(this).hide();
    ev.preventDefault();

    vid.controls = true; 
    vid.currentTime = 2; 
    vid.style.display = 'block';

    vid.play();

});
//button volume pause slidevolume

var audio = document.getElementById('audio');
var playpause = document.getElementById('playpause');
var volume = document.getElementById('volume');
var vmslider = document.getElementById('vmslider');
playpause.onclick = togglePlay;
function togglePlay() {
  var bodysize = true;
  
  if (!isPlaying() && bodysize) {
    audio.play();
    playpause.className = 'pause';
  } else {
    audio.pause();
    playpause.className = 'play';
  }
};

// play pause stsate erro

function isPlaying() {
  var infoPlaying = false;
  var currentTime = audio.currentTime == 0 ? true : false;
  var paused = audio.paused ? true : false;
  var ended = !audio.ended ? true : false;
  var readyState = audio.readyState == 0 ? true : false;
  var cnp = document.getElementById('cnp');
  if (currentTime && paused && ended && readyState) {
    infoPlaying = true;
    cnp.classList.add('error');
  } else if (!currentTime && !paused && ended && !readyState) {
    infoPlaying = true;
    cnp.classList.remove('error');
  }
  return infoPlaying;
}

// muted volume unmote

function mute() {
  if (audio.muted) {
    volume.className = 'volume v-speak';
    audio.muted = false;
  } else {
    volume.className = 'volume v-mute';
    audio.muted = true;
  }
};

// slide volume

vmslider.oninput = function () {
  vmslider.title = this.value + ' %';
  audio.volume = this.value / 100;
  if (this.value <= 0) {
    volume.className = 'volume v-mute';
    audio.muted = true;
  } else {
    volume.className = 'volume v-speak';
    audio.muted = false;
  }
};

//Social share altomatic code

window.onload = setShareLinks;

function setShareLinks() {
  var pageUrl = encodeURIComponent(document.URL);
  var pageTitle = encodeURIComponent(document.title);

  document.addEventListener('click', function (event) {  
    let url = null;
    
    if (event.target.classList.contains('share__link--facebook')) {
      url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
      socialWindow(url, 570, 570);
    }

    if (event.target.classList.contains('share__link--twitter')) {
      url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + pageTitle;
      socialWindow(url, 570, 300);
    }

    if (event.target.classList.contains('share__link--linkedin')) {
      url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
      socialWindow(url, 570, 570);
    }

    if (event.target.classList.contains('share__link--whatsapp')) {
      url = "https://api.whatsapp.com/send?text=" + pageTitle + "%20" + pageUrl;
      socialWindow(url, 570, 450);
    }

    if (event.target.classList.contains('share__link--mail')) {
      url = "mailto:?subject=%22" + pageTitle + "%22&body=Estou%20ouvindo%20O%20%22" + pageTitle + "%22%20on%20" + pageUrl;
      socialWindow(url, 570, 450);
    }

  }, false);
}

function socialWindow(url, width, height) {
  var left = (screen.width - width) / 2;
  var top = (screen.height - height) / 2;
  var params = "menubar=no,toolbar=no,status=no,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left;
  window.open(url,"",params);
}

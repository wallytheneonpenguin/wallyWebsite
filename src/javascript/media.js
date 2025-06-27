    function switchVideo(videoId) {
      const iframe = document.getElementById('music-video-frame');
      iframe.src = 'https://www.youtube.com/embed/' + videoId;
    }

      function switchTrack(trackId) {
      const iframe = document.getElementById('song-frame');
      iframe.src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%23ff5500&inverse=false&auto_play=true&show_user=true`;
      iframe.src = newSrc;
    }
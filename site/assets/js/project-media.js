(function () {
  'use strict';
  document.querySelectorAll('[data-project-media]').forEach(function (root) {
    const stage = root.querySelector('[data-media-stage]');
    const poster = root.querySelector('[data-media-poster]');
    const load = root.querySelector('[data-media-load]');
    const close = root.querySelector('[data-media-close]');
    const video = root.dataset.videoId;
    const demo = root.dataset.demoUrl;
    const playlist = root.dataset.playlistId;
    const isVideo = /^[A-Za-z0-9_-]{11}$/.test(video || '');
    const isDemo = ['/work/shelf-vision/', '/demos/aurevia/'].includes(demo);
    if (!isVideo && !isDemo) return;
    load.hidden = false;
    load.addEventListener('click', function () {
      if (stage.querySelector('iframe')) return;
      const frame = document.createElement('iframe');
      frame.title = isVideo ? root.querySelector('h2').textContent + ' — YouTube video' : 'Interactive portfolio demo — fictional content';
      const playlistQuery = /^PL[A-Za-z0-9_-]+$/.test(playlist || '')
        ? '&listType=playlist&list=' + encodeURIComponent(playlist) : '';
      frame.src = isVideo ? 'https://www.youtube-nocookie.com/embed/' + video + '?autoplay=0&rel=0' + playlistQuery : demo;
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      frame.allowFullscreen = true;
      frame.allow = isVideo ? 'encrypted-media; picture-in-picture; fullscreen' : 'fullscreen';
      poster.hidden = true;
      stage.appendChild(frame);
      stage.setAttribute('data-loaded', '');
      close.hidden = false;
      frame.focus();
    });
    close.addEventListener('click', function () {
      const frame = stage.querySelector('iframe');
      if (frame) frame.remove();
      stage.removeAttribute('data-loaded');
      poster.hidden = false;
      close.hidden = true;
      load.focus();
    });
  });
})();

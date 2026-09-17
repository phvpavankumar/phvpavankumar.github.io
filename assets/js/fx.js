(function () {
	var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

	/* ---------- audio (synthesised, gesture-gated) ---------- */
	var AC = null, audioOn = false;
	function ac() { try { if (!AC) { AC = new (window.AudioContext || window.webkitAudioContext)(); } } catch (e) {} return AC; }
	function key() {
		if (!audioOn || !AC || AC.state !== 'running') { return; }
		var t = AC.currentTime, o = AC.createOscillator(), g = AC.createGain(), f = AC.createBiquadFilter();
		o.type = 'square'; o.frequency.value = 1400 + Math.random() * 900;
		f.type = 'highpass'; f.frequency.value = 900;
		g.gain.setValueAtTime(0.025, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.03);
		o.connect(f); f.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + 0.035);
	}
	function chime(fq, dur) {
		if (!audioOn || !AC || AC.state !== 'running') { return; }
		var t = AC.currentTime, o = AC.createOscillator(), g = AC.createGain();
		o.type = 'sine'; o.frequency.setValueAtTime(fq, t);
		o.frequency.exponentialRampToValueAtTime(fq * 1.5, t + dur);
		g.gain.setValueAtTime(0.05, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
		o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + dur);
	}
	window.phvAudio = { key: key, chime: chime, toggle: function () { ac(); audioOn = !audioOn; return audioOn; }, on: function () { return audioOn; } };

	/* unlock audio on first interaction with ANY page (browser autoplay policy) */
	function unlock() {
		var a = ac();
		if (a && a.state === 'suspended') { a.resume(); }
		removeEventListener('pointerdown', unlock);
		removeEventListener('keydown', unlock);
	}
	addEventListener('pointerdown', unlock);
	addEventListener('keydown', unlock);

	/* ---------- progress bar (site-wide) ---------- */
	var pb = document.createElement('div');
	pb.className = 'phv-pb';
	document.body.appendChild(pb);
	addEventListener('scroll', function () {
		var h = document.documentElement;
		var m = h.scrollHeight - h.clientHeight;
		pb.style.width = (m > 0 ? (h.scrollTop / m) * 100 : 0) + '%';
	}, { passive: true });

	/* ---------- boot ----------
	   The INITIALISE overlay was removed at the owner's request (2026-09-17).
	   fireBooted() still runs immediately so that anything gated on the
	   'phv:booted' event (the tl;dr typewriter) starts as soon as fx.js loads. */
	var booted = false;
	function fireBooted() {
		if (booted) { return; }
		booted = true;
		document.dispatchEvent(new Event('phv:booted'));
	}
	fireBooted();

	/* ---------- tl;dr typewriter ---------- */
	function startTldr() {
		var box = document.querySelector('[data-phv-tldr]');
		if (!box) { return; }
		var out = box.querySelector('[data-out]');
		var tgl = box.querySelector('[data-audio]');
		var msg = '';
		try { msg = JSON.parse(box.querySelector('script[type="application/json"]').textContent).text; } catch (e) { return; }
		if (tgl) {
			tgl.textContent = audioOn ? 'SOUND: ON' : 'SOUND: OFF';
			tgl.addEventListener('click', function () {
				var on = window.phvAudio.toggle();
				var a = ac(); if (a && a.state === 'suspended') { a.resume(); }
				tgl.textContent = on ? 'SOUND: ON' : 'SOUND: OFF';
			});
		}
		if (reduced) { out.textContent = msg; return; }
		var i = 0;
		(function t() {
			if (i < msg.length) {
				out.textContent += msg[i];
				if (msg[i] !== ' ' && msg[i] !== '\n') { key(); }
				i++;
				setTimeout(t, msg[i - 1] === '\n' ? 540 : 34);
			}
		})();
	}
	if (booted) { startTldr(); } else { document.addEventListener('phv:booted', startTldr); }

	/* ---------- reveal + heading underlines + counters ---------- */
	function initScrollFx() {
		var targets = [];
		var art = document.querySelector('.phv-article');
		if (art && !reduced) {
			Array.prototype.forEach.call(art.children, function (el) {
				el.classList.add('phv-rv'); targets.push(el);
			});
		}
		document.querySelectorAll('[data-phv-stat]').forEach(function (el) { targets.push(el); });
		if (!('IntersectionObserver' in window) || targets.length === 0) {
			targets.forEach(function (el) { el.classList.add('on'); });
			return;
		}
		var io = new IntersectionObserver(function (es) {
			es.forEach(function (e) {
				if (!e.isIntersecting) { return; }
				e.target.classList.add('on');
				e.target.querySelectorAll('b[data-n]').forEach(function (b) {
					var target = parseFloat(b.dataset.n), n = 0, step = target / 28;
					(function c() {
						n += step;
						if ((step < 0 && n > target) || (step > 0 && n < target)) {
							b.textContent = n.toFixed(1) + 'M'; requestAnimationFrame(c);
						} else {
							b.textContent = (target < 0 ? '\u2212' : '') + Math.abs(target).toFixed(1) + 'M';
						}
					})();
				});
				io.unobserve(e.target);
			});
		}, { threshold: 0.12 });
		targets.forEach(function (el) { io.observe(el); });
	}
	if (document.readyState !== 'loading') { initScrollFx(); }
	else { document.addEventListener('DOMContentLoaded', initScrollFx); }
})();

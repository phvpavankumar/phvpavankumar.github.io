(function () {
	var Q = [
		["What decision are we trying to improve?", "Not \u201cwhere can we use AI\u201d \u2014 which actual choice someone makes, and how you would know it got better."],
		["Which number tells us it worked?", "Pick one measure before you start. If you can\u2019t name it now, you won\u2019t agree on it later."],
		["Where does the data actually come from?", "Trace it to the system it is entered into. Not the dashboard it appears on."],
		["Do finance and operations mean the same thing?", "One word, one definition. Most failures live here and nobody notices until reporting."],
		["What is the system allowed to assume?", "Write down which gaps it may fill in on its own, and which it must leave blank."],
		["Where does a human still sign off?", "Draw the line clearly. \u201cSomeone reviews it\u201d is not a control."],
		["How will we prove the value?", "Agree the starting point now, so the result can be compared to something real."]
	];

	function init() {
		var root = document.querySelector('[data-phv-stepper]');
		if (!root) { return; }

		var qn = root.querySelector('[data-qn]');
		var qq = root.querySelector('[data-qq]');
		var qw = root.querySelector('[data-qw]');
		var counter = root.querySelector('[data-counter]');
		var dots = root.querySelector('[data-dots]');
		var prev = root.querySelector('[data-prev]');
		var next = root.querySelector('[data-next]');
		if (!qq || !dots) { return; }

		var i = 0;

		Q.forEach(function (_, k) {
			var b = document.createElement('button');
			b.type = 'button';
			b.setAttribute('aria-label', 'Question ' + (k + 1));
			b.addEventListener('click', function () { i = k; draw(); });
			dots.appendChild(b);
		});

		function draw() {
			qn.textContent = 'Question ' + (i + 1);
			qq.textContent = Q[i][0];
			qw.textContent = Q[i][1];
			counter.textContent = (i + 1) + ' / ' + Q.length;
			prev.disabled = (i === 0);
			next.disabled = (i === Q.length - 1);
			Array.prototype.forEach.call(dots.children, function (b, k) {
				b.setAttribute('aria-current', k === i ? 'true' : 'false');
			});
		}

		prev.addEventListener('click', function () { if (i > 0) { i--; draw(); } });
		next.addEventListener('click', function () { if (i < Q.length - 1) { i++; draw(); } });
		draw();
	}

	if (document.readyState !== 'loading') { init(); }
	else { document.addEventListener('DOMContentLoaded', init); }
})();

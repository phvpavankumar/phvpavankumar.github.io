(function () {
	function init() {
		var root = document.querySelector('[data-phv-kpi-demo]');
		if (!root) { return; }

		var out = root.querySelector('[data-out]');
		var btnA = root.querySelector('[data-ask-a]');
		var btnB = root.querySelector('[data-ask-b]');
		var toggle = root.querySelector('[data-declare]');
		var declared = false;

		function render(which) {
			var q, val, src, note;
			if (which === 'a') {
				q = '\u201CWhat was the cost variance last quarter?\u201D';
				val = declared ? '\u22122.4M' : '\u22122.4M';
				src = declared ? 'Official definition \u00B7 posted variance, finance source' : 'Posted variance \u00B7 finance source';
			} else {
				q = '\u201CHow did costs track against plan?\u201D';
				val = declared ? '\u22122.4M' : '\u22123.1M';
				src = declared ? 'Official definition \u00B7 posted variance, finance source' : 'Derived estimate \u00B7 volume \u00D7 prior-year price';
			}
			note = declared
				? 'Both phrasings now return the declared number. The rival calculation is still available \u2014 by its own name.'
				: 'Confident. Fluent. No mention that another answer exists.';
			out.innerHTML =
				'<div class="phv-demo-q">' + q + '</div>' +
				'<div class="phv-demo-val' + (declared ? ' is-declared' : '') + '">' + val + '</div>' +
				'<div class="phv-demo-src">' + src + '</div>' +
				'<div class="phv-demo-note">' + note + '</div>';
		}

		btnA.addEventListener('click', function () { render('a'); });
		btnB.addEventListener('click', function () { render('b'); });
		toggle.addEventListener('change', function () {
			declared = toggle.checked;
			root.classList.toggle('is-declared', declared);
			out.innerHTML = '<div class="phv-demo-note">' +
				(declared ? 'Definition declared. Ask again.' : 'Definition undeclared again. Ask again.') + '</div>';
		});

		render('a');
	}
	if (document.readyState !== 'loading') { init(); }
	else { document.addEventListener('DOMContentLoaded', init); }
})();

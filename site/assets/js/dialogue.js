(function () {
	function initOne(root) {
		var dataEl = root.querySelector('script[type="application/json"]');
		var stage = root.querySelector('[data-stage]');
		var btn = root.querySelector('[data-advance]');
		if (!dataEl || !stage || !btn) { return; }

		var lines;
		try { lines = JSON.parse(dataEl.textContent).lines; } catch (e) { return; }
		var i = 0;

		function addBubble(line) {
			var row = document.createElement('div');
			row.className = 'phv-dlg-row phv-dlg-' + line.who;
			var av = document.createElement('span');
			av.className = 'phv-dlg-avatar';
			av.textContent = line.tag;
			var b = document.createElement('div');
			b.className = 'phv-dlg-bubble';
			var name = document.createElement('span');
			name.className = 'phv-dlg-name';
			name.textContent = line.name;
			var txt = document.createElement('span');
			txt.textContent = line.text;
			b.appendChild(name);
			b.appendChild(txt);
			row.appendChild(av);
			row.appendChild(b);
			stage.appendChild(row);
			stage.scrollTop = stage.scrollHeight;
		}

		btn.addEventListener('click', function () {
			if (i < lines.length) {
				addBubble(lines[i]);
				i++;
				if (i === lines.length) { btn.textContent = 'Replay'; }
			} else {
				stage.innerHTML = '';
				i = 0;
				btn.textContent = 'Tap to continue';
				addBubble(lines[i]); i++;
			}
		});

		addBubble(lines[i]); i++;
	}

	function init() {
		var all = document.querySelectorAll('[data-phv-dialogue]');
		Array.prototype.forEach.call(all, initOne);
	}
	if (document.readyState !== 'loading') { init(); }
	else { document.addEventListener('DOMContentLoaded', init); }
})();

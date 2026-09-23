(function () {
  document.querySelectorAll('[data-content-filter]').forEach(function (root) {
    const select = root.querySelector('[data-kind-filter]');
    if (!select) return;
    const cards = [...root.querySelectorAll('[data-content-item]')];
    const allowed = [...select.options].map(option => option.value);
    function render(fromURL) {
      const url = new URL(location.href);
      const requested = fromURL ? url.searchParams.get('kind') || 'all' : select.value;
      const kind = allowed.includes(requested) ? requested : 'all';
      select.value = kind;
      let count = 0;
      cards.forEach(card => { card.hidden = kind !== 'all' && card.dataset.kind !== kind; if (!card.hidden) count++; });
      root.querySelectorAll('[data-content-group]').forEach(group => { group.hidden = ![...group.querySelectorAll('[data-content-item]')].some(card => !card.hidden); });
      root.querySelector('[data-count]').textContent = count + (count === 1 ? ' item' : ' items');
      root.querySelector('[data-empty]').hidden = count !== 0;
      if (!fromURL) {
        if (kind === 'all') url.searchParams.delete('kind'); else url.searchParams.set('kind', kind);
        history.pushState(null, '', url);
      }
    }
    root.querySelector('[data-filter-controls]').hidden = false;
    select.addEventListener('change', () => render(false));
    addEventListener('popstate', () => render(true));
    render(true);
  });
})();

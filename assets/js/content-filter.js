(function () {
  document.querySelectorAll('[data-content-filter]').forEach(function (root) {
    const select = root.querySelector('[data-kind-filter], [data-year-filter]');
    if (!select) return;
    const byYear = select.hasAttribute('data-year-filter');
    const parameter = byYear ? 'year' : 'kind';
    const cards = [...root.querySelectorAll('[data-content-item]')];
    const allowed = [...select.options].map(option => option.value);
    function render(fromURL) {
      const url = new URL(location.href);
      const requested = fromURL ? url.searchParams.get(parameter) || 'all' : select.value;
      const value = allowed.includes(requested) ? requested : 'all';
      select.value = value;
      let count = 0;
      cards.forEach(card => {
        const matches = byYear ? (card.dataset.years || '').split(',').includes(value) : card.dataset.kind === value;
        card.hidden = value !== 'all' && !matches;
        if (!card.hidden) count++;
      });
      root.querySelectorAll('[data-content-group]').forEach(group => { group.hidden = ![...group.querySelectorAll('[data-content-item]')].some(card => !card.hidden); });
      root.querySelector('[data-count]').textContent = byYear
        ? count + ' of ' + cards.length + ' projects' + (value === 'all' ? '' : ' · ' + value)
        : count + (count === 1 ? ' item' : ' items');
      root.querySelector('[data-empty]').hidden = count !== 0;
      if (!fromURL) {
        if (value === 'all') url.searchParams.delete(parameter); else url.searchParams.set(parameter, value);
        if (url.href !== location.href) history.pushState(null, '', url);
      }
    }
    root.querySelector('[data-filter-controls]').hidden = false;
    select.addEventListener('change', () => render(false));
    addEventListener('popstate', () => render(true));
    render(true);
  });
})();

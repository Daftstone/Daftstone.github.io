(() => {
  'use strict';
  const tools = document.querySelector('.publication-tools');
  const list = document.getElementById('publication-list');
  if (!tools || !list) return;
  const papers = Array.from(list.querySelectorAll('.publication'));
  const filters = Array.from(document.querySelectorAll('[data-filter]'));
  const search = document.getElementById('publication-search');
  const more = document.querySelector('.show-publications');
  const status = document.getElementById('publication-count');
  const empty = document.querySelector('.empty-state');
  const initialLimit = 6;
  let activeTopic = 'all';
  let expanded = false;

  // Anchors still open the image directly when JavaScript or <dialog> is unavailable.
  const dialog = document.querySelector('.figure-dialog');
  if (dialog && typeof dialog.showModal === 'function') {
    const image = dialog.querySelector('img');
    const title = document.getElementById('figure-dialog-title');
    const caption = document.getElementById('figure-dialog-caption');
    const kind = document.getElementById('figure-dialog-type');
    const source = dialog.querySelector('.figure-dialog-source');
    let trigger = null;
    document.querySelectorAll('.publication-figure').forEach(link => {
      link.setAttribute('aria-haspopup', 'dialog');
      link.addEventListener('click', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
        event.preventDefault();
        trigger = link;
        title.textContent = link.dataset.figureTitle;
        caption.textContent = link.dataset.figureCaption;
        kind.textContent = link.dataset.figureType === 'concept' ? 'Concept sketch · editorial illustration' : 'Original paper figure';
        image.src = link.href;
        image.alt = link.dataset.figureCaption;
        source.href = link.dataset.figureSource;
        dialog.showModal();
        document.body.classList.add('figure-open');
      });
    });
    dialog.querySelector('.figure-dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      document.body.classList.remove('figure-open');
      if (trigger) trigger.focus({ preventScroll: true });
    });
  }

  function render() {
    const query = search.value.trim().toLocaleLowerCase();
    const matching = papers.filter(paper =>
      (activeTopic === 'all' || paper.dataset.topics.split(' ').includes(activeTopic)) &&
      paper.textContent.toLocaleLowerCase().includes(query));
    const limited = activeTopic === 'all' && !query;
    const shown = new Set(limited && !expanded ? matching.slice(0, initialLimit) : matching);
    papers.forEach(paper => { paper.hidden = !shown.has(paper); });
    filters.forEach(button => {
      const selected = button.dataset.filter === activeTopic;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    more.hidden = !limited || matching.length <= initialLimit;
    more.setAttribute('aria-expanded', String(expanded));
    more.textContent = expanded ? 'Show recent publications ↑' : `Show all ${papers.length} publications ↓`;
    empty.hidden = matching.length !== 0;
    status.textContent = `Showing ${shown.size} of ${matching.length} matching publications.`;
  }
  filters.forEach(button => button.addEventListener('click', () => { activeTopic = button.dataset.filter; render(); }));
  document.querySelectorAll('[data-research-topic]').forEach(link => link.addEventListener('click', () => {
    activeTopic = link.dataset.researchTopic;
    search.value = '';
    render();
  }));
  search.addEventListener('input', render);
  more.addEventListener('click', () => {
    expanded = !expanded;
    render();
    if (!expanded) document.getElementById('publications').scrollIntoView({ block: 'start' });
  });
  render();
  tools.hidden = false;
})();

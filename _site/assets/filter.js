document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[data-category]');
    if (!sections.length) return;

    const container = document.getElementById('filter-pills');
    if (!container) return;

    const createPill = (label, active) => {
        const btn = document.createElement('button');
        btn.className = 'filter-pill' + (active ? ' active' : '');
        btn.textContent = label;
        btn.addEventListener('click', () => {
            container.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            sections.forEach(s => {
                s.style.display = (label === 'Tout' || s.dataset.category === label) ? '' : 'none';
            });
        });
        return btn;
    };

    container.appendChild(createPill('Tout', true));
    Array.from(sections).forEach(s => {
        container.appendChild(createPill(s.dataset.category, false));
    });
});

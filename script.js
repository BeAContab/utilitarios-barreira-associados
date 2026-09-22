function pad(n) {
  return String(n).padStart(2, "0");
}

function arrowIcon() {
  return '<svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6h8M6.5 2.5 10 6l-3.5 3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

function renderList(items, targetId, actionLabel, listClass) {
  const list = document.getElementById(targetId);
  list.classList.add(listClass);
  items.forEach((item, i) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "ledger-row";
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.style.animationDelay = (i * 60) + "ms";
    a.innerHTML =
      '<span class="row-top">' +
        '<span class="row-index">' + pad(i + 1) + '</span>' +
        '<span class="row-name">' + item.name + '</span>' +
        '<span class="row-go">' + actionLabel + arrowIcon() + '</span>' +
      '</span>' +
      '<span class="row-desc">' + item.desc + '</span>';
    li.appendChild(a);
    list.appendChild(li);
  });
}

renderList(TOOLS, "list-tools", "abrir", "tools-list");
renderList(DOWNLOADS, "list-downloads", "baixar", "downloads-list");

/* Small util */
const $ = (q, ctx = document) => ctx.querySelector(q);
const $$ = (q, ctx = document) => Array.from(ctx.querySelectorAll(q));

/* Fetch data with offline-friendly fallback */
async function loadData() {
  try {
    const res = await fetch("data/portfolio.json");
    if (!res.ok) throw new Error("HTTP " + res.status);
    return await res.json();
  } catch (err) {
    // Fallback minimal if browser blocks file:// fetch
    console.warn("Fallback data used because JSON fetch failed. Error:", err);
    return {
      years: [
        {
          year: 2025,
          items: [
            {
              id: "mexec-01",
              city: "Jakarta",
              year: 2025,
              title: "Modern Executive Office",
              duration: "6 minggu",
              tags: ["Modern", "Executive", "Ergonomis"],
              image: "image/project1.jpg",
              desc: "Desain ruang kantor modern dengan furniture ergonomis dan konsep open space yang nyaman untuk produktivitas tim.",
            },
            {
              id: "mexec-02",
              city: "Jakarta",
              year: 2025,
              title: "Pavilion Workspace",
              duration: "8 minggu",
              tags: ["Kayu", "Terbuka", "Tropis"],
              image: "image/project2.jpg",
              desc: "Ruang kerja semi-outdoor dengan banyak bukaan untuk pencahayaan alami dan sirkulasi udara.",
            },
            {
              id: "mexec-03",
              city: "Jakarta",
              year: 2025,
              title: "Private Executive Suite",
              duration: "5 minggu",
              tags: ["Premium", "Hangat", "Executive"],
              image: "image/project3.jpg",
              desc: "Suite eksekutif dengan material premium dan tata ruang privat namun tetap fungsional.",
            },
          ],
        },
        {
          year: 2024,
          items: [
            {
              id: "mod-2024-01",
              city: "Bandung",
              year: 2024,
              title: "Collaborative Hub",
              duration: "7 minggu",
              tags: ["Kolaboratif", "Terang", "Modular"],
              image: "image/project4.jpg",
              desc: "Zona kolaborasi dengan modul fleksibel, fokus pada sirkulasi yang efisien dan titik diskusi kecil.",
            },
            {
              id: "mod-2024-02",
              city: "Jakarta",
              year: 2024,
              title: "Executive Lounge",
              duration: "4 minggu",
              tags: ["Executive", "Hangat"],
              image: "image/project5.jpg",
              desc: "Lounge privat dengan material kayu hangat dan pencahayaan ambient yang menenangkan.",
            },
            {
              id: "mod-2024-03",
              city: "Jakarta",
              year: 2024,
              title: "Modern Executive Office",
              duration: "6 minggu",
              tags: ["Modern", "Executive", "Ergonomis"],
              image: "image/project6.jpg",
              desc: "Desain ruang kantor modern dengan furniture ergonomis dan konsep open space yang nyaman untuk produktivitas tim.",
            },
          ],
        },
        {
          year: 2023,
          items: [
            {
              id: "classic-2023-01",
              city: "Jakarta",
              year: 2023,
              title: "Classic Open Office",
              duration: "5 minggu",
              tags: ["Classic", "Open Space"],
              image: "image/project7.jpg",
              desc: "Open office klasik yang dioptimalkan ulang dengan jalur sirkulasi lebih jelas.",
            },
            {
              id: "classic-2023-02",
              city: "Yogyakarta",
              year: 2023,
              title: "Focus Booth Row",
              duration: "3 minggu",
              tags: ["Focus", "Akustik"],
              image: "image/project8.jpg",
              desc: "Deret booth fokus untuk panggilan penting dan pekerjaan mendalam.",
            },
            {
              id: "classic-2023-04",
              city: "Jakarta",
              year: 2023,
              title: "Executive Boardroom Redesign",
              duration: "4 minggu",
              tags: ["Executive", "Meeting", "Redesign"],
              image: "image/project9.jpg",
              desc: "Redesain ruang rapat eksekutif dengan tata cahaya baru dan panel akustik premium untuk pengalaman pertemuan yang lebih profesional.",
            },
          ],
        },
      ],
    };
  }
}

/* Templates */
function metaIcon(name) {
  return (window.ICONS && window.ICONS[name]) || "";
}

function renderCard(item) {
  const tags = (item.tags || [])
    .map((t) => `<span class="pill">${t}</span>`)
    .join("");
  return `<article class="card" aria-label="${item.title}">
    <div class="card-media">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="meta">
        <span class="chip">${metaIcon("location")} ${item.city}</span>
        <span class="chip">${metaIcon("calendar")} ${item.year}</span>
      </div>
    </div>
    <h3>${item.title}</h3>
    <p>${item.desc}</p>
    <div class="chips">${tags}</div>
    <div class="card-foot">
      <span class="muted">Durasi: ${item.duration}</span>
      <a href="detail.html?id=${encodeURIComponent(
        item.id
      )}" aria-label="Lihat detail ${
    item.title
  }">Lihat Detail <span class="arrow">→</span></a>
    </div>
  </article>`;
}

function sectionSkeleton(id, title, expanded) {
  const cid = id + "-content";
  return `<div class="section-head">
    <h2 id="${id}-title">${title}</h2>
    <button class="toggle-btn" data-target="${cid}" aria-controls="${cid}" aria-expanded="${
    expanded ? "true" : "false"
  }">
      <span class="label">${expanded ? "Collapse" : "Expand"}</span>
      <span class="toggle-icon" aria-hidden="true" style="transform: rotate(${
        expanded ? 0 : -90
      }deg)">▼</span>
    </button>
  </div>
  <div id="${cid}" class="panel" style="max-height:${
    expanded ? "2000px" : "0"
  }; opacity:${expanded ? 1 : 0}">
    <div class="grid"></div>
  </div>`;
}

function mountSection(container, id, title, items, expanded) {
  container.innerHTML = sectionSkeleton(id, title, expanded);
  const panel = $("#" + id + "-content", container);
  const grid = $(".grid", panel);
  if (items.length === 0) {
    grid.innerHTML = `<p class="muted">Belum ada portofolio pada tahun ini.</p>`;
  } else {
    grid.innerHTML = items.map(renderCard).join("");
  }
  // toggle
  const btn = $(".toggle-btn", container);
  btn.addEventListener("click", () => toggleSection(btn));
}

function toggleSection(btn) {
  const target = $("#" + btn.getAttribute("data-target"));
  const expanded = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", String(!expanded));
  $(".label", btn).textContent = !expanded ? "Collapse" : "Expand";
  $(".toggle-icon", btn).style.transform = `rotate(${!expanded ? 0 : -90}deg)`;

  // smooth max-height & opacity
  if (!expanded) {
    target.style.maxHeight = target.scrollHeight + "px";
    target.style.opacity = 1;
  } else {
    target.style.maxHeight = "0";
    target.style.opacity = 0;
  }
}

/* Year picker */
function renderYearPicker(years) {
  const btn = $("#yearBtn");
  const pop = $("#yearPopover");
  const list = $("#yearList");

  // unique years in descending order
  const yearNums = Array.from(new Set(years.map((y) => y.year))).sort(
    (a, b) => b - a
  );

  list.innerHTML = yearNums
    .map((y) => `<li role="menuitem" data-year="${y}">${y}</li>`)
    .join("");

  btn.addEventListener("click", () => {
    const open = pop.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", (e) => {
    if (!pop.contains(e.target) && e.target !== btn) {
      pop.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });

  list.addEventListener("click", (e) => {
    const li = e.target.closest("li[data-year]");
    if (!li) return;
    const y = Number(li.dataset.year);
    pop.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    addDynamicYearSection(y);

    // Scroll to the new section
    setTimeout(() => {
      const section = document.getElementById(`year-${y}`);
      section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  });
}

/* Dynamic year section */
function addDynamicYearSection(year) {
  const mountId = `year-${year}`;
  let sec = document.getElementById(mountId);

  // If section already exists, just scroll to it
  if (sec) {
    sec.scrollIntoView({ behavior: "smooth" });
    return;
  }

  // Create new section
  sec = document.createElement("section");
  sec.className = "section";
  sec.id = mountId;

  // Insert before "See another" section
  const seeAnother = $(".see-another");
  $("#main").insertBefore(sec, seeAnother);

  const dataForYear = (window.__PORTFOLIO_DATA.years || []).find(
    (y) => y.year === year
  );
  const items = dataForYear ? dataForYear.items : [];
  mountSection(sec, mountId, `${year}`, items, true);
}

/* Newsletter */
function setupNewsletter() {
  const input = $("#newsletterEmail");
  const btn = $("#subscribeBtn");
  const msg = $("#newsletterMsg");

  btn.addEventListener("click", () => {
    const v = (input.value || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      msg.textContent = "Mohon masukkan email yang valid.";
      msg.style.color = "#ef4444";
    } else {
      msg.textContent = "Terima kasih! Anda sudah terdaftar.";
      msg.style.color = "#10b981";
      input.value = "";
    }
  });
}

/* Mobile Menu */
function setupMobileMenu() {
  const burger = $("#burger");
  const menu = $(".menu");

  burger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

/* Boot */
(async function init() {
  const data = await loadData();
  window.__PORTFOLIO_DATA = data;

  // Sort years from newest to oldest
  const sorted = [...data.years].sort((a, b) => b.year - a.year);
  const thisY = sorted[0];
  const lastY = sorted[1] || { year: thisY.year - 1, items: [] };

  // This year (expanded)
  mountSection(
    $("#this-year"),
    "this-year-sec",
    "This year",
    thisY.items || [],
    true
  );

  // Last year (collapsed)
  mountSection(
    $("#last-year"),
    "last-year-sec",
    "Last year",
    lastY.items || [],
    false
  );

  // Year picker
  renderYearPicker(sorted);

  // Newsletter
  setupNewsletter();

  // Mobile menu
  setupMobileMenu();

  // Add animation class to cards after a brief delay
  setTimeout(() => {
    $$(".card").forEach((card) => {
      card.classList.add("animated");
    });
  }, 300);
})();

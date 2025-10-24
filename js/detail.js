// Get URL parameter
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Load portfolio data
async function loadPortfolioData() {
  try {
    const res = await fetch("data/portfolio.json");
    if (!res.ok) throw new Error("HTTP " + res.status);
    return await res.json();
  } catch (err) {
    console.warn("Using fallback data:", err);
    return getFallbackData();
  }
}

// Fallback data
function getFallbackData() {
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
            date: "15 - 16 Januari 2025",
            tags: ["Modern", "Executive", "Ergonomis"],
            image: "image/project1.jpg",
            images: ["image/project1.jpg", "image/project2.jpg"],
            desc: "Desain ruang kantor modern dengan furniture ergonomis dan konsep open space.",
            fullDesc:
              "Desain Ruang Kantor Modern dengan Sentuhan Ergonomis & Konsep Open Space",
            longDesc:
              "Ruang kantor modern dirancang untuk menciptakan lingkungan kerja yang dinamis, kolaboratif, dan nyaman. Dengan mengusung konsep open space, area kerja menjadi lebih terbuka dan minim sekat, memungkinkan interaksi antar anggota tim berjalan lebih lancar serta mendorong terciptanya ide-ide inovatif. Furniture ergonomis menjadi elemen penting dalam desain ini — mulai dari kursi kerja yang mendukung postur tubuh, meja dengan tinggi yang dapat disesuaikan (adjustable), hingga pencahayaan alami yang maksimal.",
            features: [
              "Area fokus: Sudut tenang bagi individu yang butuh konsentrasi tinggi.",
              "Ruang diskusi terbuka: Dilengkapi dengan papan tulis, sofa santai, dan coffee table untuk brainstorming.",
              "Zona hijau indoor: Tanaman dalam ruangan untuk meningkatkan kualitas udara.",
              "Pantry modern: Tempat bersantai sejenak dengan fasilitas kopi dan snack.",
            ],
            highlights: [
              "Pencahayaan alami maksimal untuk produktivitas optimal",
              "Furniture premium dengan standar ergonomis internasional",
              "Material ramah lingkungan dan berkelanjutan",
              "Sistem ventilasi dan AC yang efisien",
            ],
            closing:
              "Dengan perpaduan desain fungsional dan estetika minimalis, kantor ini tidak hanya menjadi tempat bekerja, tetapi juga ruang yang mendukung kreativitas, kolaborasi, dan kesejahteraan seluruh tim.",
          },
          {
            id: "mexec-02",
            city: "Jakarta",
            year: 2025,
            title: "Pavilion Workspace",
            duration: "8 minggu",
            date: "20 - 22 Februari 2025",
            tags: ["Kayu", "Terbuka", "Tropis"],
            image: "image/project2.jpg",
            images: ["image/project2.jpg", "image/project3.jpg"],
            desc: "Ruang kerja semi-outdoor dengan banyak bukaan untuk pencahayaan alami.",
            fullDesc: "Pavilion Workspace dengan Konsep Tropis Modern",
            longDesc:
              "Pavilion Workspace menghadirkan konsep ruang kerja yang menyatu dengan alam. Dengan desain semi-outdoor dan material kayu alami, workspace ini memberikan pengalaman bekerja yang berbeda dan menyegarkan. Konsep tropis modern ini memadukan kenyamanan ruang ber-AC dengan kesegaran udara alami.",
            features: [
              "Bukaan lebar untuk pencahayaan dan sirkulasi udara optimal",
              "Material kayu berkualitas dengan finishing natural",
              "Area hijau terintegrasi dengan workspace",
              "Desain fleksibel untuk berbagai kebutuhan kerja",
            ],
            highlights: [
              "Konsep biophilic design yang menyehatkan",
              "Hemat energi dengan pencahayaan alami",
              "Suasana kerja yang fresh dan inspiring",
              "Cocok untuk tim kreatif dan startup",
            ],
            closing:
              "Pavilion Workspace cocok untuk tim kreatif yang menginginkan suasana kerja yang fresh, inspiring, dan dekat dengan alam.",
          },
          {
            id: "mexec-03",
            city: "Jakarta",
            year: 2025,
            title: "Private Executive Suite",
            duration: "5 minggu",
            date: "10 - 12 Maret 2025",
            tags: ["Premium", "Hangat", "Executive"],
            image: "image/project3.jpg",
            images: ["image/project3.jpg", "image/project4.jpg"],
            desc: "Suite eksekutif dengan material premium dan tata ruang privat namun tetap fungsional.",
            fullDesc:
              "Private Executive Suite - Ruang Eksklusif untuk Pimpinan",
            longDesc:
              "Private Executive Suite dirancang khusus untuk para eksekutif yang membutuhkan ruang kerja privat dengan standar premium. Setiap detail dipikirkan untuk menciptakan atmosfer profesional namun tetap hangat dan welcoming. Ruang ini menggabungkan fungsi kerja, meeting, dan relaksasi dalam satu suite yang terintegrasi.",
            features: [
              "Material premium dengan finishing berkelas tinggi",
              "Tata ruang privat dengan area meeting tertutup",
              "Sistem pencahayaan dapat disesuaikan sesuai mood",
              "Storage terintegrasi untuk dokumen penting",
            ],
            highlights: [
              "Privasi maksimal untuk confidential meeting",
              "Akustik ruangan yang sempurna",
              "Furniture custom-made sesuai kebutuhan",
              "Teknologi smart office terintegrasi",
            ],
            closing:
              "Suite ini menawarkan privasi maksimal tanpa mengorbankan fungsionalitas dan kenyamanan, mencerminkan status dan profesionalisme eksekutif modern.",
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
            date: "15 - 17 April 2024",
            tags: ["Kolaboratif", "Terang", "Modular"],
            image: "image/project4.jpg",
            images: ["image/project4.jpg", "image/project5.jpg"],
            desc: "Zona kolaborasi dengan modul fleksibel untuk efisiensi kerja tim.",
            fullDesc: "Collaborative Hub - Ruang Kerja Kolaboratif Modern",
            longDesc:
              "Collaborative Hub adalah solusi workspace modern yang mendukung berbagai model kerja kolaboratif. Dengan sistem modular yang fleksibel, ruang ini dapat disesuaikan untuk berbagai kebutuhan meeting dan diskusi tim. Desain ini mengoptimalkan interaksi tim sambil tetap menyediakan area fokus individual.",
            features: [
              "Modul furniture yang dapat dipindah dan disesuaikan",
              "Area diskusi dengan berbagai ukuran",
              "Teknologi presentasi terintegrasi",
              "Pencahayaan optimal untuk produktivitas",
            ],
            highlights: [
              "Fleksibilitas tinggi untuk berbagai aktivitas",
              "Mendukung agile working methodology",
              "Sistem booking ruang yang mudah",
              "Warna-warna cerah yang energizing",
            ],
            closing:
              "Hub ini ideal untuk perusahaan yang mengutamakan kolaborasi dan fleksibilitas dalam bekerja.",
          },
          {
            id: "mod-2024-02",
            city: "Jakarta",
            year: 2024,
            title: "Executive Lounge",
            duration: "4 minggu",
            date: "5 - 7 Mei 2024",
            tags: ["Executive", "Hangat"],
            image: "image/project5.jpg",
            images: ["image/project5.jpg", "image/project6.jpg"],
            desc: "Lounge privat dengan material kayu hangat dan pencahayaan ambient.",
            fullDesc: "Executive Lounge - Area Istirahat Premium",
            longDesc:
              "Executive Lounge dirancang sebagai area istirahat dan informal meeting untuk para eksekutif. Atmosfer hangat dan nyaman diciptakan melalui pemilihan material kayu natural dan pencahayaan ambient yang dapat disesuaikan. Ruang ini menjadi perfect balance antara profesionalisme dan kenyamanan.",
            features: [
              "Material kayu dengan tone hangat",
              "Pencahayaan ambient yang dapat diatur",
              "Furniture lounge berkualitas premium",
              "Area refreshment terintegrasi",
            ],
            highlights: [
              "Atmosfer cozy namun tetap profesional",
              "Ideal untuk informal business discussion",
              "Soundproofing untuk privasi percakapan",
              "Mini bar dan coffee station premium",
            ],
            closing:
              "Lounge ini menjadi tempat sempurna untuk break time atau informal discussion yang produktif.",
          },
          {
            id: "mod-2024-03",
            city: "Jakarta",
            year: 2024,
            title: "Modern Executive Office",
            duration: "6 minggu",
            date: "12 - 14 Juni 2024",
            tags: ["Modern", "Executive", "Ergonomis"],
            image: "image/project6.jpg",
            images: ["image/project6.jpg", "image/project7.jpg"],
            desc: "Desain ruang kantor modern dengan furniture ergonomis.",
            fullDesc: "Modern Executive Office - Workspace Kontemporer",
            longDesc:
              "Kantor eksekutif modern yang menggabungkan estetika kontemporer dengan fungsi optimal. Setiap elemen dirancang untuk mendukung produktivitas dan kenyamanan kerja. Layout yang efisien memaksimalkan penggunaan ruang tanpa terasa sempit.",
            features: [
              "Desain kontemporer dengan garis clean",
              "Furniture ergonomis berkualitas tinggi",
              "Sistem storage yang efisien",
              "Integrasi teknologi workspace modern",
            ],
            highlights: [
              "Estetika minimalis yang timeless",
              "Cable management yang rapi",
              "Smart lighting system",
              "Adaptable untuk future needs",
            ],
            closing:
              "Office ini mencerminkan profesionalisme dan modernitas perusahaan dengan desain yang akan tetap relevan untuk tahun-tahun mendatang.",
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
            date: "8 - 10 Maret 2023",
            tags: ["Classic", "Open Space"],
            image: "image/project7.jpg",
            images: ["image/project7.jpg", "image/project8.jpg"],
            desc: "Open office klasik yang dioptimalkan dengan sirkulasi lebih jelas.",
            fullDesc: "Classic Open Office - Desain Timeless",
            longDesc:
              "Open office klasik yang dioptimalkan ulang dengan jalur sirkulasi lebih jelas. Mempertahankan elemen klasik yang elegant sambil meningkatkan fungsi dan efisiensi ruang. Layout yang terencana memastikan privasi visual tetap terjaga meski dalam konsep open.",
            features: [
              "Layout yang optimized untuk traffic flow",
              "Partisi rendah untuk privasi visual",
              "Area meeting informal tersebar",
              "Storage personal yang cukup",
            ],
            highlights: [
              "Desain klasik yang tidak lekang waktu",
              "Balance antara kolaborasi dan fokus",
              "Material berkualitas tinggi",
              "Maintenance yang mudah",
            ],
            closing:
              "Desain klasik yang proven effective dan tetap relevan untuk berbagai jenis industri.",
          },
          {
            id: "classic-2023-02",
            city: "Yogyakarta",
            year: 2023,
            title: "Focus Booth Row",
            duration: "3 minggu",
            date: "20 - 22 Mei 2023",
            tags: ["Focus", "Akustik"],
            image: "image/project8.jpg",
            images: ["image/project8.jpg", "image/project9.jpg"],
            desc: "Deret booth fokus untuk panggilan penting dan deep work.",
            fullDesc: "Focus Booth Row - Solusi Privasi di Open Office",
            longDesc:
              "Deret booth fokus untuk panggilan penting dan pekerjaan mendalam. Dilengkapi dengan panel akustik premium yang meredam suara hingga 90%, booth ini menjadi solusi privasi di tengah open office. Ventilasi yang baik memastikan kenyamanan meski digunakan dalam waktu lama.",
            features: [
              "Panel akustik premium",
              "Ventilasi dan pencahayaan optimal",
              "Power outlet dan USB charging",
              "Meja dan kursi ergonomis",
            ],
            highlights: [
              "Noise reduction hingga 90%",
              "Cocok untuk video conference",
              "Quick booking system",
              "Compact namun comfortable",
            ],
            closing:
              "Solusi praktis untuk kebutuhan privasi dan fokus di lingkungan open office yang dinamis.",
          },
          {
            id: "classic-2023-04",
            city: "Jakarta",
            year: 2023,
            title: "Executive Boardroom Redesign",
            duration: "4 minggu",
            date: "15 - 18 Juli 2023",
            tags: ["Executive", "Meeting", "Redesign"],
            image: "image/project9.jpg",
            images: ["image/project9.jpg", "image/project1.jpg"],
            desc: "Redesain ruang rapat eksekutif dengan panel akustik premium.",
            fullDesc: "Executive Boardroom - Redesign Premium",
            longDesc:
              "Redesain ruang rapat eksekutif dengan tata cahaya baru dan panel akustik premium untuk pengalaman pertemuan yang lebih profesional. Technology integration memudahkan presentasi dan video conference dengan klien internasional. Furniture custom-made mencerminkan status perusahaan.",
            features: [
              "Panel akustik tersembunyi di dinding",
              "Sistem AV terintegrasi dengan control panel",
              "Meja conference custom solid wood",
              "Kursi eksekutif ergonomis premium",
            ],
            highlights: [
              "Perfect for board meeting & presentation",
              "Video conference ready dengan 4K camera",
              "Wireless presentation system",
              "Impress clients dengan first impression",
            ],
            closing:
              "Boardroom ini tidak hanya functional tetapi juga statement piece yang mencerminkan excellence perusahaan.",
          },
        ],
      },
    ],
  };
}

// Find project by ID
function findProjectById(data, id) {
  for (const yearData of data.years) {
    const project = yearData.items.find((item) => item.id === id);
    if (project) return project;
  }
  return null;
}

// Get related projects
function getRelatedProjects(data, currentProject, limit = 3) {
  const allProjects = [];

  data.years.forEach((yearData) => {
    yearData.items.forEach((item) => {
      if (item.id !== currentProject.id) {
        allProjects.push(item);
      }
    });
  });

  const scoredProjects = allProjects.map((project) => {
    let score = 0;

    if (project.year === currentProject.year) score += 2;
    if (project.city === currentProject.city) score += 1;

    const matchingTags = project.tags.filter((tag) =>
      currentProject.tags.includes(tag)
    );
    score += matchingTags.length;

    return { project, score };
  });

  return scoredProjects
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.project);
}

// Render project details
function renderProjectDetails(project) {
  document.title = `${project.title} | béne`;

  // Hero section
  document.getElementById("hero-image").src = project.image;
  document.getElementById("hero-image").alt = project.title;
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("breadcrumb-title").textContent = project.title;

  // Meta info
  document.getElementById("project-date").textContent = project.date;
  document.getElementById("project-location").textContent = project.city;
  document.getElementById("project-duration").textContent = project.duration;
  document.getElementById("project-category").textContent =
    project.tags[0] || "Interior Design";

  // Sidebar info
  document.getElementById("info-date").textContent = project.date;
  document.getElementById("info-city").textContent = project.city;
  document.getElementById("info-duration").textContent = project.duration;
  document.getElementById("info-year").textContent = project.year;
  document.getElementById("info-category").textContent =
    project.tags[0] || "Interior Design";

  // Tags
  const tagsContainer = document.getElementById("project-tags");
  tagsContainer.innerHTML = project.tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");

  // Description
  document.getElementById("desc-title").textContent =
    project.fullDesc || project.title;
  document.getElementById("project-description").textContent =
    project.longDesc || project.desc;

  // Features
  document.getElementById("features-intro").textContent =
    "Untuk menambah keseimbangan antara fokus dan kolaborasi, ruang ini juga dilengkapi dengan:";

  const featuresList = document.getElementById("features-list");
  const features = project.features || [
    "Desain modern dan fungsional",
    "Material berkualitas tinggi",
    "Pencahayaan optimal",
    "Furniture ergonomis",
  ];
  featuresList.innerHTML = features.map((f) => `<li>${f}</li>`).join("");

  // Highlights
  const highlightsList = document.getElementById("highlights-list");
  const highlights = project.highlights || generateHighlights(project);
  highlightsList.innerHTML = highlights.map((h) => `<li>${h}</li>`).join("");

  // Closing statement
  document.getElementById("closing-text").textContent =
    project.closing ||
    "Proyek ini menunjukkan komitmen kami dalam menciptakan ruang yang tidak hanya indah, tetapi juga fungsional dan mendukung produktivitas.";

  // Image gallery
  renderImageGallery(project);
}

// Generate highlights
function generateHighlights(project) {
  const highlights = [
    `Proyek berlokasi di ${project.city} dengan konsep ${
      project.tags[0] || "modern"
    }`,
    `Selesai dalam waktu ${project.duration} dengan hasil maksimal`,
    `Menggunakan material berkualitas tinggi dan sustainable`,
  ];

  if (project.tags.includes("Modern")) {
    highlights.push("Desain modern dengan furniture ergonomis");
  }
  if (project.tags.includes("Executive")) {
    highlights.push("Dirancang khusus untuk ruang eksekutif premium");
  }
  if (project.tags.includes("Kolaboratif")) {
    highlights.push("Optimalisasi ruang untuk kolaborasi tim");
  }

  return highlights;
}

// Render image gallery
function renderImageGallery(project) {
  const gallery = document.getElementById("image-gallery");
  const images = project.images || [project.image, project.image];

  gallery.innerHTML = images
    .map(
      (img, index) => `
    <div class="gallery-image">
      <img src="${img}" alt="${project.title} - Image ${
        index + 1
      }" loading="lazy">
    </div>
  `
    )
    .join("");
}

// Render related projects
function renderRelatedProjects(projects) {
  const container = document.getElementById("related-projects");

  if (projects.length === 0) {
    container.innerHTML = `<p style="text-align:center; color: var(--muted); grid-column: 1/-1;">Tidak ada proyek serupa saat ini.</p>`;
    return;
  }

  container.innerHTML = projects
    .map(
      (project) => `
    <div class="related-card">
      <div class="related-card-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="related-card-content">
        <h3>${project.title}</h3>
        <div class="related-card-meta">
          <span><i class="fas fa-map-marker-alt"></i> ${project.city}</span>
          <span><i class="fas fa-calendar-alt"></i> ${project.year}</span>
        </div>
        <a href="detail.html?id=${encodeURIComponent(project.id)}">
          Lihat Detail <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `
    )
    .join("");
}

// Handle search
function handleSearch(event) {
  event.preventDefault();
  const searchInput = document.getElementById("searchInput");
  const searchQuery = searchInput.value.trim();

  if (searchQuery) {
    window.location.href = `product.html?search=${encodeURIComponent(
      searchQuery
    )}`;
  } else {
    alert("⚠️ Mohon masukkan kata kunci pencarian");
  }
  return false;
}

// Mobile menu
function setupMobileMenu() {
  const burger = document.getElementById("burger");
  const menu = document.querySelector(".menu");

  if (burger && menu) {
    burger.addEventListener("click", () => {
      menu.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (
        menu.classList.contains("show") &&
        !menu.contains(e.target) &&
        !burger.contains(e.target)
      ) {
        menu.classList.remove("show");
      }
    });
  }
}

// Newsletter
function setupNewsletter() {
  const btn = document.getElementById("subscribeBtn");
  const input = document.getElementById("newsletterEmail");
  const msg = document.getElementById("newsletterMsg");

  if (btn) {
    btn.addEventListener("click", () => {
      const email = input.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (email && emailRegex.test(email)) {
        msg.textContent = "✅ Terima kasih telah berlangganan!";
        msg.style.color = "#10b981";
        input.value = "";

        setTimeout(() => {
          msg.textContent = "";
        }, 3000);
      } else {
        msg.textContent = "⚠️ Email tidak valid";
        msg.style.color = "#ef4444";
      }
    });
  }
}

// Share functionality
function setupShareButtons() {
  const shareButtons = document.querySelectorAll(".share-btn");
  const currentUrl = window.location.href;
  const projectTitle = document.getElementById("project-title").textContent;

  shareButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const platform = btn.dataset.platform;
      let shareUrl = "";

      switch (platform) {
        case "facebook":
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            currentUrl
          )}`;
          break;
        case "twitter":
          shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            currentUrl
          )}&text=${encodeURIComponent(projectTitle)}`;
          break;
        case "linkedin":
          shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            currentUrl
          )}`;
          break;
        case "whatsapp":
          shareUrl = `https://wa.me/?text=${encodeURIComponent(
            projectTitle + " - " + currentUrl
          )}`;
          break;
      }

      if (shareUrl) {
        window.open(shareUrl, "_blank", "width=600,height=400");
      }
    });
  });
}

// Scroll to top
function setupScrollToTop() {
  const scrollBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Show error
function showError() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("error").style.display = "flex";
}

// Initialize
async function init() {
  const projectId = getUrlParameter("id");

  if (!projectId) {
    showError();
    return;
  }

  try {
    const data = await loadPortfolioData();
    const project = findProjectById(data, projectId);

    if (!project) {
      showError();
      return;
    }

    renderProjectDetails(project);

    const relatedProjects = getRelatedProjects(data, project);
    renderRelatedProjects(relatedProjects);

    // Show content
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.display = "block";

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Setup share buttons after content is loaded
    setTimeout(() => {
      setupShareButtons();
    }, 100);
  } catch (error) {
    console.error("Error loading project:", error);
    showError();
  }

  setupMobileMenu();
  setupNewsletter();
  setupScrollToTop();
}

// Run on page load
document.addEventListener("DOMContentLoaded", init);

// Virtual Tour Detail Page Interactions

document.addEventListener("DOMContentLoaded", function () {
  // Panorama Viewer
  const panoramaImage = document.getElementById("panoramaImage");
  const viewer = document.getElementById("panoramaViewer");
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let previousTranslate = 0;

  // Drag to rotate functionality
  panoramaImage.addEventListener("mousedown", startDrag);
  panoramaImage.addEventListener("touchstart", startDrag);
  panoramaImage.addEventListener("mousemove", drag);
  panoramaImage.addEventListener("touchmove", drag);
  panoramaImage.addEventListener("mouseup", endDrag);
  panoramaImage.addEventListener("mouseleave", endDrag);
  panoramaImage.addEventListener("touchend", endDrag);

  function startDrag(e) {
    isDragging = true;
    startX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    panoramaImage.style.cursor = "grabbing";
  }

  function drag(e) {
    if (!isDragging) return;

    e.preventDefault();
    const currentX = e.type.includes("mouse")
      ? e.clientX
      : e.touches[0].clientX;
    const diff = currentX - startX;
    currentTranslate = previousTranslate + diff;

    // Smooth rotation effect
    const rotation = currentTranslate * 0.1;
    panoramaImage.style.transform = `translateX(${rotation}px) scale(1.1)`;
  }

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    previousTranslate = currentTranslate;
    panoramaImage.style.cursor = "grab";
  }

  // Zoom Controls
  let zoomLevel = 1;
  const zoomInBtn = document.getElementById("zoomIn");
  const zoomOutBtn = document.getElementById("zoomOut");
  const fullscreenBtn = document.getElementById("fullscreen");

  zoomInBtn.addEventListener("click", () => {
    zoomLevel = Math.min(zoomLevel + 0.2, 2);
    updateZoom();
  });

  zoomOutBtn.addEventListener("click", () => {
    zoomLevel = Math.max(zoomLevel - 0.2, 0.8);
    updateZoom();
  });

  function updateZoom() {
    panoramaImage.style.transform = `scale(${zoomLevel})`;
  }

  // Fullscreen functionality
  fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      viewer.requestFullscreen().catch((err) => {
        console.log("Fullscreen error:", err);
      });
    } else {
      document.exitFullscreen();
    }
  });

  // Hotspot Interactions
  const hotspots = document.querySelectorAll(".hotspot");
  const modal = document.getElementById("infoModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeModal = document.getElementById("closeModal");

  const hotspotData = {
    sofa: {
      title: "Premium Sofa Set",
      description:
        "Luxurious 3-seater sofa with plush cushioning and durable upholstery. Features ergonomic design for maximum comfort and elegant aesthetics that complement the modern interior.",
    },
    wall: {
      title: "Decorative Wall Panel",
      description:
        "Custom-designed wall panel with vertical grooves creating depth and texture. Finished in sage green color that adds a sophisticated touch to the living space.",
    },
    table: {
      title: "Designer Coffee Table",
      description:
        "Contemporary coffee table with clean lines and minimalist design. Crafted from premium materials with a smooth finish, perfect for both functionality and visual appeal.",
    },
  };

  hotspots.forEach((hotspot) => {
    hotspot.addEventListener("click", () => {
      const infoType = hotspot.getAttribute("data-info");
      const data = hotspotData[infoType];

      modalTitle.textContent = data.title;
      modalDescription.textContent = data.description;
      modal.classList.add("active");
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  // View Selector
  const viewButtons = document.querySelectorAll(".view-btn");

  viewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      viewButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Simulate view change
      const view = button.getAttribute("data-view");
      changeView(view);
    });
  });

  function changeView(viewType) {
    // Simulate changing the panorama view
    panoramaImage.style.opacity = "0";

    setTimeout(() => {
      // Here you would load different panorama image based on viewType
      console.log("Switching to view:", viewType);
      panoramaImage.style.opacity = "1";

      // Reset transform
      currentTranslate = 0;
      previousTranslate = 0;
      panoramaImage.style.transform = "translateX(0) scale(1.1)";
    }, 300);
  }

  // CTA Buttons
  const btnPrimary = document.querySelector(".btn-primary");
  const btnSecondary = document.querySelector(".btn-secondary");

  btnPrimary.addEventListener("click", () => {
    alert(
      "Consultation request feature would be implemented here.\nThis would typically open a contact form or booking system."
    );
  });

  btnSecondary.addEventListener("click", () => {
    alert(
      "Brochure download feature would be implemented here.\nThis would typically trigger a PDF download."
    );
  });

  // Smooth scroll for better UX
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add loading animation
  window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    setTimeout(() => {
      document.body.style.transition = "opacity 0.5s ease";
      document.body.style.opacity = "1";
    }, 100);
  });
});
// Virtual Tour Detail Page Interactions

document.addEventListener("DOMContentLoaded", function () {
  // --- DYNAMIC CONTENT SETUP ---
  // 1. Ambil parameter room dari URL
  function getRoomType() {
    const params = new URLSearchParams(window.location.search);
    return params.get("room") || "livingroom";
  }

  // 2. Data konten per room
  const tourData = {
    livingroom: {
      title: "Modern Living Room",
      subtitle:
        "Experience our contemporary living room design with premium finishes and attention to detail",
      image:
        "https://via.placeholder.com/1200x600/e8e8e8/333333?text=360+Living+Room+View",
      features: [
        {
          icon: "rect",
          title: "Premium Materials",
          desc: "High-quality finishes and materials selected for durability and aesthetics",
        },
        {
          icon: "triangle",
          title: "Modern Design",
          desc: "Contemporary aesthetics with clean lines and sophisticated color palette",
        },
        {
          icon: "circle",
          title: "Attention to Detail",
          desc: "Every element carefully curated to create a cohesive and inviting space",
        },
        {
          icon: "hex",
          title: "Functional Layout",
          desc: "Optimized space planning for comfort and functionality",
        },
      ],
      specs: [
        { label: "Room Type", value: "Living Room" },
        { label: "Style", value: "Modern Contemporary" },
        { label: "Size", value: "4m × 5m" },
        { label: "Color Scheme", value: "Sage Green & Neutral Tones" },
        { label: "Flooring", value: "Premium Laminate" },
        { label: "Lighting", value: "LED Ambient & Accent" },
      ],
      hotspots: {
        sofa: {
          title: "Premium Sofa Set",
          description:
            "Luxurious 3-seater sofa with plush cushioning and durable upholstery. Features ergonomic design for maximum comfort and elegant aesthetics that complement the modern interior.",
        },
        wall: {
          title: "Decorative Wall Panel",
          description:
            "Custom-designed wall panel with vertical grooves creating depth and texture. Finished in sage green color that adds a sophisticated touch to the living space.",
        },
        table: {
          title: "Designer Coffee Table",
          description:
            "Contemporary coffee table with clean lines and minimalist design. Crafted from premium materials with a smooth finish, perfect for both functionality and visual appeal.",
        },
      },
    },
    executiveoffice: {
      title: "Executive Office",
      subtitle:
        "Explore our professional office space design with ergonomic layout, premium furniture, and exclusive details.",
      image:
        "https://via.placeholder.com/1200x600/e8e8e8/333333?text=360+Executive+Office+View",
      features: [
        {
          icon: "rect",
          title: "Ergonomic Furniture",
          desc: "Office chairs, desks, and accessories designed for health and comfort",
        },
        {
          icon: "triangle",
          title: "Executive Atmosphere",
          desc: "Sophisticated interior with premium finishes and exclusive decor",
        },
        {
          icon: "circle",
          title: "Smart Lighting",
          desc: "Integrated smart lighting system for productivity and ambience",
        },
        {
          icon: "hex",
          title: "Flexible Space",
          desc: "Modular layout for meetings, focus work, and collaborative sessions",
        },
      ],
      specs: [
        { label: "Room Type", value: "Executive Office" },
        { label: "Style", value: "Modern Executive" },
        { label: "Size", value: "5m × 7m" },
        { label: "Color Scheme", value: "Navy Blue & Walnut" },
        { label: "Flooring", value: "Engineered Wood" },
        { label: "Lighting", value: "Smart LED System" },
      ],
      hotspots: {
        desk: {
          title: "Executive Desk",
          description:
            "Premium wood executive desk with cable management and integrated smart accessories; designed for leadership space.",
        },
        chair: {
          title: "Ergonomic Office Chair",
          description:
            "High-quality adjustable chair with lumbar support, suitable for long working hours and executive comfort.",
        },
        shelf: {
          title: "Display Shelf",
          description:
            "Custom shelf unit for documents, awards, and decorative items. Combines functionality with style.",
        },
      },
    },
  };

  // 3. Pilih data sesuai room
  const roomType = getRoomType();
  const data = tourData[roomType] || tourData.livingroom;

  // --- SET KONTEN DINAMIS ---
  // Judul & subtitle
  document.querySelector(".tour-title").textContent = data.title;
  document.querySelector(".tour-subtitle").textContent = data.subtitle;

  // Panorama image
  document.getElementById(
    "panoramaImage"
  ).style.backgroundImage = `url("${data.image}")`;

  // Features
  const featuresHTML = data.features
    .map(
      (f) => `
        <div class="detail-card">
            <div class="detail-icon">
                <!-- SVG icon bisa diganti sesuai kebutuhan -->
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                </svg>
            </div>
            <h4>${f.title}</h4>
            <p>${f.desc}</p>
        </div>
    `
    )
    .join("");
  document.querySelector(".details-grid").innerHTML = featuresHTML;

  // Specs
  const specsHTML = data.specs
    .map(
      (s) => `
        <div class="spec-item">
            <span class="spec-label">${s.label}:</span>
            <span class="spec-value">${s.value}</span>
        </div>
    `
    )
    .join("");
  document.querySelector(".specs-grid").innerHTML = specsHTML;

  // Hotspots (replace with appropriate for each room)
  const panoramaImageDiv = document.getElementById("panoramaImage");
  panoramaImageDiv.innerHTML = "";
  if (roomType === "livingroom") {
    panoramaImageDiv.innerHTML = `
            <div class="hotspot" style="top: 40%; left: 30%" data-info="sofa">
                <div class="hotspot-dot"></div>
                <div class="hotspot-tooltip">Premium Sofa Set</div>
            </div>
            <div class="hotspot" style="top: 35%; left: 60%" data-info="wall">
                <div class="hotspot-dot"></div>
                <div class="hotspot-tooltip">Decorative Wall Panel</div>
            </div>
            <div class="hotspot" style="top: 50%; left: 45%" data-info="table">
                <div class="hotspot-dot"></div>
                <div class="hotspot-tooltip">Designer Coffee Table</div>
            </div>
        `;
  } else if (roomType === "executiveoffice") {
    panoramaImageDiv.innerHTML = `
            <div class="hotspot" style="top: 40%; left: 30%" data-info="desk">
                <div class="hotspot-dot"></div>
                <div class="hotspot-tooltip">Executive Desk</div>
            </div>
            <div class="hotspot" style="top: 35%; left: 60%" data-info="chair">
                <div class="hotspot-dot"></div>
                <div class="hotspot-tooltip">Ergonomic Office Chair</div>
            </div>
            <div class="hotspot" style="top: 50%; left: 45%" data-info="shelf">
                <div class="hotspot-dot"></div>
                <div class="hotspot-tooltip">Display Shelf</div>
            </div>
        `;
  }

  // Viewer hint
  panoramaImageDiv.insertAdjacentHTML(
    "beforeend",
    `
        <div class="viewer-hint">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <p>Drag to rotate • Click hotspots for details</p>
        </div>
    `
  );

  // --- INTERAKSI HOTSPOT ---
  const modal = document.getElementById("infoModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeModal = document.getElementById("closeModal");
  panoramaImageDiv.querySelectorAll(".hotspot").forEach((hotspot) => {
    hotspot.addEventListener("click", () => {
      const infoType = hotspot.getAttribute("data-info");
      const hData = data.hotspots[infoType];
      modalTitle.textContent = hData?.title || "";
      modalDescription.textContent = hData?.description || "";
      modal.classList.add("active");
    });
  });
  closeModal.addEventListener("click", () => modal.classList.remove("active"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });
});

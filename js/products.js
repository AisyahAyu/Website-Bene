// ==================== PRODUCTS DATA ====================
const productsData = [
  // MEJA
  {
    id: 1,
    name: "Meja Kerja Minimalis",
    price: "Rp 1.500.000,00",
    image: "image/meja-kerja.png",
    category: "meja",
    roomCategory: "officeroom",
    filter: "new",
    description: "Meja kerja dengan desain minimalis modern",
  },
  {
    id: 2,
    name: "Meja Belajar Anak",
    price: "Rp 800.000,00",
    image: "image/meja-belajar.png",
    category: "meja",
    roomCategory: "classroom",
    filter: "bestseller",
    description: "Meja belajar ergonomis untuk anak",
  },
  {
    id: 3,
    name: "Meja Komputer Gaming",
    price: "Rp 2.500.000,00",
    image: "image/meja-gamer.png",
    category: "meja",
    roomCategory: "bedroom",
    filter: "new",
    description: "Meja gaming dengan cable management",
  },
  {
    id: 4,
    name: "Meja Makan Keluarga",
    price: "Rp 3.500.000,00",
    image: "image/meja-makan.png",
    category: "meja",
    roomCategory: "kitchenroom",
    filter: "bestseller",
    description: "Meja makan untuk 6 orang",
  },

  // KURSI
  {
    id: 5,
    name: "Kursi Kantor Ergonomis",
    price: "Rp 500.000,00",
    image: "image/kursi-kantor.png",
    category: "kursi",
    roomCategory: "officeroom",
    filter: "new",
    description: "Kursi kantor dengan sandaran punggung ergonomis",
  },
  {
    id: 6,
    name: "Kursi Gaming Pro",
    price: "Rp 2.800.000,00",
    image: "image/kursi-gaming.png",
    category: "kursi",
    roomCategory: "bedroom",
    filter: "bestseller",
    description: "Kursi gaming dengan bantal leher dan lumbar",
  },
  {
    id: 7,
    name: "Kursi Makan Kayu Jati",
    price: "Rp 650.000,00",
    image: "image/kursi-makan.png",
    category: "kursi",
    roomCategory: "kitchenroom",
    filter: "new",
    description: "Kursi makan dari kayu jati berkualitas",
  },
  {
    id: 8,
    name: "Kursi Lipat Portable",
    price: "Rp 250.000,00",
    image: "image/kursi-lipat.png",
    category: "kursi",
    roomCategory: "livingroom",
    filter: "bestseller",
    description: "Kursi lipat praktis dan mudah disimpan",
  },
  {
    id: 9,
    name: "Kursi Santai Goyang",
    price: "Rp 1.200.000,00",
    image: "image/kursi-goyang.png",
    category: "kursi",
    roomCategory: "livingroom",
    filter: "new",
    description: "Kursi santai dengan mekanisme goyang",
  },

  // LEMARI
  {
    id: 10,
    name: "Lemari Pakaian 2 Pintu",
    price: "Rp 2.000.000,00",
    image: "image/lemari-2pintu.png",
    category: "lemari",
    roomCategory: "bedroom",
    filter: "bestseller",
    description: "Lemari pakaian dengan 2 pintu dan laci",
  },
  {
    id: 11,
    name: "Lemari Pakaian 3 Pintu",
    price: "Rp 3.200.000,00",
    image: "image/lemari-3pintu.png",
    category: "lemari",
    roomCategory: "bedroom",
    filter: "new",
    description: "Lemari besar dengan 3 pintu dan cermin",
  },
  {
    id: 12,
    name: "Lemari Sliding Modern",
    price: "Rp 4.500.000,00",
    image: "image/lemari-sliding.png",
    category: "lemari",
    roomCategory: "bedroom",
    filter: "bestseller",
    description: "Lemari dengan pintu sliding hemat tempat",
  },
  {
    id: 13,
    name: "Lemari Hias Minimalis",
    price: "Rp 1.800.000,00",
    image: "image/lemari-hias.png",
    category: "lemari",
    roomCategory: "livingroom",
    filter: "new",
    description: "Lemari pajangan dengan kaca",
  },

  // KASUR & SOFA
  {
    id: 14,
    name: "Kasur Spring Bed Queen",
    price: "Rp 900.000,00",
    image: "image/13.png",
    category: "kasur-sofa",
    roomCategory: "bedroom",
    filter: "bestseller",
    description: "Kasur spring bed ukuran queen 160x200",
  },
  {
    id: 15,
    name: "Kasur Busa Premium",
    price: "Rp 1.500.000,00",
    image: "image/14.png",
    category: "kasur-sofa",
    roomCategory: "bedroom",
    filter: "new",
    description: "Kasur busa dengan memory foam",
  },
  {
    id: 16,
    name: "Sofa L Minimalis",
    price: "Rp 1.800.000,00",
    image: "image/18.png",
    category: "kasur-sofa",
    roomCategory: "livingroom",
    filter: "bestseller",
    description: "Sofa L dengan desain minimalis modern",
  },
  {
    id: 17,
    name: "Sofa Bed Multifungsi",
    price: "Rp 2.500.000,00",
    image: "image/17.png",
    category: "kasur-sofa",
    roomCategory: "livingroom",
    filter: "new",
    description: "Sofa yang bisa diubah menjadi tempat tidur",
  },
  {
    id: 18,
    name: "Sofa 3 Dudukan Klasik",
    price: "Rp 3.500.000,00",
    image: "image/16.png",
    category: "kasur-sofa",
    roomCategory: "livingroom",
    filter: "bestseller",
    description: "Sofa klasik dengan bahan kulit sintetis",
  },
  {
    id: 19,
    name: "Kasur Lipat Praktis",
    price: "Rp 450.000,00",
    image: "image/15.png",
    category: "kasur-sofa",
    roomCategory: "bedroom",
    filter: "new",
    description: "Kasur lipat untuk tamu",
  },

  // RAK PENYIMPANAN
  {
    id: 20,
    name: "Rak Buku 5 Tingkat",
    price: "Rp 700.000,00",
    image: "image/19.png",
    category: "rak-penyimpanan",
    roomCategory: "classroom",
    filter: "bestseller",
    description: "Rak buku dengan 5 tingkat penyimpanan",
  },
  {
    id: 21,
    name: "Rak Sepatu 10 Pasang",
    price: "Rp 350.000,00",
    image: "image/20.png",
    category: "rak-sepatu",
    roomCategory: "bedroom",
    filter: "new",
    description: "Rak sepatu kapasitas 10 pasang",
  },
  {
    id: 22,
    name: "Rak Sepatu Sliding",
    price: "Rp 850.000,00",
    image: "image/21.png",
    category: "rak-sepatu",
    roomCategory: "bedroom",
    filter: "bestseller",
    description: "Rak sepatu dengan sistem sliding",
  },
  {
    id: 23,
    name: "Rak Sepatu Minimalis",
    price: "Rp 280.000,00",
    image: "image/22.png",
    category: "rak-sepatu",
    roomCategory: "bedroom",
    filter: "new",
    description: "Rak sepatu compact untuk 6 pasang",
  },
  {
    id: 24,
    name: "Rak Baju Gantung",
    price: "Rp 450.000,00",
    image: "image/23.png",
    category: "rak-baju",
    roomCategory: "bedroom",
    filter: "bestseller",
    description: "Rak gantungan baju dengan roda",
  },
  {
    id: 25,
    name: "Rak Baju Portable",
    price: "Rp 320.000,00",
    image: "image/24.png",
    category: "rak-baju",
    roomCategory: "bedroom",
    filter: "new",
    description: "Rak baju portable dengan cover",
  },
  {
    id: 26,
    name: "Rak Baju Standing",
    price: "Rp 580.000,00",
    image: "image/25.png",
    category: "rak-baju",
    roomCategory: "bedroom",
    filter: "bestseller",
    description: "Rak baju standing dengan rak sepatu",
  },
  {
    id: 27,
    name: "Rak Tas Dinding",
    price: "Rp 180.000,00",
    image: "image/26.png",
    category: "rak-tas",
    roomCategory: "bedroom",
    filter: "new",
    description: "Rak tas yang dipasang di dinding",
  },
  {
    id: 28,
    name: "Rak Tas Display",
    price: "Rp 650.000,00",
    image: "image/27.png",
    category: "rak-tas",
    roomCategory: "bedroom",
    filter: "bestseller",
    description: "Rak display untuk koleksi tas",
  },
  {
    id: 29,
    name: "Rak Tas Multifungsi",
    price: "Rp 420.000,00",
    image: "image/28.png",
    category: "rak-tas",
    roomCategory: "bedroom",
    filter: "new",
    description: "Rak tas dengan laci tambahan",
  },
  {
    id: 30,
    name: "Rak Dapur 4 Tingkat",
    price: "Rp 550.000,00",
    image: "image/29.png",
    category: "rak-penyimpanan",
    roomCategory: "kitchenroom",
    filter: "new",
    description: "Rak penyimpanan untuk dapur",
  },
  {
    id: 31,
    name: "Rak Handuk Kamar Mandi",
    price: "Rp 380.000,00",
    image: "image/rak-handuk.png",
    category: "rak-penyimpanan",
    roomCategory: "bathroom",
    filter: "new",
    description: "Rak handuk stainless steel anti karat",
  },
  {
    id: 32,
    name: "Lemari Penyimpanan Toilet",
    price: "Rp 890.000,00",
    image: "image/lemari-toilet.png",
    category: "lemari",
    roomCategory: "bathroom",
    filter: "bestseller",
    description: "Lemari penyimpanan untuk kamar mandi",
  },
];

// ==================== STATE MANAGEMENT ====================
let currentCategory = "all";
let currentRoomCategory = "all";
let currentFilter = "new";
let searchQuery = "";

// ==================== ROOM CATEGORIES DATA ====================
const roomCategories = {
  bedroom: { name: "Bedroom", icon: "fa-bed" },
  livingroom: { name: "Living Room", icon: "fa-couch" },
  kitchenroom: { name: "Kitchen", icon: "fa-utensils" },
  bathroom: { name: "Bathroom", icon: "fa-bath" },
  officeroom: { name: "Office", icon: "fa-briefcase" },
  classroom: { name: "Classroom", icon: "fa-chalkboard-teacher" },
};

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", function () {
  checkUrlSearchQuery();
  renderProducts();
  initializeCategoryCards();
  initializeSidebarCategories();
  initializeFilterButtons();
  initializeSearch();
  initializeNavbarSearch();
  initializeDropdowns();
  initializeFooterCategories();
  initializeMobileMenu();
  initializeRoomFilterButtons();
  updateActiveFiltersDisplay();
});

// ==================== SYNC ROOM FILTER BUTTON STATE ====================
function syncRoomFilterButtons(roomCategory) {
  const allRoomButtons = document.querySelectorAll("[data-room]");

  allRoomButtons.forEach((btn) => {
    const btnRoom = btn.getAttribute("data-room");

    if (btnRoom === roomCategory) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// ==================== CHECK URL PARAMETERS ====================
function checkUrlSearchQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlSearch = urlParams.get("search");
  const urlCategory = urlParams.get("category");
  const urlRoom = urlParams.get("room");

  // Handle search parameter
  if (urlSearch) {
    searchQuery = urlSearch.toLowerCase();
    const mainSearchInput = document.getElementById("productSearch");
    const navbarSearchInput = document.getElementById("navbarSearchInput");

    if (mainSearchInput) mainSearchInput.value = urlSearch;
    if (navbarSearchInput) navbarSearchInput.value = urlSearch;

    currentCategory = "all";
    currentRoomCategory = "all";

    setTimeout(() => {
      const resultsCount = productsData.filter((p) =>
        p.name.toLowerCase().includes(searchQuery)
      ).length;

      if (resultsCount > 0) {
        showSearchNotification(
          `Menampilkan ${resultsCount} hasil untuk "${urlSearch}"`
        );
      } else {
        showSearchNotification(`Tidak ada hasil untuk "${urlSearch}"`, true);
      }
    }, 500);
  }

  // Handle category parameter
  if (urlCategory) {
    currentCategory = urlCategory;
    updateSidebarActive(urlCategory);
  }

  // Handle room parameter
  if (urlRoom) {
    currentRoomCategory = urlRoom;
    syncRoomFilterButtons(urlRoom);

    setTimeout(() => {
      const roomName = roomCategories[urlRoom]?.name || urlRoom;
      const resultsCount = productsData.filter(
        (p) => p.roomCategory === urlRoom
      ).length;

      if (resultsCount > 0) {
        showSearchNotification(
          `Menampilkan ${resultsCount} produk untuk ${roomName}`
        );
      } else {
        showSearchNotification(`Tidak ada produk untuk ${roomName}`, true);
      }
    }, 500);
  }
}

// ==================== INITIALIZE ROOM FILTER BUTTONS ====================
function initializeRoomFilterButtons() {
  const roomFilterButtons = document.querySelectorAll("[data-room]");

  roomFilterButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const roomCategory = this.getAttribute("data-room");

      // Update state
      currentRoomCategory = roomCategory;
      currentCategory = "all";
      searchQuery = "";

      // Clear search inputs
      const mainSearchInput = document.getElementById("productSearch");
      const navbarSearchInput = document.getElementById("navbarSearchInput");
      if (mainSearchInput) mainSearchInput.value = "";
      if (navbarSearchInput) navbarSearchInput.value = "";

      // Sync button states
      syncRoomFilterButtons(roomCategory);

      // Clear other filters
      document
        .querySelectorAll(".category-card")
        .forEach((c) => c.classList.remove("active"));
      document
        .querySelectorAll(".category-link")
        .forEach((l) => l.classList.remove("active"));
      document
        .querySelectorAll(".subcategory-link")
        .forEach((l) => l.classList.remove("active"));

      // Update URL
      const params = new URLSearchParams();
      if (roomCategory !== "all") {
        params.set("room", roomCategory);
      }
      const newUrl = params.toString()
        ? `${window.location.pathname}?${params.toString()}`
        : window.location.pathname;
      window.history.pushState({}, "", newUrl);

      // Apply filters and update display
      updateActiveFiltersDisplay();
      filterProducts();

      // Show notification
      if (roomCategory !== "all") {
        const roomName = roomCategories[roomCategory]?.name || roomCategory;
        const resultsCount = productsData.filter(
          (p) => p.roomCategory === roomCategory
        ).length;
        showSearchNotification(
          `Menampilkan ${resultsCount} produk untuk ${roomName}`
        );
      }

      // Scroll to products
      document
        .querySelector(".products-grid")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ==================== SEARCH NOTIFICATION ====================
function showSearchNotification(message, isError = false) {
  const existingNotif = document.querySelector(".search-notification");
  if (existingNotif) {
    existingNotif.remove();
  }

  const notification = document.createElement("div");
  notification.className = "search-notification";
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${isError ? "#ff4444" : "#00bfa5"};
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 9999;
    animation: slideInRight 0.3s ease;
  `;
  notification.innerHTML = `
    <i class="fas fa-${
      isError ? "exclamation-circle" : "check-circle"
    }"></i> ${message}
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}

// ==================== RENDER PRODUCTS ====================
function renderProducts() {
  const productsGrid = document.getElementById("productsGrid");
  if (!productsGrid) return;

  productsGrid.innerHTML = "";

  productsData.forEach((product) => {
    const productCard = `
      <div class="product-card" 
           data-category="${product.category}" 
           data-room="${product.roomCategory}"
           data-filter="${product.filter}" 
           data-id="${product.id}">
        <div class="product-image">
          <img src="${product.image}" alt="${
      product.name
    }" onerror="this.src='https://via.placeholder.com/300x280/e8e8e8/333333?text=${encodeURIComponent(
      product.name
    )}'">
        </div>
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">${product.price}</p>
        </div>
      </div>
    `;
    productsGrid.innerHTML += productCard;
  });

  // Add click handlers
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    card.addEventListener("click", function () {
      const productId = this.getAttribute("data-id");
      showProductDetail(productId);
    });
  });

  filterProducts();
}

// ==================== SHOW PRODUCT DETAIL ====================
function showProductDetail(productId) {
  window.location.href = `product-detail.html?id=${productId}`;
}

// ==================== INITIALIZE NAVBAR SEARCH ====================
function initializeNavbarSearch() {
  const navbarSearchForm = document.getElementById("navbarSearchForm");
  const navbarSearchInput = document.getElementById("navbarSearchInput");
  const mainSearchInput = document.getElementById("productSearch");

  if (navbarSearchForm) {
    navbarSearchForm.addEventListener("submit", function (e) {
      e.preventDefault();

      searchQuery = navbarSearchInput.value.toLowerCase();

      if (mainSearchInput) mainSearchInput.value = navbarSearchInput.value;

      currentCategory = "all";
      currentRoomCategory = "all";

      syncRoomFilterButtons("all");

      document
        .querySelectorAll(".category-card")
        .forEach((c) => c.classList.remove("active"));
      document
        .querySelectorAll(".category-link")
        .forEach((l) => l.classList.remove("active"));
      document
        .querySelectorAll(".subcategory-link")
        .forEach((l) => l.classList.remove("active"));

      filterProducts();
      updateActiveFiltersDisplay();

      document
        .querySelector(".products-main")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    navbarSearchInput?.addEventListener("input", function () {
      if (mainSearchInput) mainSearchInput.value = this.value;
    });
  }
}

// ==================== INITIALIZE MOBILE MENU ====================
function initializeMobileMenu() {
  const burgerBtn = document.getElementById("burger");
  const menu = document.querySelector(".menu");

  if (burgerBtn && menu) {
    burgerBtn.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  }
}

// ==================== INITIALIZE CATEGORY CARDS ====================
function initializeCategoryCards() {
  const categoryCards = document.querySelectorAll(".category-card");

  categoryCards.forEach((card) => {
    card.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      categoryCards.forEach((c) => c.classList.remove("active"));
      this.classList.add("active");

      updateSidebarActive(category);

      currentCategory = category;
      currentRoomCategory = "all";
      searchQuery = "";

      syncRoomFilterButtons("all");

      const mainSearchInput = document.getElementById("productSearch");
      const navbarSearchInput = document.getElementById("navbarSearchInput");
      if (mainSearchInput) mainSearchInput.value = "";
      if (navbarSearchInput) navbarSearchInput.value = "";

      updateActiveFiltersDisplay();
      filterProducts();

      document
        .querySelector(".products-grid")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ==================== UPDATE SIDEBAR ACTIVE STATE ====================
function updateSidebarActive(category) {
  const categoryLinks = document.querySelectorAll(".category-link");
  const subcategoryLinks = document.querySelectorAll(".subcategory-link");

  categoryLinks.forEach((link) => {
    if (link.getAttribute("data-category") === category) {
      link.classList.add("active");

      if (
        category === "rak-penyimpanan" &&
        link.classList.contains("dropdown-toggle")
      ) {
        link.classList.add("open");
        const subcategoryList =
          link.parentElement.querySelector(".subcategory-list");
        if (subcategoryList) subcategoryList.classList.add("show");
      }
    } else {
      link.classList.remove("active");
    }
  });

  subcategoryLinks.forEach((link) => {
    if (link.getAttribute("data-category") === category) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// ==================== INITIALIZE SIDEBAR CATEGORIES ====================
function initializeSidebarCategories() {
  const categoryLinks = document.querySelectorAll(
    ".category-link:not(.dropdown-toggle)"
  );

  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const category = this.getAttribute("data-category");

      document
        .querySelectorAll(".category-link")
        .forEach((l) => l.classList.remove("active"));
      document
        .querySelectorAll(".subcategory-link")
        .forEach((l) => l.classList.remove("active"));

      this.classList.add("active");

      const categoryCards = document.querySelectorAll(".category-card");
      categoryCards.forEach((card) => {
        if (card.getAttribute("data-category") === category) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });

      currentCategory = category;
      currentRoomCategory = "all";
      searchQuery = "";

      syncRoomFilterButtons("all");

      const mainSearchInput = document.getElementById("productSearch");
      const navbarSearchInput = document.getElementById("navbarSearchInput");
      if (mainSearchInput) mainSearchInput.value = "";
      if (navbarSearchInput) navbarSearchInput.value = "";

      updateActiveFiltersDisplay();
      filterProducts();

      document
        .querySelector(".products-grid")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  });

  const subcategoryLinks = document.querySelectorAll(".subcategory-link");
  subcategoryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const category = this.getAttribute("data-category");

      subcategoryLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      document
        .querySelectorAll(".category-card")
        .forEach((c) => c.classList.remove("active"));

      currentCategory = category;
      currentRoomCategory = "all";
      searchQuery = "";

      syncRoomFilterButtons("all");
      updateActiveFiltersDisplay();
      filterProducts();

      document
        .querySelector(".products-grid")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ==================== INITIALIZE DROPDOWNS ====================
function initializeDropdowns() {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();

      const category = this.getAttribute("data-category");
      this.classList.toggle("open");

      const subcategoryList =
        this.parentElement.querySelector(".subcategory-list");
      if (subcategoryList) subcategoryList.classList.toggle("show");

      if (this.classList.contains("open")) {
        document.querySelectorAll(".category-link").forEach((l) => {
          if (l !== this) l.classList.remove("active");
        });
        document
          .querySelectorAll(".subcategory-link")
          .forEach((l) => l.classList.remove("active"));

        this.classList.add("active");

        const categoryCards = document.querySelectorAll(".category-card");
        categoryCards.forEach((card) => {
          if (card.getAttribute("data-category") === category) {
            card.classList.add("active");
          } else {
            card.classList.remove("active");
          }
        });

        currentCategory = category;
        currentRoomCategory = "all";

        syncRoomFilterButtons("all");
        updateActiveFiltersDisplay();
        filterProducts();
      }
    });
  });
}

// ==================== INITIALIZE FILTER BUTTONS ====================
function initializeFilterButtons() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      filterButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      currentFilter = filter;
      filterProducts();
    });
  });
}

// ==================== INITIALIZE SEARCH ====================
function initializeSearch() {
  const searchInput = document.getElementById("productSearch");
  const searchBtn = document.getElementById("mainSearchBtn");

  if (searchBtn) {
    searchBtn.addEventListener("click", function () {
      searchQuery = searchInput.value.toLowerCase();
      updateActiveFiltersDisplay();
      filterProducts();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        searchQuery = this.value.toLowerCase();
        updateActiveFiltersDisplay();
        filterProducts();
      }
    });

    searchInput.addEventListener("input", function () {
      searchQuery = this.value.toLowerCase();
      const navbarSearchInput = document.getElementById("navbarSearchInput");
      if (navbarSearchInput) navbarSearchInput.value = this.value;
      filterProducts();
    });
  }
}

// ==================== FILTER PRODUCTS ====================
function filterProducts() {
  const productCards = document.querySelectorAll(".product-card");
  let visibleCount = 0;

  productCards.forEach((card) => {
    const category = card.getAttribute("data-category");
    const roomCategory = card.getAttribute("data-room");
    const filter = card.getAttribute("data-filter");
    const productName = card
      .querySelector(".product-name")
      .textContent.toLowerCase();

    let showCard = true;

    // Filter by category
    if (currentCategory !== "all") {
      if (currentCategory === "rak-penyimpanan") {
        if (!category.startsWith("rak-")) showCard = false;
      } else if (category !== currentCategory) {
        showCard = false;
      }
    }

    // Filter by room
    if (currentRoomCategory !== "all") {
      if (roomCategory !== currentRoomCategory) showCard = false;
    }

    // Filter by new/bestseller
    if (filter !== currentFilter) showCard = false;

    // Filter by search query
    if (searchQuery && !productName.includes(searchQuery)) showCard = false;

    if (showCard) {
      card.classList.remove("hidden");
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, visibleCount * 50);
      visibleCount++;
    } else {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      setTimeout(() => card.classList.add("hidden"), 300);
    }
  });

  showNoResultsMessage(visibleCount);
  updateActiveFiltersDisplay();
}

// ==================== SHOW NO RESULTS MESSAGE ====================
function showNoResultsMessage(count) {
  const productsGrid = document.querySelector(".products-grid");
  let noResultsMsg = document.getElementById("noResultsMessage");

  if (count === 0) {
    if (!noResultsMsg) {
      noResultsMsg = document.createElement("div");
      noResultsMsg.id = "noResultsMessage";
      noResultsMsg.className = "no-results-message";
      noResultsMsg.innerHTML = `
        <i class="fas fa-search"></i>
        <p>Tidak ada produk yang ditemukan${
          searchQuery ? ` untuk "${searchQuery}"` : ""
        }</p>
        <button onclick="resetFilters()" class="reset-btn">Reset Filter</button>
      `;
      productsGrid.parentElement.insertBefore(
        noResultsMsg,
        productsGrid.nextSibling
      );
    } else {
      noResultsMsg.querySelector(
        "p"
      ).textContent = `Tidak ada produk yang ditemukan${
        searchQuery ? ` untuk "${searchQuery}"` : ""
      }`;
    }
    noResultsMsg.style.display = "block";
  } else {
    if (noResultsMsg) noResultsMsg.style.display = "none";
  }
}

// ==================== UPDATE ACTIVE FILTERS DISPLAY ====================
function updateActiveFiltersDisplay() {
  const activeFiltersContainer = document.getElementById("activeFilters");
  const filterTagsContainer = document.getElementById("filterTags");

  if (!activeFiltersContainer || !filterTagsContainer) return;

  let hasFilters = false;
  let filtersHTML = "";

  if (currentCategory !== "all") {
    hasFilters = true;
    const categoryName = getCategoryDisplayName(currentCategory);
    filtersHTML += `<span class="filter-tag"><i class="fas fa-tag"></i> ${categoryName}</span>`;
  }

  if (currentRoomCategory !== "all") {
    hasFilters = true;
    const roomName =
      roomCategories[currentRoomCategory]?.name || currentRoomCategory;
    filtersHTML += `<span class="filter-tag"><i class="${
      roomCategories[currentRoomCategory]?.icon || "fa-door-open"
    }"></i> ${roomName}</span>`;
  }

  if (searchQuery) {
    hasFilters = true;
    filtersHTML += `<span class="filter-tag"><i class="fas fa-search"></i> "${searchQuery}"</span>`;
  }

  if (hasFilters) {
    filterTagsContainer.innerHTML = filtersHTML;
    activeFiltersContainer.style.display = "flex";
  } else {
    activeFiltersContainer.style.display = "none";
  }
}

// ==================== GET CATEGORY DISPLAY NAME ====================
function getCategoryDisplayName(category) {
  const categoryNames = {
    meja: "Meja",
    kursi: "Kursi",
    lemari: "Lemari",
    "kasur-sofa": "Kasur & Sofa",
    "rak-penyimpanan": "Rak Penyimpanan",
    "rak-sepatu": "Rak Sepatu",
    "rak-baju": "Rak Baju",
    "rak-tas": "Rak Tas",
  };
  return categoryNames[category] || category;
}

// ==================== INITIALIZE FOOTER CATEGORIES ====================
function initializeFooterCategories() {
  const footerCategoryLinks = document.querySelectorAll(".footer-category");

  footerCategoryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const category = this.getAttribute("data-category");

      window.scrollTo({ top: 0, behavior: "smooth" });

      currentCategory = category;
      currentRoomCategory = "all";
      searchQuery = "";

      setTimeout(() => {
        syncRoomFilterButtons("all");
        updateSidebarActive(category);

        const categoryCards = document.querySelectorAll(".category-card");
        categoryCards.forEach((card) => {
          if (card.getAttribute("data-category") === category) {
            card.classList.add("active");
          } else {
            card.classList.remove("active");
          }
        });

        updateActiveFiltersDisplay();
        filterProducts();
      }, 500);
    });
  });
}

// ==================== RESET FILTERS ====================
function resetFilters() {
  currentCategory = "all";
  currentRoomCategory = "all";
  currentFilter = "new";
  searchQuery = "";

  syncRoomFilterButtons("all");

  document
    .querySelectorAll(".category-card")
    .forEach((card) => card.classList.remove("active"));
  document.querySelectorAll(".category-link").forEach((link) => {
    link.classList.remove("active");
    link.classList.remove("open");
  });
  document
    .querySelectorAll(".subcategory-link")
    .forEach((link) => link.classList.remove("active"));
  document
    .querySelectorAll(".subcategory-list")
    .forEach((list) => list.classList.remove("show"));

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => {
    if (btn.getAttribute("data-filter") === "new") {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const searchInput = document.getElementById("productSearch");
  const navbarSearchInput = document.getElementById("navbarSearchInput");
  if (searchInput) searchInput.value = "";
  if (navbarSearchInput) navbarSearchInput.value = "";

  window.history.pushState({}, "", window.location.pathname);

  updateActiveFiltersDisplay();
  filterProducts();
}

// ==================== ADD CSS ANIMATIONS ====================
const style = document.createElement("style");
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }

  @keyframes pulseActive {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;
document.head.appendChild(style);

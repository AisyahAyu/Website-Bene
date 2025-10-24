// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Products Data (sama seperti di products.js)
const productsData = [
  // MEJA
  {
    id: 1,
    name: "Meja Kerja Minimalis",
    price: "Rp 1.500.000,00",
    image: "image/meja-kerja.png",
    category: "meja",
    filter: "new",
    description:
      "Meja kerja dengan desain minimalis modern yang cocok untuk ruang kerja Anda. Terbuat dari material berkualitas tinggi dengan finishing yang rapi dan tahan lama.",
  },
  {
    id: 2,
    name: "Meja Belajar Anak",
    price: "Rp 800.000,00",
    image: "image/meja-belajar.png",
    category: "meja",
    filter: "bestseller",
    description:
      "Meja belajar ergonomis untuk anak dengan desain yang menarik dan aman. Dilengkapi dengan laci penyimpanan untuk buku dan alat tulis.",
  },
  {
    id: 3,
    name: "Meja Komputer Gaming",
    price: "Rp 2.500.000,00",
    image: "image/meja-gamer.png",
    category: "meja",
    filter: "new",
    description:
      "Meja gaming dengan cable management yang rapi. Desain modern dengan space yang luas untuk setup gaming Anda. Dilengkapi dengan holder untuk headphone dan cup holder.",
  },
  {
    id: 4,
    name: "Meja Makan Keluarga",
    price: "Rp 3.500.000,00",
    image: "image/meja-makan.png",
    category: "meja",
    filter: "bestseller",
    description:
      "Meja makan untuk 6 orang dengan desain klasik yang elegan. Terbuat dari kayu solid berkualitas tinggi dengan finishing yang tahan gores dan air.",
  },

  // KURSI
  {
    id: 5,
    name: "Kursi Kantor Ergonomis",
    price: "Rp 500.000,00",
    image: "image/kursi-kantor.png",
    category: "kursi",
    filter: "new",
    description:
      "Kursi kantor dengan sandaran punggung ergonomis yang dapat disesuaikan. Dilengkapi dengan armrest dan gas lift untuk kenyamanan maksimal saat bekerja.",
  },
  {
    id: 6,
    name: "Kursi Gaming Pro",
    price: "Rp 2.800.000,00",
    image: "image/kursi-gaming.png",
    category: "kursi",
    filter: "bestseller",
    description:
      "Kursi gaming profesional dengan bantal leher dan lumbar support. Material kulit sintetis premium dengan rangka besi yang kuat. Dapat direbahkan hingga 180 derajat.",
  },
  {
    id: 7,
    name: "Kursi Makan Kayu Jati",
    price: "Rp 650.000,00",
    image: "image/kursi-makan.png",
    category: "kursi",
    filter: "new",
    description:
      "Kursi makan dari kayu jati berkualitas dengan desain klasik. Finishing natural yang menampilkan serat kayu alami. Kokoh dan tahan lama untuk penggunaan jangka panjang.",
  },
  {
    id: 8,
    name: "Kursi Lipat Portable",
    price: "Rp 250.000,00",
    image: "image/kursi-lipat.png",
    category: "kursi",
    filter: "bestseller",
    description:
      "Kursi lipat praktis dan mudah disimpan. Cocok untuk acara outdoor atau sebagai kursi tambahan di rumah. Ringan namun kuat menahan beban hingga 120kg.",
  },
  {
    id: 9,
    name: "Kursi Santai Goyang",
    price: "Rp 1.200.000,00",
    image: "image/kursi-goyang.png",
    category: "kursi",
    filter: "new",
    description:
      "Kursi santai dengan mekanisme goyang yang smooth. Dilengkapi dengan bantalan empuk dan footrest untuk relaksasi maksimal. Material kayu solid dengan finishing berkualitas.",
  },

  // LEMARI
  {
    id: 10,
    name: "Lemari Pakaian 2 Pintu",
    price: "Rp 2.000.000,00",
    image: "image/lemari-2pintu.png",
    category: "lemari",
    filter: "bestseller",
    description:
      "Lemari pakaian dengan 2 pintu dan laci yang luas. Dilengkapi dengan gantungan baju dan rak untuk penyimpanan yang rapi. Material engineered wood berkualitas tinggi.",
  },
  {
    id: 11,
    name: "Lemari Pakaian 3 Pintu",
    price: "Rp 3.200.000,00",
    image: "image/lemari-3pintu.png",
    category: "lemari",
    filter: "new",
    description:
      "Lemari besar dengan 3 pintu dan cermin full body. Kapasitas penyimpanan besar dengan sistem organizer yang efisien. Pintu dengan sistem soft closing untuk keamanan.",
  },
  {
    id: 12,
    name: "Lemari Sliding Modern",
    price: "Rp 4.500.000,00",
    image: "image/lemari-sliding.png",
    category: "lemari",
    filter: "bestseller",
    description:
      "Lemari dengan pintu sliding hemat tempat. Desain modern dengan kombinasi kaca dan panel kayu. Sistem sliding yang smooth dan silent dengan rel berkualitas tinggi.",
  },
  {
    id: 13,
    name: "Lemari Hias Minimalis",
    price: "Rp 1.800.000,00",
    image: "image/lemari-hias.png",
    category: "lemari",
    filter: "new",
    description:
      "Lemari pajangan dengan kaca bening untuk display koleksi Anda. Dilengkapi dengan lampu LED internal untuk pencahayaan yang elegan. Rak dapat disesuaikan ketinggiannya.",
  },

  // KASUR & SOFA
  {
    id: 14,
    name: "Kasur Spring Bed Queen",
    price: "Rp 900.000,00",
    image: "image/13.png",
    category: "kasur-sofa",
    filter: "bestseller",
    description:
      "Kasur spring bed ukuran queen 160x200 dengan teknologi pocket spring untuk kenyamanan tidur maksimal. Lapisan memory foam yang empuk dan breathable.",
  },
  {
    id: 15,
    name: "Kasur Busa Premium",
    price: "Rp 1.500.000,00",
    image: "image/14.png",
    category: "kasur-sofa",
    filter: "new",
    description:
      "Kasur busa dengan memory foam berkualitas tinggi. Teknologi pressure relief untuk menopang tubuh dengan sempurna. Cover yang dapat dilepas dan dicuci.",
  },
  {
    id: 16,
    name: "Sofa L Minimalis",
    price: "Rp 1.800.000,00",
    image: "image/18.png",
    category: "kasur-sofa",
    filter: "bestseller",
    description:
      "Sofa L dengan desain minimalis modern yang cocok untuk ruang tamu Anda. Material fabric premium yang lembut dan mudah dibersihkan. Rangka kayu solid yang kokoh.",
  },
  {
    id: 17,
    name: "Sofa Bed Multifungsi",
    price: "Rp 2.500.000,00",
    image: "image/17.png",
    category: "kasur-sofa",
    filter: "new",
    description:
      "Sofa yang bisa diubah menjadi tempat tidur dengan mudah. Cocok untuk ruangan kecil atau guest room. Dilengkapi dengan storage box di bawah dudukan.",
  },
  {
    id: 18,
    name: "Sofa 3 Dudukan Klasik",
    price: "Rp 3.500.000,00",
    image: "image/16.png",
    category: "kasur-sofa",
    filter: "bestseller",
    description:
      "Sofa klasik dengan bahan kulit sintetis premium. Desain elegan dengan detail kancing yang menawan. Sangat nyaman dengan bantalan busa tebal berkualitas tinggi.",
  },
  {
    id: 19,
    name: "Kasur Lipat Praktis",
    price: "Rp 450.000,00",
    image: "image/15.png",
    category: "kasur-sofa",
    filter: "new",
    description:
      "Kasur lipat untuk tamu yang praktis dan mudah disimpan. Busa berkualitas dengan ketebalan 10cm. Dilengkapi dengan cover yang dapat dicuci.",
  },

  // RAK PENYIMPANAN
  {
    id: 20,
    name: "Rak Buku 5 Tingkat",
    price: "Rp 700.000,00",
    image: "image/19.png",
    category: "rak-penyimpanan",
    filter: "bestseller",
    description:
      "Rak buku dengan 5 tingkat penyimpanan yang luas. Konstruksi kokoh dari engineered wood. Desain minimalis yang cocok untuk berbagai gaya interior.",
  },
  {
    id: 21,
    name: "Rak Sepatu 10 Pasang",
    price: "Rp 350.000,00",
    image: "image/20.png",
    category: "rak-sepatu",
    filter: "new",
    description:
      "Rak sepatu kapasitas 10 pasang dengan desain compact. Sistem ventilasi yang baik untuk menjaga sepatu tetap kering dan tidak bau. Mudah dirakit tanpa tools.",
  },
  {
    id: 22,
    name: "Rak Sepatu Sliding",
    price: "Rp 850.000,00",
    image: "image/21.png",
    category: "rak-sepatu",
    filter: "bestseller",
    description:
      "Rak sepatu dengan sistem sliding yang hemat tempat. Kapasitas besar hingga 15 pasang sepatu. Panel melamine dengan finishing anti air dan mudah dibersihkan.",
  },
  {
    id: 23,
    name: "Rak Sepatu Minimalis",
    price: "Rp 280.000,00",
    image: "image/22.png",
    category: "rak-sepatu",
    filter: "new",
    description:
      "Rak sepatu compact untuk 6 pasang dengan desain minimalis. Material metal yang kuat dan tahan karat. Cocok untuk di entryway atau kamar.",
  },
  {
    id: 24,
    name: "Rak Baju Gantung",
    price: "Rp 450.000,00",
    image: "image/23.png",
    category: "rak-baju",
    filter: "bestseller",
    description:
      "Rak gantungan baju dengan roda untuk mobilitas mudah. Tinggi dapat disesuaikan dengan kebutuhan. Dilengkapi dengan rak sepatu di bagian bawah.",
  },
  {
    id: 25,
    name: "Rak Baju Portable",
    price: "Rp 320.000,00",
    image: "image/24.png",
    category: "rak-baju",
    filter: "new",
    description:
      "Rak baju portable dengan cover untuk melindungi pakaian dari debu. Mudah dirakit dan dibongkar. Cocok untuk penyimpanan musiman atau di kos-kosan.",
  },
  {
    id: 26,
    name: "Rak Baju Standing",
    price: "Rp 580.000,00",
    image: "image/25.png",
    category: "rak-baju",
    filter: "bestseller",
    description:
      "Rak baju standing dengan rak sepatu terintegrasi. Material metal powder coated yang kuat dan stylish. Desain industrial modern yang trendy.",
  },
  {
    id: 27,
    name: "Rak Tas Dinding",
    price: "Rp 180.000,00",
    image: "image/26.png",
    category: "rak-tas",
    filter: "new",
    description:
      "Rak tas yang dipasang di dinding untuk menghemat space. Dilengkapi dengan hook yang kuat untuk menggantung tas. Desain minimalis dengan material metal berkualitas.",
  },
  {
    id: 28,
    name: "Rak Tas Display",
    price: "Rp 650.000,00",
    image: "image/27.png",
    category: "rak-tas",
    filter: "bestseller",
    description:
      "Rak display untuk koleksi tas dengan desain boutique style. Dilengkapi dengan lampu LED untuk pencahayaan. Rak kaca yang elegan dan kokoh.",
  },
  {
    id: 29,
    name: "Rak Tas Multifungsi",
    price: "Rp 420.000,00",
    image: "image/28.png",
    category: "rak-tas",
    filter: "new",
    description:
      "Rak tas dengan laci tambahan untuk aksesori. Kombinasi rak terbuka dan tertutup untuk penyimpanan yang fleksibel. Material engineered wood dengan finishing melamine.",
  },
  {
    id: 30,
    name: "Rak Dapur 4 Tingkat",
    price: "Rp 550.000,00",
    image: "image/29.png",
    category: "rak-penyimpanan",
    filter: "new",
    description:
      "Rak penyimpanan untuk dapur dengan 4 tingkat. Material stainless steel yang tahan air dan mudah dibersihkan. Cocok untuk menyimpan peralatan dapur, bumbu, dan bahan makanan.",
  },
];

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  if (productId) {
    loadProductDetail(productId);
    loadRelatedProducts(productId);
  } else {
    alert("ID Produk tidak ditemukan!");
    window.location.href = "product.html";
  }

  initializeTabs();
  initializeQuantitySelector();
  initializeImageModal();
  initializeActions();
  initializeMobileMenu();
  initializeFooterNewsletter();
});

// Load Product Detail
function loadProductDetail(id) {
  const product = productsData.find((p) => p.id == id);

  if (!product) {
    alert("Produk tidak ditemukan!");
    window.location.href = "product.html";
    return;
  }

  // Update page title
  document.title = `${product.name} - Bene`;

  // Update breadcrumb
  document.getElementById("breadcrumbProductName").textContent = product.name;

  // Update badge
  const badge = document.getElementById("productBadge");
  badge.textContent = product.filter === "new" ? "NEW" : "BEST SELLER";
  badge.style.background =
    product.filter === "new"
      ? "linear-gradient(135deg, #00bfa5 0%, #00e5cc 100%)"
      : "linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)";

  // Update title
  document.getElementById("productTitle").textContent = product.name;

  // Update price
  document.getElementById("productPrice").textContent = product.price;

  // Hide original price and discount for now (you can customize this)
  document.getElementById("productPriceOriginal").style.display = "none";
  document.querySelector(".price-discount").style.display = "none";

  // Update main image
  const mainImage = document.getElementById("mainProductImage");
  mainImage.src = product.image;
  mainImage.alt = product.name;

  // Update description
  document.getElementById("productDescription").querySelector("p").textContent =
    product.description;
  document.getElementById("fullDescription").textContent = product.description;

  // Generate thumbnails
  generateThumbnails(product);
}

// Generate Thumbnails
function generateThumbnails(product) {
  const thumbnailsContainer = document.getElementById("thumbnailImages");
  thumbnailsContainer.innerHTML = "";

  // For now, use the same image 4 times (you can add more images to productsData)
  for (let i = 0; i < 4; i++) {
    const thumbnail = document.createElement("div");
    thumbnail.className = `thumbnail-item ${i === 0 ? "active" : ""}`;
    thumbnail.innerHTML = `<img src="${product.image}" alt="${product.name}">`;

    thumbnail.addEventListener("click", function () {
      document
        .querySelectorAll(".thumbnail-item")
        .forEach((t) => t.classList.remove("active"));
      this.classList.add("active");
      document.getElementById("mainProductImage").src = product.image;
    });

    thumbnailsContainer.appendChild(thumbnail);
  }
}

// Load Related Products
function loadRelatedProducts(currentId) {
  const currentProduct = productsData.find((p) => p.id == currentId);

  if (!currentProduct) return;

  const relatedProducts = productsData
    .filter((p) => p.category === currentProduct.category && p.id != currentId)
    .slice(0, 4);

  const container = document.getElementById("relatedProductsGrid");
  container.innerHTML = "";

  if (relatedProducts.length === 0) {
    container.innerHTML =
      "<p style='grid-column: 1/-1; text-align: center; color: #666;'>Tidak ada produk terkait</p>";
    return;
  }

  relatedProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "related-product-card";
    card.innerHTML = `
      <div class="related-product-image">
        <img src="${product.image}" alt="${
      product.name
    }" onerror="this.src='https://via.placeholder.com/200x200?text=${encodeURIComponent(
      product.name
    )}'">
      </div>
      <div class="related-product-info">
        <h4 class="related-product-name">${product.name}</h4>
        <p class="related-product-price">${product.price}</p>
      </div>
    `;

    card.addEventListener("click", function () {
      window.location.href = `product-detail.html?id=${product.id}`;
    });

    container.appendChild(card);
  });
}

// Initialize Tabs
function initializeTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      // Remove active from all buttons and panels
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanels.forEach((panel) => panel.classList.remove("active"));

      // Add active to clicked button and corresponding panel
      this.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });
}

// Initialize Quantity Selector
function initializeQuantitySelector() {
  const quantityInput = document.getElementById("quantityInput");
  const decreaseBtn = document.getElementById("decreaseQty");
  const increaseBtn = document.getElementById("increaseQty");

  decreaseBtn.addEventListener("click", function () {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });

  increaseBtn.addEventListener("click", function () {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue < 10) {
      quantityInput.value = currentValue + 1;
    }
  });
}

// Initialize Image Modal
function initializeImageModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const mainImage = document.getElementById("mainProductImage");
  const closeBtn = document.querySelector(".modal-close");

  mainImage.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}

// Initialize Actions
function initializeActions() {
  const product = productsData.find((p) => p.id == productId);

  // Add to Cart
  document
    .getElementById("addToCartBtn")
    .addEventListener("click", function () {
      const quantity = document.getElementById("quantityInput").value;
      alert(
        `✅ ${quantity} ${
          product ? product.name : "produk"
        } berhasil ditambahkan ke keranjang!`
      );
    });

  // Buy Now
  document.getElementById("buyNowBtn").addEventListener("click", function () {
    const quantity = document.getElementById("quantityInput").value;
    alert(`🛒 Checkout ${quantity} ${product ? product.name : "produk"}...`);
  });

  // Wishlist
  document.getElementById("wishlistBtn").addEventListener("click", function () {
    const icon = this.querySelector("i");
    if (icon.classList.contains("far")) {
      icon.classList.remove("far");
      icon.classList.add("fas");
      alert("💖 Produk ditambahkan ke wishlist!");
    } else {
      icon.classList.remove("fas");
      icon.classList.add("far");
      alert("Produk dihapus dari wishlist");
    }
  });

  // Share
  document.getElementById("shareBtn").addEventListener("click", function () {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: product ? product.name : "Produk",
        url: url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert("📋 Link produk berhasil disalin!");
    }
  });
}

// Mobile Menu Toggle
function initializeMobileMenu() {
  const burgerBtn = document.getElementById("burger");
  const menu = document.querySelector(".menu");

  if (burgerBtn && menu) {
    burgerBtn.addEventListener("click", function () {
      menu.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (menu.classList.contains("active")) {
        if (!menu.contains(e.target) && !burgerBtn.contains(e.target)) {
          menu.classList.remove("active");
        }
      }
    });

    // Close menu when clicking on a link
    const menuLinks = menu.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        menu.classList.remove("active");
      });
    });
  }
}

// Footer Newsletter
function initializeFooterNewsletter() {
  const footerNewsletterForm = document.getElementById("footerNewsletterForm");
  const footerNewsletterEmail = document.getElementById(
    "footerNewsletterEmail"
  );

  if (footerNewsletterForm && footerNewsletterEmail) {
    footerNewsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = footerNewsletterEmail.value;

      if (email && validateEmail(email)) {
        alert(
          "✅ Terima kasih telah berlangganan newsletter kami!\n\nEmail: " +
            email
        );
        footerNewsletterEmail.value = "";
      } else {
        alert("⚠️ Mohon masukkan alamat email yang valid.");
      }
    });
  }
}

// Email Validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

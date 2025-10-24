// Mobile Menu Toggle
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!burger.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("active");
  }
});

// Contact Form Submission
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Show success message
  alert(
    `Terima kasih ${name}!\n\nPesan Anda telah dikirim. Kami akan menghubungi Anda segera melalui:\nEmail: ${email}\nTelepon: ${phone}`
  );

  // Reset form
  contactForm.reset();

  // In production, you would send this data to your server
  console.log("Form Data:", { name, email, phone, message });
});

// Newsletter Form Submission
const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = e.target.querySelector('input[type="email"]').value;

  alert(
    `Terima kasih! Anda telah berlangganan newsletter kami dengan email: ${email}`
  );

  newsletterForm.reset();

  // In production, you would send this data to your server
  console.log("Newsletter subscription:", email);
});

// WhatsApp Button
const whatsappBtn = document.querySelector(".whatsapp-btn");

whatsappBtn.addEventListener("click", () => {
  const phoneNumber = "6221xxxxxxxx"; // Replace with actual number
  const message = "Halo, saya tertarik dengan produk Bene Interio";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");
});

// Smooth Scroll for anchor links
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

// Form validation with visual feedback
const inputs = document.querySelectorAll("input, textarea");

inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    if (input.value.trim() === "" && input.hasAttribute("required")) {
      input.style.borderColor = "#e74c3c";
    } else {
      input.style.borderColor = "#e0e0e0";
    }
  });

  input.addEventListener("focus", () => {
    input.style.borderColor = "#1abc9c";
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(".info-item, .form-group, .footer-column")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });

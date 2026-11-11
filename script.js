// DOM Elements
const themeToggleBtn = document.getElementById("theme-toggle");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const currentYearSpan = document.getElementById("current-year");

// 1. Initialize Year in Footer
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

// 2. Dark/Light Mode Toggle
const savedTheme = localStorage.getItem("portfolio-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
} else if (prefersDark) {
  document.documentElement.setAttribute("data-theme", "dark");
  updateThemeIcon("dark");
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    updateThemeIcon(nextTheme);
  });
}

function updateThemeIcon(theme) {
  if (themeToggleBtn) {
    themeToggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
    themeToggleBtn.setAttribute(
      "aria-label",
      theme === "dark" ? "สลับไปใช้โหมดสว่าง" : "สลับไปใช้โหมดมืด"
    );
  }
}

// 3. Contact Form Submission (Client-side simulation)
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    // Feedback
    formStatus.textContent = "ขอบคุณสำหรับข้อความ! เราได้รับเรียบร้อยแล้ว";
    formStatus.className = "form-status success";

    // Reset Form
    contactForm.reset();

    setTimeout(() => {
      formStatus.style.display = "none";
      formStatus.className = "form-status";
    }, 4500);
  });
}

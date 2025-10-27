console.log("✅ JavaScript is running!");

// CONTACT BOX TOGGLE
const contactBtn = document.getElementById("contact-btn");
const contactBox = document.getElementById("contact-box");

if (contactBtn && contactBox) {
  contactBtn.addEventListener("click", () => {
    contactBox.classList.toggle("hidden");
  });
}

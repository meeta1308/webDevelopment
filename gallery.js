const filterLinks = document.querySelectorAll("nav ul li a");
const galleryItems = document.querySelectorAll(".gallery-item");

// Initial fade-in animation
window.addEventListener("load", () => {
  galleryItems.forEach((item, index) => {
    setTimeout(() => item.classList.add("visible"), index * 100);
  });
});

filterLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const category = link.getAttribute("data-category");

    // Highlight active link
    filterLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    // Show / hide gallery items with animation
    galleryItems.forEach((item) => {
      if (category === "all" || item.classList.contains(category)) {
        item.style.display = "block";
        setTimeout(() => item.classList.add("visible"), 100);
      } else {
        item.classList.remove("visible");
        setTimeout(() => (item.style.display = "none"), 300);
      }
    });
  });
});

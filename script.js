// DACHITRA PRODUCT CATALOGUE — content is managed through /admin/
const grid = document.getElementById("product-grid");
const waNumber = "918847054678";

function renderProducts(products) {
  const visibleProducts = products.filter((p) => p.available !== false);
  grid.innerHTML = visibleProducts.map((p) => {
    const photos = [p.image, ...(Array.isArray(p.gallery) ? p.gallery : [])].filter(Boolean);
    const photo = photos.length
      ? `<div class="product-gallery"><div class="product-photo-main"><img data-main-photo src="${photos[0]}" alt="${p.name}"></div>${photos.length > 1 ? `<div class="product-thumbnails">${photos.map((src, i) => `<button type="button" class="product-thumb${i === 0 ? " active" : ""}" data-gallery-src="${src}" aria-label="View product photo ${i + 1}"><img src="${src}" alt=""></button>`).join("")}</div>` : ""}</div>`
      : `<div class="product-photo"><span>PRODUCT PHOTO COMING SOON</span></div>`;

    const details = [
      ["Fabric", p.fabric], ["Craft", p.craft], ["Colour", p.colour],
      ["Dye", p.dye], ["Saree Length", p.saree_length],
      ["Blouse Piece", p.blouse_piece], ["Wash Care", p.wash_care]
    ].filter((item) => item[1]);

    const detailHtml = details.length
      ? `<details class="product-details"><summary>View product details</summary><dl>${details.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}</dl></details>`
      : "";

    const msg = encodeURIComponent(
      `Hello DACHITRA, I am interested in ${p.name}. Please share details.`
    );

    return `<article class="product-card">
      ${photos.length ? photo.replace('class="product-gallery"', 'class="product-gallery product-gallery-card"') : photo}
      <div class="product-info">
        <p>${p.category || ""}</p>
        <h3>${p.name || "DACHITRA Saree"}</h3>
        <p>${p.description || ""}</p>
        ${detailHtml}
        <div class="product-price">${p.price || "Price on Request"}</div>
        <a class="product-order" href="https://wa.me/${waNumber}?text=${msg}" target="_blank" rel="noopener">Enquire on WhatsApp</a>
      </div>
    </article>`;
  }).join("");

  grid.querySelectorAll("[data-gallery-src]").forEach((button) => {
    button.addEventListener("click", () => {
      const gallery = button.closest(".product-gallery");
      const main = gallery.querySelector("[data-main-photo]");
      main.src = button.dataset.gallerySrc;
      gallery.querySelectorAll(".product-thumb").forEach((thumb) => thumb.classList.remove("active"));
      button.classList.add("active");
    });
  });
}

fetch("/data/products.json")
  .then((response) => {
    if (!response.ok) throw new Error("Could not load product catalogue");
    return response.json();
  })
  .then((data) => renderProducts(data.products || []))
  .catch((error) => {
    console.error(error);
    grid.innerHTML = "<p>Our collection is being updated. Please contact us on WhatsApp.</p>";
  });

document.getElementById("year").textContent = new Date().getFullYear();

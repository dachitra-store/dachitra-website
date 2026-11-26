// EDIT YOUR PRODUCTS HERE. Replace names, prices, descriptions and photo paths.
// To add a real product photo, put the image in the assets folder and set image: "assets/your-photo.jpg".
const products = [
  { name: "Handloom Heritage", category: "Handloom Saree", price: "₹3,499", description: "A timeless handloom-inspired drape.", image: "" },
  { name: "The Artisan Print", category: "Block Printed Saree", price: "₹3,299", description: "Traditional print with an artistic touch.", image: "" },
  { name: "Painted Stories", category: "Hand Painted Saree", price: "₹3,999", description: "A celebration of colour and craft.", image: "" },
  { name: "Chanderi Elegance", category: "Silk Collection", price: "₹4,499", description: "Graceful texture for special moments.", image: "" },
  { name: "Everyday Grace", category: "Cotton Saree", price: "₹2,499", description: "An easy, elegant everyday drape.", image: "" },
  { name: "Ajrakh Heritage", category: "Artisan Collection", price: "₹3,799", description: "Inspired by traditional Indian motifs.", image: "" },
  { name: "Kota Charm", category: "Kota Doria", price: "₹3,499", description: "Light, airy and effortlessly graceful.", image: "" },
  { name: "Silk Tradition", category: "Silk Saree", price: "₹4,999", description: "A classic addition to your wardrobe.", image: "" }
];

const grid = document.getElementById("product-grid");
const waNumber = "918847054678";
grid.innerHTML = products.map((p, i) => {
  const photo = p.image
    ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0">`
    : `<span>ADD PRODUCT PHOTO ${String(i+1).padStart(2,"0")}</span>`;
  const msg = encodeURIComponent(`Hello DACHITRA, I am interested in ${p.name} (${p.price}). Please share more details and availability.`);
  return `<article class="product-card">
    <div class="product-photo">${photo}</div>
    <div class="product-info">
      <p>${p.category}</p><h3>${p.name}</h3>
      <p>${p.description}</p><div class="product-price">${p.price}</div>
      <a class="product-order" href="https://wa.me/${waNumber}?text=${msg}" target="_blank" rel="noopener">Enquire on WhatsApp ↗</a>
    </div>
  </article>`;
}).join("");
document.getElementById("year").textContent = new Date().getFullYear();

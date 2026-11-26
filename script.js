// DACHITRA PRODUCT CATALOGUE
const products = [
  {
    name: "Saree Collection 01",
    category: "Handcrafted Saree",
    price: "Price on Request",
    description: "An elegant handcrafted saree from DACHITRA.",
    image: "assets/IMG_0274.PNG"
  },
  {
    name: "Saree Collection 02",
    category: "Traditional Saree",
    price: "Price on Request",
    description: "A beautiful traditional design celebrating Indian artistry.",
    image: "assets/IMG_0275.PNG"
  },
  {
    name: "Saree Collection 03",
    category: "Artisan Collection",
    price: "Price on Request",
    description: "A timeless saree inspired by India's textile heritage.",
    image: "assets/IMG_0283.PNG"
  },
  {
    name: "Saree Collection 04",
    category: "Handcrafted Saree",
    price: "Price on Request",
    description: "Discover the beauty of Indian craftsmanship.",
    image: ""
  },
  {
    name: "Saree Collection 05",
    category: "Silk Collection",
    price: "Price on Request",
    description: "Elegant ethnic wear for special occasions.",
    image: ""
  },
  {
    name: "Saree Collection 06",
    category: "Cotton Saree",
    price: "Price on Request",
    description: "Comfort and tradition in one beautiful drape.",
    image: ""
  },
  {
    name: "Saree Collection 07",
    category: "Artisan Collection",
    price: "Price on Request",
    description: "Celebrating the art of Indian textiles.",
    image: ""
  },
  {
    name: "Saree Collection 08",
    category: "Traditional Saree",
    price: "Price on Request",
    description: "Rooted in tradition. Inspired by art.",
    image: ""
  }
];

const grid = document.getElementById("product-grid");
const waNumber = "918847054678";

grid.innerHTML = products.map((p, i) => {
  const photo = p.image
    ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">`
    : `<span>ADD PRODUCT PHOTO ${String(i + 1).padStart(2, "0")}</span>`;

  const msg = encodeURIComponent(
    `Hello DACHITRA, I am interested in ${p.name}. Please share details.`
  );

  return `<article class="product-card">
    <div class="product-photo">${photo}</div>
    <div class="product-info">
      <p>${p.category}</p>
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <div class="product-price">${p.price}</div>
      <a class="product-order" href="https://wa.me/${waNumber}?text=${msg}" target="_blank" rel="noopener">Enquire on WhatsApp</a>
    </div>
  </article>`;
}).join("");

document.getElementById("year").textContent = new Date().getFullYear();

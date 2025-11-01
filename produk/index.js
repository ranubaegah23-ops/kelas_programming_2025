fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.forEach((element) => {
      document.getElementById(
        "produkcontainer"
      ).innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${element.images}" class="card-img-top" alt="${element.title}">
  <div class="card-body ">
    <h5 class="card-title">${element.title}</h5>
    <h7 class="card-title">${element.description}</h7>
    <p class="card-text">$.${element.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
    });
  });

const form = document.querySelector("form");
const allInputs = document.querySelectorAll("input");
const products = [];

class Product {
  constructor(name, category, price, count, description, imgUrl) {
    this.productName = name;
    this.productCategory = category;
    this.productPrice = price;
    this.productCount = count;
    this.productDescription = description;
    this.productImg = imgUrl;
    this.id = Date.now();
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const product = new Product(
    allInputs[0].value,
    allInputs[1].value,
    +allInputs[2].value,
    +allInputs[3].value,
    allInputs[4].value,
    allInputs[5].value
  );

  if (!Number(allInputs[2].value) || !Number(allInputs[3].value)) {
    alert("Price must be a number");
  } else {
    products.push(product);
    drawTable(product);
    resetInputFields();
  }
});

function resetInputFields() {
  allInputs.forEach((input) => {
    input.value = "";
  });
}

const tBody = document.querySelector("tbody");

function drawTable(product) {
  const trElem = document.createElement("tr");
  trElem.innerHTML = `
       <td>${product.id}</td>
       <td>${product.productName}</td>
       <td>${product.productCategory}</td>
       <td>${product.productPrice}</td>
       <td>${product.productCount}</td>
       <td>${product.productDescription}</td>
       <td><img width=200;height=200; src="${product.productImg}"></td>
       `;
  tBody.appendChild(trElem);
}

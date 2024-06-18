document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".card-body");
    products.forEach(product => {
      const plusButton = product.querySelector(".fa-plus-circle");
      const minusButton = product.querySelector(".fa-minus-circle");
      const quantityElement = product.querySelector(".quantity");
      const unitPriceElement = product.querySelector(".unit-price");
      const totalPriceElement = document.querySelector(".total");
  
      let quantity = parseInt(quantityElement.textContent);
      const unitPrice = parseFloat(unitPriceElement.textContent.replace(" $", ""));
  
      plusButton.addEventListener("click", () => {
        quantity++;
        updateQuantityAndTotal();
      });
  
      minusButton.addEventListener("click", () => {
        if (quantity > 0) {
          quantity--;
          updateQuantityAndTotal();
        }
      });
  
      function updateQuantityAndTotal() {
        quantityElement.textContent = quantity;
        updateTotalPrice();
      }
  
      function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll(".card-body").forEach(product => {
          const productQuantity = parseInt(product.querySelector(".quantity").textContent);
          const productUnitPrice = parseFloat(product.querySelector(".unit-price").textContent.replace(" $", ""));
          total += productQuantity * productUnitPrice;
        });
        totalPriceElement.textContent = `${total} $`;
      }
    });
  });
  
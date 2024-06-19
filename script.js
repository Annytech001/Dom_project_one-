function incrementOrder(productId){
    const container = document.getElementById(productId);
    const quantity = container.querySelector('.quantity');
    const total = container.querySelector('.total');
    const unitPrice = container.querySelector('.unit-price').innerText.replace("$", "").trim();
    const quantityValue = parseInt(quantity.innerText)

    const unitPriceValue = parseInt(unitPrice);
}
document.addEventListener("DOMContentLoaded", function () {
    // Function to update the total price
    function updateTotalPrice() {
      let total = 0;
      document.querySelectorAll(".card-body").forEach((productCard) => {
        const unitPrice = parseFloat(
          productCard.querySelector(".unit-price").innerText.replace("$", "")
        );
        const quantity = parseInt(
          productCard.querySelector(".quantity").innerText
        );
        total += unitPrice * quantity;
      });
      document.querySelector(".total").innerText = `${total} $`;
    }
  
    // Event listener for plus buttons
    document.querySelectorAll(".fa-plus-circle").forEach((btn) => {
      btn.addEventListener("click", function () {
        const quantitySpan = this.nextElementSibling;
        let quantity = parseInt(quantitySpan.innerText);
        quantitySpan.innerText = ++quantity;
        updateTotalPrice();
      });
    });
  
    // Event listener for minus buttons
    document.querySelectorAll(".fa-minus-circle").forEach((btn) => {
      btn.addEventListener("click", function () {
        const quantitySpan = this.previousElementSibling;
        let quantity = parseInt(quantitySpan.innerText);
        if (quantity > 0) {
          quantitySpan.innerText = --quantity;
          updateTotalPrice();
        }
      });
    });
  
    // Event listener for delete buttons
    document.querySelectorAll(".fa-trash-alt").forEach((btn) => {
      btn.addEventListener("click", function () {
        this.closest(".card-body").remove();
        updateTotalPrice();
      });
    });
  
    // Initial total price calculation
    updateTotalPrice();
  });

  // Event listener for heart buttons
  document.querySelectorAll(".fa-heart").forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.toggle("liked");
    });
  });
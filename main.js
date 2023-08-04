const items = document.querySelectorAll('.item');
const totalPrice = document.getElementById('total-price');

items.forEach(item => {
  const decrease = item.querySelector('.decrease');
  const increase = item.querySelector('.increase');
  const quantity = item.querySelector('.quantity');
  const deleteBtn = item.querySelector('.delete');
  const likeBtn = item.querySelector('.like');

  let price = 10; // Price per item
  let qty = parseInt(quantity.textContent);

  decrease.addEventListener('click', () => {
    if (qty > 1) {
      qty--;
      quantity.textContent = qty;
      updateTotal();
    }
  });

  increase.addEventListener('click', () => {
    qty++;
    quantity.textContent = qty;
    updateTotal();
  });

  deleteBtn.addEventListener('click', () => {
    item.remove();
    updateTotal();
  });

  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('liked');
  });

  function updateTotal() {
    totalPrice.textContent = price * qty;
  }
});




var scrollContent = document.getElementById('scrollcontent');
scrollContent.style.height = '100%';
scrollContent.style.overflowY = 'auto';

var searchInput = document.querySelector('.searchbar');
var productList = document.querySelectorAll('.products li');

searchInput.addEventListener('input', function() {
  var searchTerm = searchInput.value.toLowerCase();

  productList.forEach(function(product) {
    var productName = product.textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      product.style.display = 'flex';
    } else {
      product.style.display = 'none';
    }
  });
});

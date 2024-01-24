(function() {
  var btn = document.querySelector('.readmore-btn');
  var content = document.querySelector('.coin-description-content');

  btn.addEventListener('click', function() {
    content.classList.add('expanded');
  })
  
})();
(function() {
  var accList = document.querySelectorAll('.accordion-btn');
  
  for (var i = 0; i < accList.length; i++) {
    var btn = accList[i];
    
    btn.addEventListener('click', function() {
      this.parentNode.classList.toggle('open')
    })
  }
})();
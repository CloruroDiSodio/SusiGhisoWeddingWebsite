document.addEventListener("DOMContentLoaded", () => {
  var yes = '8000e';
  var no = '6f8db';
  var yesSection = document.getElementById('answer-yes');
  var noSection =  document.getElementById('answer-no');

  var query = new URLSearchParams(location.search);

  var goToHome = function() {
    location.href = 'index.html';
  };

  if (query.size === 0) {
    goToHome();
  } else {
    var answer = query.get('answer');

    if (answer === yes || answer === 'hack-hack-hack-yes') {
        yesSection.classList.remove('hidden');
    } else if (answer === no || answer === 'hack-hack-hack-no') {
        noSection.classList.remove('hidden');
    } else {
        goToHome();
    }
  }
});

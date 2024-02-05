document.getElementById('identification-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Validation des informations (exemple : vérification de l'âge)
    var birthdate = new Date(document.getElementById('birthdate').value);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - birthdate.getFullYear();

    if (age < 21) {
        showNotification("Vous êtes mineur. Veuillez vous identifier avec les données parentales et aller dans l'onglet 'Informations familiales'.");
    } else {
        // Réinitialiser la notification si précédemment affichée
        hideNotification();
        
        // Vérification supplémentaire des autres données si nécessaire
        // ...
        
        // Soumission du formulaire si toutes les vérifications sont réussies
        alert('Formulaire soumis avec succès!');
    }
});

function showNotification(message) {
    var notificationElement = document.getElementById('notification');
    notificationElement.innerText = message;
    notificationElement.style.display = 'block';
}

function hideNotification() {
    document.getElementById('notification').style.display = 'none';
}

window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 100) {
      document.getElementById("scroll-top").style.display = "block";
    } else {
      document.getElementById("scroll-top").style.display = "none";
    }
  });
  
  document.getElementById("scroll-top").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  
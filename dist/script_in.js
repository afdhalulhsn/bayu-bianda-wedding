function toggle() {
    document.getElementById("collapse").classList.toggle("hide");
  }


 // Set the date we're counting down to
 var countDownDate = new Date("Jul 09, 2023 08:00:00").getTime();
 // Update the count down every 1 second
 var x = setInterval(function() {
   // Get today's date and time
   var now = new Date().getTime();
   // Find the distance between now and the count down date
   var distance = countDownDate - now;
   // Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   // Display the result in the element with id="demo"
   document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m ";
   // If the count down is finished, write some text
   if (distance < 0) {
     clearInterval(x);
     document.getElementById("demo").innerHTML = "EXPIRED";
   }
 }, 1000);


 var audio = document.getElementById('background-music');
 var button = document.getElementById('music-button');
 var icon = document.getElementById('music-icon');
 var isPlaying = true;

 function toggleMusic() {
   if (isPlaying) {
     audio.pause();
     icon.classList.remove('fa-pause');
     icon.classList.add('fa-play');
   } else {
     audio.play();
     icon.classList.remove('fa-play');
     icon.classList.add('fa-pause');
   }
   isPlaying = !isPlaying;
 }

 $(document).ready(function() {
    $('.popup-btn').on('click', function() {
      $('.video-popup').fadeIn('slow');
      return false;
    });
    $('.popup-bg').on('click', function() {
      $('.video-popup').slideUp('slow');
      return false;
    });
    $('.close-btn').on('click', function() {
      $('.video-popup').fadeOut('slow');
      return false;
    });
  });


        // Get the modal element
        function palyMusic() {
            var audio = document.getElementById('background-music');
            var button = document.getElementById('music-button');
            var icon = document.getElementById('music-icon');
            audio.play();
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
          }
          // Get the modal element
          var modal = document.getElementById("myModal");
          // Get the close button element
          var closeBtn = document.getElementsByClassName("close")[0];
          // Get the agree button element
          var agreeBtn = document.getElementById("agreeBtn");
          // Open the modal when the page loads
          window.onload = function() {
            modal.style.display = "block";
            document.body.classList.add("modal-open");
          }
          // Close the modal when the close button is clicked
          closeBtn.onclick = function() {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
            palyMusic()
          }
          // Close the modal and allow access to the page when the agree button is clicked
          agreeBtn.onclick = function() {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
            palyMusic()
          }


          $(window).load(function() {
            $('.loader').fadeOut(3000);
          });
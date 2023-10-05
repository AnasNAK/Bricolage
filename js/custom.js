// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-services");
    const additionalServiceBoxes = document.querySelectorAll(".additional-service-box");
  
    let isExpanded = false;
  
    toggleButton.addEventListener("click", function (e) {
      e.preventDefault();
  
      if (isExpanded) {
        // Hide additional service boxes with animation
        additionalServiceBoxes.forEach(function (box) {
          box.classList.remove("revealed");
        });
        toggleButton.textContent = "View More";
      } else {
        // Show additional service boxes with animation
        additionalServiceBoxes.forEach(function (box) {
          box.classList.add("revealed");
        });
        toggleButton.textContent = "View Less";
      }
  
      isExpanded = !isExpanded;
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const openPopupButton = document.getElementById("open-popup");
    const closePopupButton = document.getElementById("close-popup");
    const popup = document.getElementById("popup");
  
    // Show the popup and apply the class when "Read More" is clicked
    openPopupButton.addEventListener("click", function () {
      popup.style.display = "block";
      document.body.classList.add("popup-opened");
    });
  
    // Close the popup and remove the class when "Close" is clicked
    closePopupButton.addEventListener("click", function () {
      popup.style.display = "none";
      document.body.classList.remove("popup-opened");
    });
  });
  
  
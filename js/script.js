document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const tabName = this.getAttribute('data-tab');

            navLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            this.classList.add('active');
            if (tabName) {
                document.getElementById(tabName).classList.add('active');
            }

            window.scrollTo(0, 0);
        });
    });

    // --- Slideshow code ---
    const slideshowImg  = document.getElementById("profile-slideshow");
    const slideshowLink = document.getElementById("slideshow-link");
    if (!slideshowImg || !slideshowLink) return; // safety

    const slides = [
        {
            src: "assets/images/img1.png",
            url: "https://github.com/MedicalImageAnalysisTutorials/SlicerCochlea",
        },
        {
            src: "assets/images/img2.png",  // <-- was img2.ng (typo)
            url: "https://github.com/MedicalImageAnalysisTutorials/SlicerCervicalSpine",
        },
        {
            src: "assets/images/img3.gif",
            url: "https://github.com/ia-dev/opensimQt",
        },
        {
            src: "assets/images/img4.png",
            url: "https://github.com/iaBIH/synth-md"
        }
    ];

    let currentIndex = 0;

    function showSlide(index) {
        slideshowImg.src  = slides[index].src;
        slideshowLink.href = slides[index].url;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // initialize first slide
    showSlide(currentIndex);

    // change every 5 seconds
    setInterval(nextSlide, 5000);
});

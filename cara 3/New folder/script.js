document.addEventListener('DOMContentLoaded', function() {
    const testimoniCards = document.querySelectorAll('.testimoni-card');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    function showTestimoni(index) {
        testimoniCards.forEach((card, i) => {
            if (i === index) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + testimoniCards.length) % testimoniCards.length;
        showTestimoni(currentIndex);
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % testimoniCards.length;
        showTestimoni(currentIndex);
    });

    // Show first testimoni initially
    showTestimoni(currentIndex);
});
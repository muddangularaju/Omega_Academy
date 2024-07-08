function toggleCourseVisibility() {
    const hiddenCards = document.querySelectorAll('.course-cards .hidden');
    hiddenCards.forEach(card => {
        if (card.style.display === 'none' || card.style.display === '') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    const viewMoreButton = document.getElementById('viewMoreButton');
    if (viewMoreButton.innerText === 'View More') {
        viewMoreButton.innerText = 'View Less';
    } else {
        viewMoreButton.innerText = 'View More';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const hiddenCards = document.querySelectorAll('.course-cards .hidden');
    hiddenCards.forEach(card => card.style.display = 'none');
});
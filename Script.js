function togglePortfolioDetails(element) {
    var details = element.querySelector('.details');
    if (details.style.display === 'none') {
        slideDown(details);
    } else {
        slideUp(details);
    }
}

function slideDown(element) {
    element.style.display = 'block';
    var height = element.clientHeight;
    element.style.height = '0';
    element.style.overflow = 'hidden';
    setTimeout(function() {
        element.style.transition = 'height 0.3s ease';
        element.style.height = height + 'px';
    }, 10);
}

function slideUp(element) {
    element.style.transition = 'height 0.3s ease';
    element.style.height = '0';
    setTimeout(function() {
        element.style.display = 'none';
    }, 300);
}
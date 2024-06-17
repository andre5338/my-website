document.getElementById('more-btn').addEventListener('click', function() {
    const moreInfo = document.getElementById('more-info');
    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block';
        this.textContent = 'Less about me';
    } else {
        moreInfo.style.display = 'none';
        this.textContent = 'More about me';
    }
});

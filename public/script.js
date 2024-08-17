document.addEventListener('DOMContentLoaded', function() {
    const moreBtn = document.getElementById('more-btn');
    const moreInfo = document.getElementById('more-info');

    if (moreBtn && moreInfo) {
        moreBtn.addEventListener('click', function() {
            if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
                moreInfo.style.display = 'block';
                this.textContent = 'Less about me';
            } else {
                moreInfo.style.display = 'none';
                this.textContent = 'More about me';
            }
        });
    }
});
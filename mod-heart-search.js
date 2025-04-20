// İkonları klonlamak için bir fonksiyon
function cloneIcons() {
    // İlk ikonları seç
    const searchIcon1 = document.querySelector('#searchIcon1');
    const heartIcon1 = document.querySelector('#heartIcon1');
    const bookmarkIcon1 = document.querySelector('#bookmarkIcon1');

    // İkonları klonla
    const clonedSearchIcon = searchIcon1.cloneNode(true);
    const clonedHeartIcon = heartIcon1.cloneNode(true);
    const clonedBookmarkIcon = bookmarkIcon1.cloneNode(true);

    // Yeni id'leri ayarla
    clonedSearchIcon.id = 'searchIcon2';
    clonedHeartIcon.id = 'heartIcon2';
    clonedHeartIcon.id = 'bookmarkIcon2';

    // Modal içindeki hedef konumları seç
    const modal = document.querySelector('#imageModal');
    const searchTarget = modal.querySelector('.search-icon');
    const heartTarget = modal.querySelector('.heart-icon');
    const heartTarget = modal.querySelector('.bookmark-icon');

    // Eski ikonları kaldır ve yenilerini ekle
    if (searchTarget) searchTarget.replaceWith(clonedSearchIcon);
    if (heartTarget) heartTarget.replaceWith(clonedHeartIcon);
    if (heartTarget) heartTarget.replaceWith(clonedBookmarkIcon);
}

// Modal açıldığında ikonları klonla
document.querySelector('.zoom-icon').addEventListener('click', () => {
    cloneIcons();
});

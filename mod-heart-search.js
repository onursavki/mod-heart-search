function cloneIcons() {
    const searchIcon1 = document.querySelector('#searchIcon1');
    const heartIcon1 = document.querySelector('#heartIcon1');
    const bookmarkIcon1 = document.querySelector('#bookmarkIcon1');

    const clonedSearchIcon = searchIcon1.cloneNode(true);
    const clonedHeartIcon = heartIcon1.cloneNode(true);
    const clonedBookmarkIcon = bookmarkIcon1.cloneNode(true);

    clonedSearchIcon.id = 'searchIcon2';
    clonedHeartIcon.id = 'heartIcon2';
    clonedBookmarkIcon.id = 'bookmarkIcon2';

    const modal = document.querySelector('#imageModal');

    const searchTarget = modal.querySelector('.search-icon');
    const heartTarget = modal.querySelector('.heart-icon');
    const bookmarkTarget = modal.querySelector('.bookmark-icon');

    if (searchTarget) {
        searchTarget.replaceWith(clonedSearchIcon);
    }
    if (heartTarget) {
        heartTarget.replaceWith(clonedHeartIcon);
    }
    if (bookmarkTarget) {
        bookmarkTarget.replaceWith(clonedBookmarkIcon);
    }
}

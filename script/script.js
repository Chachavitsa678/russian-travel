document.addEventListener('DOMContentLoaded', function () {
    const paragraph = document.getElementById('paragraph');
    const subtitle = document.querySelector('.cover__subtitle');
    let originalContent = paragraph.innerHTML;
    let originalSubtitle = subtitle.innerHTML;
    function handleWindowResize() {
        const screenWidth = window.innerWidth;
        console.log(screenWidth);
        if (screenWidth > 320) {
            subtitle.innerHTML = subtitle.innerHTML.replace(/&nbsp;/g, ' ');
            paragraph.innerHTML = paragraph.innerHTML.replace(/&nbsp;и&nbsp;тандем/g, ' и&nbsp;тандем');
        } else {
            subtitle.innerHTML = originalSubtitle;
            paragraph.innerHTML = originalContent;
        }

    }
    window.addEventListener('resize', handleWindowResize);

    handleWindowResize();
});
document.addEventListener('DOMContentLoaded', function () {
    const paragraph = document.getElementById('paragraph');
    let originalContent = paragraph.innerHTML;
    function handleWindowResize() {
        const screenWidth = window.innerWidth;

        if (screenWidth > 320) {
            paragraph.innerHTML = paragraph.innerHTML.replace(/&nbsp;и&nbsp;тандем/g, ' и&nbsp;тандем');
        }  else {
            paragraph.innerHTML = originalContent;
        }
       
    }
    window.addEventListener('resize', handleWindowResize);

    handleWindowResize();
});
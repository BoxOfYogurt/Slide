var currentPos = 0;
document.getElementById('container').addEventListener('wheel', (e) => {
    // console.log('deltaX: ' + e.deltaX + ' deltaY: ' + e.deltaY)
    let deltaY = e.deltaY / 50;
    let deltaX = e.deltaX / 50;
    if (deltaY > 0 || deltaX > 0) {
        currentPos += -Math.abs(deltaY || deltaX);
    } else {
        currentPos += Math.abs(deltaY || deltaX);
    }
    for (i = 0; i < pages.children.length; i++) {
        let start = i * 100;
        let spacing = currentPos + start;
        let pageMove = spacing.toString();

        pages.children[i].style.transform = 'translateX(' + pageMove + '%)';
    }
});
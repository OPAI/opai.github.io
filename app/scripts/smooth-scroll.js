function scrollToItem(item) {
    let navHeight = 55;
    let diff = (item.offsetTop - window.scrollY - navHeight)/20;

    if(!window._lastDiff){
        window._lastDiff = 0;
    }

    if (Math.abs(diff) > 0) {
        window.scrollTo(0, (window.scrollY + diff))
        clearTimeout(window._TO)

        if(diff !== window._lastDiff){
            window._lastDiff = diff;
            window._TO=setTimeout(scrollToItem, 15, item);
        }
    } else {
        window.scrollTo(0, item.offsetTop - navHeight);
    }
}
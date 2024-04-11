javascript: (() => {
    const firstButton = document.querySelector(".TaskGroupHeader-toggleButton .Icon");
    if (!firstButton)
        return;
    const openOrClosed = firstButton.classList.contains("DownTriangleIcon") ? ".DownTriangleIcon" : ".RightTriangleIcon";
    document.querySelectorAll(`.TaskGroupHeader-toggleButton ${openOrClosed}`).
        forEach(buttonIcon => buttonIcon.parentNode.click());
})();
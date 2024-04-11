javascript: (function () {
    const boardSubtaskToggleButtons = document.querySelectorAll('.SubtaskCountToggleButton');
    if (boardSubtaskToggleButtons.length) {
        boardSubtaskToggleButtons.forEach(button => button.click());
        return;
    }

    const firstListSubtaskButton = document.querySelector('.ProjectSpreadsheetGridRow-subtaskToggleButton');
    if (!firstListSubtaskButton) return;
    const firstTriangleClassName = firstListSubtaskButton.firstElementChild.classList.contains('DownTriangleIcon') ? 'DownTriangleIcon' : 'RightTriangleIcon';

    const taskPlaceholderHTMLCollection = document.getElementsByClassName('SpreadsheetTaskRowScrollPlaceholder');
    const taskGroup = document.querySelector('.TaskGroup');
    const buttonAtTheBottom = document.querySelector('.SpreadsheetPotGridContents-addSectionButton');
    setTimeout(function () { if (buttonAtTheBottom) buttonAtTheBottom.scrollIntoView(); }, 30);
    setTimeout(function () { taskGroup.style.display = 'none'; }, 60);

    let monitorTaskStructure = setInterval(() => {
        if (taskPlaceholderHTMLCollection.length == 0) {
            document.querySelectorAll('.ProjectSpreadsheetGridRow-subtaskToggleButton').forEach(function (buttonIcon) {
                if (buttonIcon.firstElementChild.classList.contains(firstTriangleClassName)) buttonIcon.click();
            });
            taskGroup.style.display = '';
            clearInterval(monitorTaskStructure);
            const loadMoreLinkHTMLCollection = document.getElementsByClassName('SpreadsheetTaskList-showMoreLink');
            setTimeout(() => {
                let clickingLoadMoreLinks = setInterval(function () {
                    if (!loadMoreLinkHTMLCollection.length) {
                        clearInterval(clickingLoadMoreLinks);
                    } else {
                        loadMoreLinkHTMLCollection[0].scrollIntoView();
                        loadMoreLinkHTMLCollection[0].click();
                    }
                }, 100);
            }, 200);
        }
    }, 100);
})();
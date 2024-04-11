javascript: (() => {
    const attachments = document.querySelectorAll(".TaskPane-attachments > .AssetPreview a.BaseLink");
    if (!attachments.length)
        return;
    let index = 0;
    const downloadNext = () => {
        if (index < attachments.length) {
            const attachment = attachments[index];
            if (attachment.parentNode.tagName == "SPAN") {
                attachment.click();
                index++;
                setTimeout(downloadNext, 1000);
            } else if (attachment.getAttribute("tabindex") != null) {
                attachment.setAttribute("href", attachment.getAttribute("href") + "&force_download");
                attachment.click();
                index++;
                setTimeout(downloadNext, 1000);
            } else {
                index++;
                setTimeout(downloadNext, 0);
            }
        }
    };
    downloadNext();
})();
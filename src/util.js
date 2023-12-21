export const setPageTitle = (title) => {
    const titleElement = document.getElementByTagName("title")[0];
    titleElement.innerText = title;
}
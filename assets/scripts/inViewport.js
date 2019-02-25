export default (element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const belowViewport = 0;

    const verticalInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= belowViewport);
    const horizontalInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= belowViewport);

    return verticalInView && horizontalInView;
};

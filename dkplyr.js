window.addEventListener('DOMContentLoaded', () => {
    const playerContainer = document.getElementById(IndStreamPlayerConfigs.id);
    if (playerContainer) {
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.width = '100%';
    wrapper.style.paddingTop = '56.25%'; // 16:9 Aspect Ratio

    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    iframe.src = `https://kioled326aps.com/play/${IndStreamPlayerConfigs.src}`;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', 'true');

    wrapper.appendChild(iframe);
    playerContainer.appendChild(wrapper);
}
});

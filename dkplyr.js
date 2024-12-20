window.addEventListener('DOMContentLoaded', () => {
    const playerContainer = document.getElementById(IndStreamPlayerConfigs.id);
    if (playerContainer) {
      const iframe = document.createElement('iframe');
      iframe.width = `${IndStreamPlayerConfigs.width}px`;
      iframe.height = `${IndStreamPlayerConfigs.height}px`;
      iframe.src = `https://kioled326aps.com/play/${IndStreamPlayerConfigs.src}`;
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', 'true');
      playerContainer.appendChild(iframe);
    }
});

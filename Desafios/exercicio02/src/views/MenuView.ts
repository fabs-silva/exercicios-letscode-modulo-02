export const menu = (): void => {
  const menuApp = document.getElementById('app-menu') as HTMLDivElement;

  menuApp.innerHTML = `
    <div class="app-logo">♬ Logo ♬</div>
    <ul class="app-navigation">
        <li><a href="/">Cadastrar Músico</a></li>
        <li><a href="/" id="modificar-musico">Modificar Músico</a></li>
        <li><a href="/" id="buscar-musicos">Buscar Músicos</a></li>
        <li><a href="/" id="formar-bandas">Formar Bandas</a></li>
    </ul>`;
};

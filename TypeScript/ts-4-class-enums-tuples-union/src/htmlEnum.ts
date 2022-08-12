// 4. sukurti enum appState kuris turi Loading, Error, Online. Parasyti funkcija kuri atspaustina htmle kortele "Loading...", "Ivyko klaida!!!" "Serbentaudas Bordiuras pasiruoses" priklausomai nuo state kuri gavo.

const destEl = document.getElementById('app') as HTMLDivElement | null;

enum AppState {
  Loading = 'Loading...',
  Error = 'error',
  Online = 'online',
}

function runApp(state: AppState): void {
  switch (state) {
    case AppState.Loading:
      console.log('Loading');
      outputState(AppState.Loading);
      break;
    case AppState.Error:
      console.log('error');
      outputState(AppState.Error);
      break;
    case AppState.Online:
      console.log('online ');
      outputState(AppState.Online);
      break;
    default:
      console.log('state not found: ');
  }
}

function clearEl(dest: HTMLDivElement | null): void {
  if (!dest) return;
  dest.innerHTML = '';
}

function outputState(state: AppState): void {
  clearEl(destEl);
  const cardEl: HTMLDivElement = document.createElement('div');
  cardEl.className = state === AppState.Error ? 'card error' : 'card';

  const titleEl: HTMLHeadingElement = document.createElement('h2');
  titleEl.textContent = state === AppState.Online ? 'Serbentautas Bordiuras pasiruose' : state;
  cardEl.appendChild(titleEl);
  //     if (!destEl) return;
  //   destEl.append(cardEl);
  destEl?.append(cardEl);
}

// run app
runApp(AppState.Loading);
setTimeout(() => {
  runApp(AppState.Online);
}, 5000);

import { getParagraphText, getTitle } from '../utils';

export const createBands = (): HTMLDivElement => {
  const appBody = document.getElementById('app-body') as HTMLDivElement;

  if (appBody.hasChildNodes()) {
    appBody.remove();
  }

  const newAppBody = document.createElement('main') as HTMLDivElement;
  newAppBody.id = 'app-body';
  newAppBody.appendChild(getTitle('Formar Bandas'));
  newAppBody.appendChild(getParagraphText('Em breve...'));

  return newAppBody;
};

import { getParagraphText, getTitle } from '../utils';

export const createBands = () => {
  const appBody = document.getElementById('app-body') as HTMLDivElement;
  appBody.appendChild(getTitle('Formar Bandas'));
  appBody.appendChild(getParagraphText('Em breve...'));
};

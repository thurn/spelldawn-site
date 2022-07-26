import {School} from './primitives';

const BUCKET = 'https://storage.googleapis.com/spelldawn-assets/';

export function getTitleBackground(): string {
  return tcgCards('Custom/Title/BlackWhiteFaceTape.png');
}

export function getCardFrame(_?: School): string {
  // todo: handle school
  return fantasyCards('Cards/Card_Steampunk_Style_Color_1.png');
}

export function getCardImage(path: string): string {
  return BUCKET + path;
}

export function tcgCards(path: string): string {
  return BUCKET + 'LittleSweetDaemon/TCG_Card_Design/' + path;
}

export function fantasyCards(path: string): string {
  return BUCKET + 'LittleSweetDaemon/TCG_Card_Fantasy_Design/' + path;
}

export function elementalCards(path: string): string {
  return BUCKET + 'LittleSweetDaemon/TCG_Card_Elemental_Design/' + path;
}

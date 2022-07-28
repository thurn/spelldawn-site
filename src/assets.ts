import {School} from './primitives';

const BUCKET = 'https://storage.googleapis.com/spelldawn-assets/';

export function getTitleBackground(): string {
  return tcgCards('Custom/Title/BlackWhiteFaceTape.png');
}

export function getCardFrame(school?: School): string {
  switch (school) {
    case School.Law:
      return fantasyCards('Cards/Card_Steampunk_Style_Color_1.png');
    case School.Primal:
      return fantasyCards('Cards/Card_Elf_Style_Color_1.png');
    case School.Shadow:
      return fantasyCards('Cards/Card_Daemon_Style_Color_1.png');
    default:
      return fantasyCards('Cards/Card_Lovecraft_Style_Color_1.png');
  }
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

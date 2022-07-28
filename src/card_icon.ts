import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {fantasyCards, elementalCards} from './assets';

export enum CardIconType {
  Mana = 'Mana',
  Health = 'Health',
  Attack = 'Attack',
  Shield = 'Shield',
  LevelRequirement = 'LevelRequirement',
  Points = 'Points',
  OverlordCompetingSchools = 'OverlordCompetingSchools',
}

@customElement('spelldawn-icon')
export class SpelldawnCardIcon extends LitElement {
  static override styles = css`
    :host {
      position: absolute;
    }

    .cardIcon {
      position: absolute;
    }

    .iconBackground {
      position: absolute;
      width: 2.5rem;
      margin-top: 0.8rem;
    }

    .iconText {
      position: absolute;
      font-family: 'Impact';
      color: white;
      top: 0.8rem;
      left: 0.25rem;
      text-shadow: black 0px 0px 3px, black 0px 0px 3px, black 0px 0px 3px,
        black 0px 0px 3px;
      text-align: center;
      font-size: 1.7rem;
      width: 2rem;
    }
  `;

  @property({type: Number})
  value?: number;

  @property()
  iconType?: CardIconType;

  getIconBackground(): string {
    switch (this.iconType) {
      case CardIconType.Mana:
        return fantasyCards('Icons/Icon_Mana_Color_01.png');
      case CardIconType.Health:
        return elementalCards('Heart_Icons/Heart_Icons_Color_5.png');
      case CardIconType.Attack:
        return elementalCards('Attack_Icons/Attack_Icons_Color_4');
      case CardIconType.Shield:
        return elementalCards('Number_Icons/Number_Icons_Color_6.png');
      case CardIconType.LevelRequirement:
        return fantasyCards('Number_Back/Number_Back_Color_3');
      case CardIconType.Points:
        return elementalCards(
          'Card_Color_07/Back_Card_Color_07/Back_Card_Color_07_Logo_Crystal'
        );
      case CardIconType.OverlordCompetingSchools:
        return elementalCards(
          'Card_Color_15/Face_Card_Color_15/Face_Card_Color_15_Logo_Back.png'
        );
      default:
        return '';
    }
  }

  override render() {
    if (this.value !== undefined) {
      return html`
        <div class="cardIcon">
          <img class="iconBackground" src=${this.getIconBackground()} />
          <span class="iconText">${this.value}</span>
        </div>
      `;
    } else {
      return html``;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'spelldawn-icon': SpelldawnCardIcon;
  }
}

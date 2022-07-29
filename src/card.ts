import {LitElement, html, css} from 'lit';
import {customElement, property, queryAssignedNodes} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {School, Rarity, Faction} from './primitives';
import {getCardFrame, getCardImage, fantasyCards} from './assets';
import './card_title';
import './card_icon';
import {CardIconType} from './card_icon';

@customElement('spelldawn-card')
export class SpelldawnCard extends LitElement {
  static override styles = css`
    :host {
      display: block;
      width: 10rem;
      height: 15rem;
      display: inline-block;
      margin: 1rem 1rem;
    }

    ::slotted(*) {
      margin: 0 !important;
      padding: 0 !important;
    }

    #cardContainer {
      position: absolute;
    }

    #image {
      position: absolute;
      width: 9rem;
      margin-top: 0.6rem;
      margin-left: 0.3rem;
      transform: scaleX(-1);
    }

    #frame {
      width: 10rem;
      height: 15rem;
      position: absolute;
    }

    #rarity {
      position: absolute;
      left: 4.5rem;
      top: 9.5rem;
      width: 1rem;
    }

    #topLeft {
      top: 0;
      left: -0.25rem;
    }

    #topRight {
      top: 0;
      left: 8rem;
    }

    #bottomLeft {
      top: 12.5rem;
      left: -0.5rem;
    }

    #bottomRight {
      top: 12.5rem;
      left: 8rem;
    }

    #cardText {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      overflow: hidden;
      text-overflow: ellipsis;
      overflow-wrap: break-word;
      text-align: center;
      font-size: 0.6rem;
      line-height: 0.75rem;
      width: 6.6rem;
      height: 3.4rem;
      top: 10.9rem;
      left: 1.75rem;
    }
  `;

  @property()
  name?: string;

  @property()
  image?: string;

  @property({type: Number})
  manaCost?: number;

  @property()
  school?: School;

  @property()
  rarity?: Rarity;

  @property()
  faction?: Faction;

  @property({type: Number})
  health?: number;

  @property({type: Number})
  shield?: number;

  @property({type: Number})
  baseAttack?: number;

  @property({type: Number})
  levelRequirement?: number;

  @property({type: Number})
  schemePoints?: number;

  @property({type: Number})
  overlordCompetingSchools?: number;

  @property({type: Number})
  championCompetingSchools?: number;

  @property({type: Boolean})
  curveTitleText: boolean = false;

  @queryAssignedNodes()
  _children!: Array<Node>;

  rarityJewel(): string {
    switch (this.rarity) {
      case Rarity.Uncommon:
        return fantasyCards('Jewels/Jewel_Steampunk_Color_01.png');
      case Rarity.Rare:
        return fantasyCards('Jewels/Jewel_Elf_Color_02.png');
      case Rarity.Epic:
        return fantasyCards('Jewels/Jewel_Steampunk_Color_02.png');
      default:
        return fantasyCards('Jewels/Jewel_Elf_Color_01.png');
    }
  }

  cardIcon(id: string, image: string, value?: number) {
    if (value !== undefined) {
      return html`
        <div class="cardIcon" id=${id}>
          <img class="iconBackground" src=${image} />
          <span class="iconText">${value}</span>
        </div>
      `;
    } else {
      return html``;
    }
  }

  processSlot() {
    for (let child of this._children) {
      if (child instanceof Element) {
        let e = child as Element;
        e.innerHTML = e.innerHTML.replace('{#}', '<i class="fas fa-bolt"></i>');
        e.innerHTML = e.innerHTML.replace('{M}', '<i class="fas fa-fire"></i>');
        e.innerHTML = e.innerHTML.replace(
          '{-}',
          '<i class="fas fa-long-arrow-alt-right"></i>'
        );
        e.innerHTML = e.innerHTML.replace(
          '{A}',
          '<i class="fas fa-hourglass"></i>'
        );
      };
    }
  }

  override updated() {
    this.processSlot();
  }

  override render() {
    let image = null;
    if (this.image !== undefined) {
      image = html`<img id="image" src=${getCardImage(this.image)} />`;
    }

    return html`
      <div id="cardContainer">
        ${image}
        <img id="frame" src=${getCardFrame(this.school)} />
        <spelldawn-card-title
          faction=${ifDefined(this.faction)}
          name=${ifDefined(this.name)}
          ?curvetext=${this.curveTitleText}
        >
        </spelldawn-card-title>
        <img id="rarity" src=${this.rarityJewel()} />
        <spelldawn-icon
          id="topLeft"
          iconType=${CardIconType.Mana}
          value=${ifDefined(this.manaCost)}
        ></spelldawn-icon>
        <spelldawn-icon
          id="topLeft"
          iconType=${CardIconType.LevelRequirement}
          value=${ifDefined(this.levelRequirement)}
        ></spelldawn-icon>
        <spelldawn-icon
          id="topRight"
          iconType=${CardIconType.OverlordCompetingSchools}
          value=${ifDefined(this.overlordCompetingSchools)}
        ></spelldawn-icon>
        <spelldawn-icon
          id="topRight"
          iconType=${CardIconType.ChampionCompetingSchools}
          value=${ifDefined(this.championCompetingSchools)}
        ></spelldawn-icon>
        <spelldawn-icon
          id="bottomRight"
          iconType=${CardIconType.Health}
          value=${ifDefined(this.health)}
        ></spelldawn-icon>
        <spelldawn-icon
          id="bottomRight"
          iconType=${CardIconType.Attack}
          value=${ifDefined(this.baseAttack)}
        ></spelldawn-icon>
        <spelldawn-icon
          id="bottomRight"
          iconType=${CardIconType.Points}
          value=${ifDefined(this.schemePoints)}
        ></spelldawn-icon>
        <spelldawn-icon
          id="bottomLeft"
          iconType=${CardIconType.Shield}
          value=${ifDefined(this.shield)}
        ></spelldawn-icon>
        <div id="cardText">
          <span id="cardTextSpan"><slot></slot></span>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'spelldawn-card': SpelldawnCard;
  }
}

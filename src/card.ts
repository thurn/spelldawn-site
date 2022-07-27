import {LitElement, html, css} from 'lit';
import {
  customElement,
  property,
  queryAssignedNodes,
  queryAssignedElements,
} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {School, Rarity, Faction} from './primitives';
import {
  getCardFrame,
  getCardImage,
  fantasyCards,
  elementalCards,
} from './assets';
import './card_title';

@customElement('spelldawn-card')
export class SpelldawnCard extends LitElement {
  static override styles = css`
    :host {
      display: block;
      width: 10rem;
      height: 15rem;
      display: inline-block;
      margin: 0.5rem 1rem;
    }

    #container {
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
      left: 0;
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
      line-height: 0.7rem;
      width: 6.5rem;
      height: 3.4rem;
      top: 10.9rem;
      left: 1.75rem;
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

  @queryAssignedElements()
  _elements!: Array<Node>;

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
          '{A}',
          '<i class="fas fa-hourglass"></i>'
        );
      }
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
      <div id="container">
        ${image}
        <img id="frame" src=${getCardFrame(this.school)} />
        <spelldawn-card-title faction=${ifDefined(this.faction)}
          >${this.name}</spelldawn-card-title
        >
        <img id="rarity" src=${this.rarityJewel()} />
        ${this.cardIcon(
          'topLeft',
          fantasyCards('Icons/Icon_Mana_Color_01.png'),
          this.manaCost
        )}
        ${this.cardIcon(
          'topLeft',
          fantasyCards('Number_Back/Number_Back_Color_3'),
          this.levelRequirement
        )}
        ${this.cardIcon(
          'bottomRight',
          elementalCards('Heart_Icons/Heart_Icons_Color_5.png'),
          this.health
        )}
        ${this.cardIcon(
          'bottomRight',
          elementalCards('Attack_Icons/Attack_Icons_Color_4'),
          this.baseAttack
        )}
        ${this.cardIcon(
          'bottomRight',
          elementalCards(
            'Card_Color_07/Back_Card_Color_07/Back_Card_Color_07_Logo_Crystal'
          ),
          this.schemePoints
        )}
        ${this.cardIcon(
          'bottomLeft',
          elementalCards('Number_Icons/Number_Icons_Color_6.png'),
          this.shield
        )}
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

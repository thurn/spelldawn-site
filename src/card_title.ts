import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {getTitleBackground} from './assets';
import {Faction} from './primitives';

@customElement('spelldawn-card-title')
export class SpelldawnCardTitle extends LitElement {
  static override styles = css`
    :host {
      position: absolute;
      margin-top: -1rem;
    }

    #titleBackground {
      position: absolute;
      width: 10rem;
    }

    #text {
      position: absolute;
      width: 10rem;
      text-align: center;
      font-family: 'Bona Nova';
      padding-top: 0.15rem;
      font-weight: bold;
    }

    .abyssal {
      color: #388e3c;
    }

    .infernal {
      color: #e53935;
    }

    .mortal {
      color: #1976d2;
    }

    .prismatic {
      color: #e65100;
    }

    .construct {
      color: #c2185b;
    }
  `;

  @property()
  faction?: Faction;

  factionClass(): string {
    switch (this.faction) {
      case Faction.Abyssal:
        return 'abyssal';
      case Faction.Infernal:
        return 'infernal';
      case Faction.Mortal:
        return 'mortal';
      case Faction.Prismatic:
        return 'prismatic';
      case Faction.Construct:
        return 'construct';
      default:
        return '';
    }
  }

  override render() {
    return html`
      <img id="titleBackground" src=${getTitleBackground()} />
      <span id="text" class=${this.factionClass()}><slot></slot></span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'spelldawn-card-title': SpelldawnCardTitle;
  }
}

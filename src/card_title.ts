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
  `;

  @property()
  faction?: Faction;

  override render() {
    return html`
      <img id="titleBackground" src=${getTitleBackground()} />
      <span id="text"><slot></slot></span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'spelldawn-card-title': SpelldawnCardTitle;
  }
}

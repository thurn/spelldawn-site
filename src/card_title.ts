import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {getTitleBackground} from './assets';
import {Lineage} from './primitives';

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
      padding-top: 0.35rem;
      font-weight: bold;
      font-size: 0.85rem;
    }

    .smallText {
      font-size: 0.7rem !important;
    }

    #svg {
      position: absolute;
      width: 10rem;
      height: 2rem;
      top: -0.25rem;
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

    .noLineage {
      color: #000000;
    }
  `;

  @property()
  name?: string;

  @property()
  lineage?: Lineage;

  @property({type: Boolean})
  curveText: boolean = false;

  factionClass(): string {
    switch (this.lineage) {
      case Lineage.Abyssal:
        return 'abyssal';
      case Lineage.Infernal:
        return 'infernal';
      case Lineage.Mortal:
        return 'mortal';
      case Lineage.Prismatic:
        return 'prismatic';
      case Lineage.Construct:
        return 'construct';
      default:
        return 'noLineage';
    }
  }

  override render() {
    let titleText = null;
    if (this.curveText && window.innerWidth > 700) {
      // Not really sure why this doesn't work on small screens
      titleText = html`
        <svg id="svg">
          <path
            id="curve"
            d="M -50 50 C 100 25, 100 25, 250 50"
            fill="transparent"
          />
          <text id="text" class=${this.factionClass()}>
            <textPath
              alignment-baseline="top"
              xlink:href="#curve"
              startOffset="50%"
              text-anchor="middle"
            >
              ${this.name}
            </textPath>
          </text>
        </svg>
      `;
    } else {
      let smallText = window.innerWidth > 700 ? '' : 'smallText';
      titleText = html`<span
        id="text"
        class="${this.factionClass()} ${smallText}"
        >${this.name}</span
      >`;
    }
    return html`
      <img id="titleBackground" src=${getTitleBackground()} />
      ${titleText}
    `;
  }
}

//

declare global {
  interface HTMLElementTagNameMap {
    'spelldawn-card-title': SpelldawnCardTitle;
  }
}

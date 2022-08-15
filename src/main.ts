import {SpelldawnCard} from './card';

export {SpelldawnCard};

const anchors = (window as any).anchors;
anchors.add('h1, h2, h3');
generateTableOfContents(anchors.elements);

// Script from https://www.roberthorvick.com/blog/dynamically-creating-table-of-contents-from-anchorjs-elements
function generateTableOfContents(els: Array<Element>) {
  var anchoredElText,
    anchoredElHref,
    ul = document.createElement('UL');

  document.getElementById('table-of-contents')!.appendChild(ul);

  for (var i = 0; i < els.length; i++) {
    anchoredElText = els[i].textContent;
    anchoredElHref = els[i]
      .querySelector('.anchorjs-link')!
      .getAttribute('href');
    addNavItem(
      ul,
      anchoredElHref!,
      anchoredElText!,
      'toc-li-'.concat(els[i].tagName)
    );
  }
}

function addNavItem(
  ul: Element,
  href: string,
  text: string,
  listClass: string
) {
  var listItem = document.createElement('LI'),
    anchorItem = document.createElement('A') as HTMLAnchorElement,
    textNode = document.createTextNode(text);
  listItem.className = listClass;

  anchorItem.href = href;
  ul.appendChild(listItem);
  listItem.appendChild(anchorItem);
  anchorItem.appendChild(textNode);
}

//h1 from title generator
export const getH1FromTitle = title => {
  let titleTextTaked = document.querySelector('title').innerHTML
  !/\w/.test(titleTextTaked) && (titleTextTaked = title)
  let h1ForActualTitle = document.createElement('h1')
  h1ForActualTitle.innerHTML = titleTextTaked
  document
    .querySelector('body')
    .insertBefore(h1ForActualTitle, document.querySelector('body').children[0])
}
//DOM manipulation helper
export function createElement({
  tagName = 'button',
  inner = 'innerHTMLTest',
  parent = '#root',
  id = '',
  className = 'className',
  insertBefore = false,
}) {
  let newDomNode = document.createElement(tagName)
  let root = document.querySelector(parent)

  !/\w/.test(id)
    ? (newDomNode.className = className.trim())
    : (newDomNode.id = id.trim())
    
  inner !== '' && (newDomNode.innerHTML = inner)

  insertBefore === true
    ? root.insertBefore(newDomNode, root.children[0])
    : root.appendChild(newDomNode)
}

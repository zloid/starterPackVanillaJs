//h1 from title generator
export const dynamicsH1FromTitle = title => {
  let titleTextTaked = document.querySelector("title").innerHTML;
  !/\w/.test(titleTextTaked) && (titleTextTaked = title);
  let h1ForActualTitle = document.createElement("h1");
  h1ForActualTitle.innerHTML = titleTextTaked;
  document.querySelector("body").insertBefore(h1ForActualTitle, document.querySelector("body").children[0])
};
//DOM manipulation helper
export function createElement(
  createElement,
  id,
  className,
  innerHTML = "",
  parentForInsert
) {
  let newDomNode = document.createElement(createElement);
  !/\w/.test(id)
    ? (newDomNode.className = className.trim())
    : (newDomNode.id = id.trim());
  innerHTML !== "" && (newDomNode.innerHTML = innerHTML);
  let root = document.querySelector(parentForInsert);
  root.appendChild(newDomNode);
}

const getElement = (tagName, classNames, attributes) => {
  const element = document.createElement(tagName);
  if (classNames) {
    element.classList.add(...classNames.split(' '));
  }
  if (attributes) {
    for (const attribute in attributes) {
      element[attribute] = attributes[attribute];
    }
  }
  return element;
}

export {
  getElement
}
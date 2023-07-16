// XPath expression for selecting a single node
const xpath = "//div[@class='my-class']";

// Evaluate the XPath expression
const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

// Check if a node was found
if (result.singleNodeValue) {
  const node = result.singleNodeValue;
  // Do something with the selected node
  console.log(node.textContent);
} else {
  console.log("No matching node found.");
}
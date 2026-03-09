export const fallbackQuestions = [
  // ─── CSS Introduction ───
  { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Colored Style Syntax", "Computer Style Sheets"], correct: 0, explanation: "CSS stands for Cascading Style Sheets — used to style and layout HTML elements.", topic: "CSS Introduction" },
  { question: "Which tag is used to link an external CSS file to HTML?", options: ["<style>", "<script>", "<link>", "<css>"], correct: 2, explanation: "<link rel='stylesheet' href='style.css'> is used to link an external CSS file.", topic: "CSS Introduction" },
  { question: "How do you add a comment in CSS?", options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"], correct: 1, explanation: "CSS comments are written using /* ... */.", topic: "CSS Introduction" },
  { question: "What is the correct format of a CSS rule?", options: ["selector { property: value; }", "selector [ property = value ]", "selector ( property, value )", "selector > property: value"], correct: 0, explanation: "A CSS rule has a selector followed by curly braces containing property: value pairs.", topic: "CSS Introduction" },

  // ─── CSS Types ───
  { question: "Where is Inline CSS written?", options: ["Inside the <head> tag", "In the 'style' attribute of an HTML element", "In an external .css file", "Below the <body> tag"], correct: 1, explanation: "Inline CSS is written directly in the HTML element's style attribute. e.g. <p style='color:red'>", topic: "CSS Types" },
  { question: "Where is Internal CSS defined?", options: ["In an external file", "Inside the <body>", "Inside the <head> in a <style> tag", "In a JavaScript file"], correct: 2, explanation: "Internal CSS is placed inside a <style> tag within the <head> section.", topic: "CSS Types" },
  { question: "Which type of CSS is most reusable across multiple pages?", options: ["Inline CSS", "Internal CSS", "External CSS", "Embedded CSS"], correct: 2, explanation: "External CSS is a separate .css file that can be linked to multiple HTML pages.", topic: "CSS Types" },
  { question: "What is the priority order of CSS types (highest to lowest)?", options: ["External > Internal > Inline", "Inline > Internal > External", "Internal > Inline > External", "All are equal"], correct: 1, explanation: "Inline CSS has the highest specificity, then internal, then external.", topic: "CSS Types" },

  // ─── Tag Selectors ───
  { question: "Which selector targets all <p> elements?", options: [".p", "#p", "p", "*p"], correct: 2, explanation: "A tag selector uses the element name directly, like p, h1, div etc.", topic: "Tag Selectors" },
  { question: "Which selector selects all elements on the page?", options: ["all", "*", "!", "?"], correct: 1, explanation: "The * (asterisk) is the universal selector that targets every element.", topic: "Tag Selectors" },

  // ─── Grouping Selectors ───
  { question: "What is the correct syntax to style multiple selectors at once?", options: ["h1 + h2 + h3 { }", "h1 & h2 & h3 { }", "h1, h2, h3 { }", "h1 | h2 | h3 { }"], correct: 2, explanation: "Use a comma (,) to group selectors so one rule applies to all of them.", topic: "Grouping Selectors" },
  { question: "What is the benefit of grouping selectors?", options: ["Code runs faster", "One rule can be applied to multiple elements", "Only works for classes", "No real benefit"], correct: 1, explanation: "Grouping avoids code repetition — one rule applies to all grouped elements.", topic: "Grouping Selectors" },

  // ─── Colors ───
  { question: "How many ways can you write the color 'red' in CSS?", options: ["Only 1", "2", "3", "4 or more"], correct: 3, explanation: "Red can be written as: color name (red), HEX (#ff0000), RGB, RGBA, and HSL.", topic: "Colors" },
  { question: "What color does HEX #000000 represent?", options: ["White", "Red", "Black", "Transparent"], correct: 2, explanation: "#000000 is black and #ffffff is white.", topic: "Colors" },
  { question: "What does the 'A' in RGBA stand for?", options: ["Angle", "Alpha (transparency)", "Array", "Adjust"], correct: 1, explanation: "In RGBA, A = Alpha channel, ranging from 0 (fully transparent) to 1 (fully opaque).", topic: "Colors" },
  { question: "What does the background-color property do?", options: ["Changes text color", "Sets the background color of an element", "Sets the border color", "Sets the shadow color"], correct: 1, explanation: "background-color sets the color behind an element's content.", topic: "Colors" },

  // ─── Typography ───
  { question: "Which property is used to change the font family?", options: ["font-style", "font-family", "font-type", "text-family"], correct: 1, explanation: "font-family changes the typeface, e.g., Arial, Times New Roman, etc.", topic: "Typography" },
  { question: "Which property makes text bold?", options: ["font-style: bold", "text-weight: bold", "font-weight: bold", "bold: true"], correct: 2, explanation: "font-weight: bold or font-weight: 700 makes text bold.", topic: "Typography" },
  { question: "What does font-size: 16px mean?", options: ["16 cm font", "16 pixel font size", "16% font size", "16 point font"], correct: 1, explanation: "px = pixels, so 16px means a font size of 16 pixels.", topic: "Typography" },
  { question: "How do you use Google Fonts in CSS?", options: ["Via @import or <link> tag", "Via font-download property", "Via JavaScript only", "By downloading into the CSS file"], correct: 0, explanation: "Google Fonts are imported using @import url() or an HTML <link> tag.", topic: "Typography" },

  // ─── Text Styles ───
  { question: "Which property transforms text to uppercase?", options: ["text-case: upper", "text-transform: uppercase", "font-case: caps", "letter-style: upper"], correct: 1, explanation: "text-transform: uppercase converts all letters to capitals.", topic: "Text Styles" },
  { question: "Which property adds an underline to text?", options: ["text-style: underline", "font-decoration: underline", "text-decoration: underline", "underline: true"], correct: 2, explanation: "text-decoration: underline adds a line under the text.", topic: "Text Styles" },
  { question: "What does text-align: center do?", options: ["Centers the element itself", "Horizontally centers the text/inline content", "Vertically centers content", "Centers images only"], correct: 1, explanation: "text-align only aligns text and inline content horizontally — not the element itself.", topic: "Text Styles" },
  { question: "What does the letter-spacing property control?", options: ["Space between lines", "Space between words", "Space between individual letters", "Space between paragraphs"], correct: 2, explanation: "letter-spacing controls the space between individual characters.", topic: "Text Styles" },

  // ─── Margin ───
  { question: "What does the shorthand margin: 10px 20px mean?", options: ["Top-bottom: 10px, left-right: 20px", "All sides alternate 10px and 20px", "Left: 10px, right: 20px", "Top: 10px, bottom: 20px"], correct: 0, explanation: "With 2 values: the first applies to top/bottom, the second applies to left/right.", topic: "Margin" },
  { question: "How do you horizontally center a block element?", options: ["text-align: center", "margin: 0 auto", "align: center", "float: center"], correct: 1, explanation: "margin: 0 auto centers a fixed-width block element horizontally.", topic: "Margin" },
  { question: "When does margin collapse occur?", options: ["When padding is zero", "When two vertical margins of adjacent blocks meet", "When the element is hidden", "It never happens"], correct: 1, explanation: "When two block elements' vertical margins meet, only the larger margin applies — this is called margin collapse.", topic: "Margin" },

  // ─── Div and Span ───
  { question: "What type of element is <div>?", options: ["Inline element", "Block-level element", "Inline-block element", "Flex element"], correct: 1, explanation: "<div> is a block-level element that takes up the full available row width.", topic: "Div and Span" },
  { question: "What is the difference between <span> and <div>?", options: ["No difference", "<span> is inline, <div> is block", "<div> is inline, <span> is block", "<span> is only for images"], correct: 1, explanation: "<span> is an inline element (used inside text), <div> is a block-level element.", topic: "Div and Span" },

  // ─── ID and Class ───
  { question: "What is the syntax for an ID selector?", options: [".header", "#header", "*header", "@header"], correct: 1, explanation: "ID selectors start with #. An ID should only be used once per page.", topic: "ID and Class" },
  { question: "What is the syntax for a class selector?", options: ["#active", ".active", "active", "*active"], correct: 1, explanation: "Class selectors start with a dot (.). A class can be applied to multiple elements.", topic: "ID and Class" },
  { question: "What is the key difference between an ID and a Class?", options: ["No difference", "ID is unique (used once per page), Class can be reused on many elements", "Class is unique, ID can be reused", "ID is only for divs"], correct: 1, explanation: "An ID identifies one unique element per page, while a class can be applied to many elements.", topic: "ID and Class" },

  // ─── Backgrounds ───
  { question: "Which property sets a background image?", options: ["background-src", "background-image", "bg-image", "image-url"], correct: 1, explanation: "background-image: url('path/to/image.jpg') sets the background image of an element.", topic: "Backgrounds" },
  { question: "What does background-repeat: no-repeat do?", options: ["Repeats the image", "Shows the image only once without tiling", "Stretches the image", "Hides the image"], correct: 1, explanation: "no-repeat prevents the background image from tiling.", topic: "Backgrounds" },
  { question: "What does background-size: cover do?", options: ["Keeps the image at its original size", "Scales the image to cover the container without distortion", "Tiles the image", "Hides the image"], correct: 1, explanation: "cover scales the image to fully cover the container while maintaining its aspect ratio.", topic: "Backgrounds" },

  // ─── Width and Size ───
  { question: "What does the max-width property do?", options: ["Sets the minimum width", "Limits the maximum width of an element", "Gives the element full width", "Sets width to auto"], correct: 1, explanation: "max-width prevents an element's width from exceeding a certain limit.", topic: "Width and Size" },
  { question: "What does width: 100% mean?", options: ["Full screen width", "Full width of the parent element", "Full viewport width", "Full content width"], correct: 1, explanation: "100% is relative to the parent element's width.", topic: "Width and Size" },

  // ─── Box Model ───
  { question: "What is the correct order of the CSS Box Model from inside to outside?", options: ["Content > Margin > Padding > Border", "Content > Border > Padding > Margin", "Content > Padding > Border > Margin", "Padding > Content > Border > Margin"], correct: 2, explanation: "Box Model from inside to outside: Content → Padding → Border → Margin.", topic: "Box Model" },
  { question: "What is the default box-sizing in CSS?", options: ["border-box", "padding-box", "content-box", "margin-box"], correct: 2, explanation: "Default is content-box — width applies only to content; padding and border are added on top.", topic: "Box Model" },
  { question: "Width: 200px, Padding: 20px, Border: 5px. What is the total width with 'content-box'?", options: ["200px", "225px", "250px", "240px"], correct: 2, explanation: "Total = 200 (content) + 40 (padding L+R) + 10 (border L+R) = 250px.", topic: "Box Model" },
  { question: "What is the advantage of box-sizing: border-box?", options: ["Element becomes larger", "Padding and border are included within the defined width", "Margin is removed", "Border is doubled"], correct: 1, explanation: "With border-box, padding and border fit inside the defined width — the total size stays predictable.", topic: "Box Model" },

  // ─── Nth-Child ───
  { question: "What does 'p:nth-child(2)' select?", options: ["The 2nd paragraph on the page", "Every 2nd paragraph", "A paragraph that is the 2nd child of its parent", "All elements except the 2nd"], correct: 2, explanation: "nth-child(2) selects an element that is exactly the 2nd child of its parent.", topic: "Nth-Child" },
  { question: "How do you select only even-numbered rows in a table?", options: ["tr:nth-child(even)", "tr:nth-child(2n)", "Both A and B", "tr:even"], correct: 2, explanation: "Both ':even' and ':2n' work.", topic: "Nth-Child" },
  { question: "What does 'li:nth-child(3n+1)' select?", options: ["First 3 list items", "Items 1, 4, 7, 10, etc.", "Only 4th item", "Every 3rd starting from 3rd"], correct: 1, explanation: "Starts at index 1 and repeats every 3.", topic: "Nth-Child" },
  { question: "How do you select the last child of an element?", options: [":end-child", ":last-child", ":final-child", ":nth-child(last)"], correct: 1, explanation: "The ':last-child' pseudo-class represents the last element.", topic: "Nth-Child" },

  // ─── Descendant Selectors ───
  { question: "How do you select all <p> tags inside a <div>?", options: ["div p", "div+p", "div>p", "div.p"], correct: 0, explanation: "Space is descendant selector.", topic: "Descendant Selectors" },
  { question: "What is the difference between 'div > p' and 'div p'?", options: ["No difference", "'div > p' selects only direct children; 'div p' selects all nested descendants", "'div p' selects only direct children", "'div > p' only works with classes"], correct: 1, explanation: "The > (child combinator) targets direct children only.", topic: "Descendant Selectors" },

  // ─── First-of-Type ───
  { question: "What is the difference between 'nth-child' and 'nth-of-type'?", options: ["No difference", "nth-child looks at all siblings, nth-of-type only same tag", "nth-of-type is faster", "nth-child only lists"], correct: 1, explanation: "nth-of-type filters by tag before counting.", topic: "First-of-Type" },
  { question: "What does p:first-of-type select?", options: ["The first paragraph on the entire page", "The first p element within its parent", "Only paragraphs with an ID", "Nothing"], correct: 1, explanation: "first-of-type selects the first element of that type within its parent.", topic: "First-of-Type" },

  // ─── Pseudo Classes ───
  { question: "Which pseudo-class is used to style a hovered element?", options: [":link", ":hover", ":active", ":visited"], correct: 1, explanation: ":hover applies when the mouse cursor is over the element.", topic: "Pseudo Classes" },
  { question: "When does the :focus pseudo-class apply?", options: ["On mouse hover", "When the element is clicked only", "When the element receives focus via keyboard or click", "On page load"], correct: 2, explanation: ":focus applies when an element is focused.", topic: "Pseudo Classes" }
];

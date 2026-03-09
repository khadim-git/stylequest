export const fallbackQuestions = [

  // ─── CSS Introduction ───
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style System", "Colored Style Syntax", "Computer Style Sheets"],
    correct: 0,
    explanation: "CSS stands for Cascading Style Sheets — used to style and layout HTML elements.",
    topic: "CSS Introduction"
  },
  {
    question: "Which tag is used to link an external CSS file to HTML?",
    options: ["<style>", "<script>", "<link>", "<css>"],
    correct: 2,
    explanation: "<link rel='stylesheet' href='style.css'> is used to link an external CSS file.",
    topic: "CSS Introduction"
  },
  {
    question: "Which of the following are valid ways to apply CSS to an HTML document? (Select all that apply)",
    options: ["Inline style attribute", "External .css file via <link>", "<style> tag in <head>", "<css> tag in <body>"],
    correct: [0, 1, 2],
    explanation: "CSS can be applied inline, via external stylesheet, or via internal <style> tag. There is no <css> tag.",
    topic: "CSS Introduction",
    type: "multi"
  },

  // ─── CSS Types ───
  {
    question: "Which type of CSS is most reusable across multiple pages?",
    options: ["Inline CSS", "Internal CSS", "External CSS", "Embedded CSS"],
    correct: 2,
    explanation: "External CSS is a separate .css file that can be linked to multiple HTML pages.",
    topic: "CSS Types"
  },
  {
    question: "What is the priority order of CSS types (highest to lowest)?",
    options: ["External > Internal > Inline", "Inline > Internal > External", "Internal > Inline > External", "All are equal"],
    correct: 1,
    explanation: "Inline CSS has the highest specificity, then internal, then external.",
    topic: "CSS Types"
  },
  {
    question: "Which are advantages of External CSS? (Select all that apply)",
    options: ["One file can style multiple HTML pages", "Keeps HTML clean and separated from styling", "Has higher specificity than inline CSS", "Easy to maintain and update globally"],
    correct: [0, 1, 3],
    explanation: "External CSS is reusable, keeps HTML clean, and is easy to maintain. It does NOT have higher specificity than inline CSS.",
    topic: "CSS Types",
    type: "multi"
  },

  // ─── Tag Selectors ───
  {
    question: "Which selector targets all <p> elements?",
    options: [".p", "#p", "p", "*p"],
    correct: 2,
    explanation: "A tag selector uses the element name directly, like p, h1, div etc.",
    topic: "Tag Selectors"
  },
  {
    question: "Which selector selects every element on the page?",
    options: ["all", "*", "!", "?"],
    correct: 1,
    explanation: "The * (asterisk) is the universal selector that targets every element.",
    topic: "Tag Selectors"
  },
  {
    question: "Which are valid CSS selector types? (Select all that apply)",
    options: ["Tag selector (p)", "Class selector (.box)", "ID selector (#header)", "Style selector (&main)"],
    correct: [0, 1, 2],
    explanation: "Tag, class, and ID selectors are all valid. & is used in SCSS/Sass nesting, not standard CSS.",
    topic: "Tag Selectors",
    type: "multi"
  },

  // ─── Grouping Selectors ───
  {
    question: "What is the correct syntax to style multiple selectors at once?",
    options: ["h1 + h2 + h3 { }", "h1 & h2 & h3 { }", "h1, h2, h3 { }", "h1 | h2 | h3 { }"],
    correct: 2,
    explanation: "Use a comma (,) to group selectors so one rule applies to all of them.",
    topic: "Grouping Selectors"
  },
  {
    question: "What is the benefit of grouping selectors?",
    options: ["Code runs faster", "One rule can be applied to multiple elements", "Only works for classes", "No real benefit"],
    correct: 1,
    explanation: "Grouping avoids code repetition — one rule applies to all grouped elements.",
    topic: "Grouping Selectors"
  },

  // ─── Colors ───
  {
    question: "What does the 'A' in RGBA stand for?",
    options: ["Angle", "Alpha (transparency)", "Array", "Adjust"],
    correct: 1,
    explanation: "In RGBA, A = Alpha channel, ranging from 0 (fully transparent) to 1 (fully opaque).",
    topic: "Colors"
  },
  {
    question: "What color does HEX #000000 represent?",
    options: ["White", "Red", "Black", "Transparent"],
    correct: 2,
    explanation: "#000000 is black and #ffffff is white.",
    topic: "Colors"
  },
  {
    question: "Which are valid CSS color formats? (Select all that apply)",
    options: ["#ff6600", "rgb(255, 100, 0)", "hsl(30, 100%, 50%)", "color(orange)"],
    correct: [0, 1, 2],
    explanation: "HEX, RGB, and HSL are all valid CSS color formats. color(orange) is not valid standard CSS.",
    topic: "Colors",
    type: "multi"
  },

  // ─── Typography ───
  {
    question: "Which property is used to change the font family?",
    options: ["font-style", "font-family", "font-type", "text-family"],
    correct: 1,
    explanation: "font-family changes the typeface, e.g., Arial, Times New Roman, etc.",
    topic: "Typography"
  },
  {
    question: "Which property makes text bold?",
    options: ["font-style: bold", "text-weight: bold", "font-weight: bold", "bold: true"],
    correct: 2,
    explanation: "font-weight: bold or font-weight: 700 makes text bold.",
    topic: "Typography"
  },
  {
    question: "Which properties affect text appearance? (Select all that apply)",
    options: ["font-family", "font-size", "font-weight", "margin"],
    correct: [0, 1, 2],
    explanation: "font-family, font-size, and font-weight all affect how text looks. margin affects spacing around elements.",
    topic: "Typography",
    type: "multi"
  },

  // ─── Text Styles ───
  {
    question: "Which property transforms text to uppercase?",
    options: ["text-case: upper", "text-transform: uppercase", "font-case: caps", "letter-style: upper"],
    correct: 1,
    explanation: "text-transform: uppercase converts all letters to capitals.",
    topic: "Text Styles"
  },
  {
    question: "What does the letter-spacing property control?",
    options: ["Space between lines", "Space between words", "Space between individual letters", "Space between paragraphs"],
    correct: 2,
    explanation: "letter-spacing controls the space between individual characters.",
    topic: "Text Styles"
  },
  {
    question: "Which are valid values for text-decoration? (Select all that apply)",
    options: ["underline", "overline", "line-through", "bold"],
    correct: [0, 1, 2],
    explanation: "text-decoration accepts underline, overline, and line-through. bold is a font-weight value.",
    topic: "Text Styles",
    type: "multi"
  },

  // ─── Margin ───
  {
    question: "How do you horizontally center a block element?",
    options: ["text-align: center", "margin: 0 auto", "align: center", "float: center"],
    correct: 1,
    explanation: "margin: 0 auto centers a fixed-width block element horizontally.",
    topic: "Margin"
  },
  {
    question: "What does the shorthand margin: 10px 20px mean?",
    options: ["Top-bottom: 10px, left-right: 20px", "All sides alternate", "Left: 10px, right: 20px", "Top: 10px, bottom: 20px"],
    correct: 0,
    explanation: "With 2 values: first applies to top/bottom, second applies to left/right.",
    topic: "Margin"
  },
  {
    question: "Which are true about CSS margins? (Select all that apply)",
    options: ["Margin is outside the border", "margin: auto can center a block element", "Negative margin values are valid", "Margin adds background color"],
    correct: [0, 1, 2],
    explanation: "Margin is outside the border, auto centers block elements, and negative margins are valid. Margin is transparent.",
    topic: "Margin",
    type: "multi"
  },

  // ─── Div and Span ───
  {
    question: "What is the difference between <span> and <div>?",
    options: ["No difference", "<span> is inline, <div> is block", "<div> is inline, <span> is block", "<span> is only for images"],
    correct: 1,
    explanation: "<span> is an inline element (used inside text), <div> is a block-level element.",
    topic: "Div and Span"
  },
  {
    question: "What type of element is <div>?",
    options: ["Inline element", "Block-level element", "Inline-block element", "Flex element"],
    correct: 1,
    explanation: "<div> is a block-level element that takes up the full available row width.",
    topic: "Div and Span"
  },

  // ─── ID and Class ───
  {
    question: "What is the key difference between an ID and a Class?",
    options: ["No difference", "ID is unique (once per page), Class can be reused on many elements", "Class is unique, ID can be reused", "ID is only for divs"],
    correct: 1,
    explanation: "An ID identifies one unique element per page, while a class can be applied to many elements.",
    topic: "ID and Class"
  },
  {
    question: "What is the syntax for a class selector?",
    options: ["#active", ".active", "active", "*active"],
    correct: 1,
    explanation: "Class selectors start with a dot (.). A class can be applied to multiple elements.",
    topic: "ID and Class"
  },
  {
    question: "Which statements about ID vs Class are correct? (Select all that apply)",
    options: ["An ID should be unique per page", "A class can be used on multiple elements", "ID has higher specificity than class", "A class selector uses # prefix"],
    correct: [0, 1, 2],
    explanation: "IDs should be unique, classes can be reused, and IDs have higher specificity. Class uses . (dot), not #.",
    topic: "ID and Class",
    type: "multi"
  },

  // ─── Backgrounds ───
  {
    question: "What does background-size: cover do?",
    options: ["Keeps image at original size", "Scales image to cover the container without distortion", "Tiles the image", "Hides the image"],
    correct: 1,
    explanation: "cover scales the image to fully cover the container while maintaining aspect ratio.",
    topic: "Backgrounds"
  },
  {
    question: "What does background-repeat: no-repeat do?",
    options: ["Repeats the image", "Shows the image only once without tiling", "Stretches the image", "Hides the image"],
    correct: 1,
    explanation: "no-repeat prevents the background image from tiling.",
    topic: "Backgrounds"
  },
  {
    question: "Which are valid values for background-size? (Select all that apply)",
    options: ["cover", "contain", "100px 200px", "fill-screen"],
    correct: [0, 1, 2],
    explanation: "cover, contain, and specific dimensions are valid. 'fill-screen' is not a CSS value.",
    topic: "Backgrounds",
    type: "multi"
  },

  // ─── Width and Size ───
  {
    question: "What does the max-width property do?",
    options: ["Sets the minimum width", "Limits the maximum width of an element", "Gives element full width", "Sets width to auto"],
    correct: 1,
    explanation: "max-width prevents an element's width from exceeding a certain limit.",
    topic: "Width and Size"
  },
  {
    question: "What does width: 100% mean?",
    options: ["Full screen width", "Full width of the parent element", "Full viewport width", "Full content width"],
    correct: 1,
    explanation: "100% is relative to the parent element's width.",
    topic: "Width and Size"
  },

  // ─── Box Model ───
  {
    question: "What is the correct order of the CSS Box Model (inside to outside)?",
    options: ["Content > Margin > Padding > Border", "Content > Border > Padding > Margin", "Content > Padding > Border > Margin", "Padding > Content > Border > Margin"],
    correct: 2,
    explanation: "Box Model from inside to outside: Content → Padding → Border → Margin.",
    topic: "Box Model"
  },
  {
    question: "Width: 200px, Padding: 20px, Border: 5px. Total width with 'content-box'?",
    options: ["200px", "225px", "250px", "240px"],
    correct: 2,
    explanation: "Total = 200 (content) + 40 (padding L+R) + 10 (border L+R) = 250px.",
    topic: "Box Model"
  },
  {
    question: "What is the advantage of box-sizing: border-box?",
    options: ["Element becomes larger", "Padding and border are included within the defined width", "Margin is removed", "Border is doubled"],
    correct: 1,
    explanation: "With border-box, padding and border fit inside the defined width — total size stays predictable.",
    topic: "Box Model"
  },
  {
    question: "Which are parts of the CSS Box Model? (Select all that apply)",
    options: ["Content", "Padding", "Border", "Shadow"],
    correct: [0, 1, 2],
    explanation: "The Box Model consists of Content, Padding, Border, and Margin. Shadow is not a part of the Box Model.",
    topic: "Box Model",
    type: "multi"
  },

  // ─── Nth-Child ───
  {
    question: "What does 'p:nth-child(2)' select?",
    options: ["2nd paragraph on the page", "Every 2nd paragraph", "Paragraph that is the 2nd child of its parent", "All except 2nd"],
    correct: 2,
    explanation: "nth-child(2) selects an element that is exactly the 2nd child of its parent.",
    topic: "Nth-Child"
  },
  {
    question: "What does 'li:nth-child(3n+1)' select?",
    options: ["First 3 list items", "Items at positions 1, 4, 7, 10...", "Only the 4th item", "Every 3rd item starting from 3rd"],
    correct: 1,
    explanation: "The formula 3n+1 selects items at positions 1, 4, 7, 10...",
    topic: "Nth-Child"
  },
  {
    question: "How do you select even rows of a table?",
    options: ["tr:nth-child(even)", "tr:nth-child(2n)", "Both A and B", "tr:even"],
    correct: 2,
    explanation: "Both :nth-child(even) and :nth-child(2n) select even-numbered rows.",
    topic: "Nth-Child"
  },

  // ─── Descendant Selectors ───
  {
    question: "What is the difference between 'div > p' and 'div p'?",
    options: ["No difference", "'div > p' selects only direct children; 'div p' selects all nested descendants", "'div p' selects only direct children", "'div > p' only works with classes"],
    correct: 1,
    explanation: "The > (child combinator) targets direct children only, while space targets all nested levels.",
    topic: "Descendant Selectors"
  },
  {
    question: "Which CSS combinators are valid? (Select all that apply)",
    options: ["div p (descendant)", "div > p (child)", "div + p (adjacent sibling)", "div & p"],
    correct: [0, 1, 2],
    explanation: "Descendant (space), child (>), and adjacent sibling (+) are valid CSS combinators. & is Sass syntax.",
    topic: "Descendant Selectors",
    type: "multi"
  },

  // ─── First-of-Type ───
  {
    question: "What is the difference between 'nth-child' and 'nth-of-type'?",
    options: ["No difference", "nth-child counts all siblings; nth-of-type counts only same-tag siblings", "nth-of-type is faster", "nth-child is only for lists"],
    correct: 1,
    explanation: "nth-of-type filters by tag type before counting, nth-child counts all children regardless of tag.",
    topic: "First-of-Type"
  },
  {
    question: "What does p:first-of-type select?",
    options: ["First paragraph on the entire page", "First p element within its parent", "Only paragraphs with an ID", "Nothing"],
    correct: 1,
    explanation: "first-of-type selects the first element of that type within its parent container.",
    topic: "First-of-Type"
  },

  // ─── Pseudo Classes ───
  {
    question: "When does the :focus pseudo-class apply?",
    options: ["On mouse hover", "When clicked only", "When element receives focus via keyboard or click", "On page load"],
    correct: 2,
    explanation: ":focus applies when an element is focused, such as clicking or tabbing into an input field.",
    topic: "Pseudo Classes"
  },
  {
    question: "Which are valid CSS pseudo-classes? (Select all that apply)",
    options: [":hover", ":focus", ":visited", ":bold"],
    correct: [0, 1, 2],
    explanation: ":hover, :focus, and :visited are valid pseudo-classes. :bold does not exist.",
    topic: "Pseudo Classes",
    type: "multi"
  },
  {
    question: "Which pseudo-class is used to style a hovered element?",
    options: [":link", ":hover", ":active", ":visited"],
    correct: 1,
    explanation: ":hover applies when the mouse cursor is positioned over the element.",
    topic: "Pseudo Classes"
  },

  // ─── Borders ───
  {
    question: "In 'border: 2px solid red', what three things are defined?",
    options: ["Width only", "Width, style, and color", "Style and color only", "Color only"],
    correct: 1,
    explanation: "The border shorthand defines: width (2px), style (solid), and color (red).",
    topic: "Borders"
  },
  {
    question: "Which are valid border-style values? (Select all that apply)",
    options: ["solid", "dashed", "dotted", "curved"],
    correct: [0, 1, 2],
    explanation: "solid, dashed, and dotted are valid border-style values. 'curved' is not valid.",
    topic: "Borders",
    type: "multi"
  },

  // ─── CSS Units ───
  {
    question: "What is the 'em' unit relative to?",
    options: ["Root element's font size", "Viewport width", "Parent element's font size", "Screen resolution"],
    correct: 2,
    explanation: "em is relative to the font size of the parent element.",
    topic: "CSS Units"
  },
  {
    question: "What does the 'vw' unit represent?",
    options: ["Vertical width", "1% of the viewport width", "Variable width", "Vector width"],
    correct: 1,
    explanation: "1vw = 1% of the viewport width, so 100vw = full viewport width.",
    topic: "CSS Units"
  },
  {
    question: "Which are relative CSS units? (Select all that apply)",
    options: ["em", "rem", "vw", "px"],
    correct: [0, 1, 2],
    explanation: "em, rem, and vw are relative units. px is an absolute unit.",
    topic: "CSS Units",
    type: "multi"
  },

  // ─── List Style ───
  {
    question: "How do you remove bullets/markers from a list?",
    options: ["list-style: remove", "list-style: none", "bullet: hidden", "marker: off"],
    correct: 1,
    explanation: "list-style: none completely removes list markers/bullets.",
    topic: "List Style"
  },
  {
    question: "Which are valid list-style-type values? (Select all that apply)",
    options: ["disc", "circle", "upper-roman", "triangle"],
    correct: [0, 1, 2],
    explanation: "disc, circle, and upper-roman are valid. 'triangle' is not a valid value.",
    topic: "List Style",
    type: "multi"
  },

  // ─── Line-Height ───
  {
    question: "What does line-height: 1.5 mean?",
    options: ["1.5px height", "1.5 times the font size", "1.5cm height", "150px height"],
    correct: 1,
    explanation: "A unitless value is a multiplier of the font-size, so 1.5 = font-size × 1.5.",
    topic: "Line-Height"
  },
  {
    question: "Which property controls the spacing between lines of text?",
    options: ["text-spacing", "line-height", "row-height", "font-spacing"],
    correct: 1,
    explanation: "line-height controls the vertical space between lines of text.",
    topic: "Line-Height"
  },

  // ─── Specificity ───
  {
    question: "Which selector has the highest specificity?",
    options: ["Class selector", "Tag selector", "ID selector", "Universal selector"],
    correct: 2,
    explanation: "ID selector (#id) has specificity (0,1,0,0), higher than class (0,0,1,0) or tag (0,0,0,1).",
    topic: "Specificity"
  },
  {
    question: "What does CSS Specificity determine?",
    options: ["Page load speed", "Which CSS rule wins when there is a conflict", "Font size", "Animation speed"],
    correct: 1,
    explanation: "When multiple rules target the same element and conflict, specificity decides which rule is applied.",
    topic: "Specificity"
  },
  {
    question: "Which factors increase CSS specificity? (Select all that apply)",
    options: ["Using an ID selector", "Using a class selector", "Using inline styles", "Using the universal selector *"],
    correct: [0, 1, 2],
    explanation: "ID, class, and inline styles all increase specificity. The universal selector (*) has zero specificity.",
    topic: "Specificity",
    type: "multi"
  },

  // ─── Float and Clear ───
  {
    question: "What does float: left do?",
    options: ["Removes left margin", "Floats element left so content wraps around its right", "Aligns text to the left", "Positions element to the left"],
    correct: 1,
    explanation: "float: left moves the element to the left and allows surrounding content to wrap around its right.",
    topic: "Float and Clear"
  },
  {
    question: "Which are valid values for the float property? (Select all that apply)",
    options: ["left", "right", "none", "center"],
    correct: [0, 1, 2],
    explanation: "left, right, and none are valid float values. 'center' is not a valid float value.",
    topic: "Float and Clear",
    type: "multi"
  },

  // ─── Display Properties ───
  {
    question: "What is the difference between display: none and visibility: hidden?",
    options: ["No difference", "display:none removes element from layout; visibility:hidden hides it but keeps space", "visibility:hidden deletes the element", "display:none makes element transparent"],
    correct: 1,
    explanation: "display:none removes from layout entirely; visibility:hidden makes it invisible but space remains.",
    topic: "Display Properties"
  },
  {
    question: "What does display: inline-block allow?",
    options: ["Makes element a block", "Keeps inline flow while allowing width and height to be set", "Floats the element", "Puts element in a grid"],
    correct: 1,
    explanation: "inline-block flows inline like text but lets you define width and height.",
    topic: "Display Properties"
  },
  {
    question: "Which are valid values for the display property? (Select all that apply)",
    options: ["block", "inline", "flex", "overlap"],
    correct: [0, 1, 2],
    explanation: "block, inline, and flex are valid display values. 'overlap' is not a CSS display value.",
    topic: "Display Properties",
    type: "multi"
  },

  // ─── Flexbox ───
  {
    question: "What is the default value of the 'flex-direction' property?",
    options: ["column", "row", "row-reverse", "column-reverse"],
    correct: 1,
    explanation: "Default flex-direction is row — items arranged horizontally left to right.",
    topic: "Flexbox"
  },
  {
    question: "What does justify-content: space-between do?",
    options: ["Centers all items", "First item at start, last at end, equal space between rest", "Equal space around all items", "Stretches all items"],
    correct: 1,
    explanation: "space-between: first item at container start, last at the end, remaining space distributed equally between.",
    topic: "Flexbox"
  },
  {
    question: "What does 'flex-shrink: 0' do to a flex item?",
    options: ["Item disappears", "Prevents the item from shrinking below its base size", "Makes the item grow to fill space", "Sets item width to 0"],
    correct: 1,
    explanation: "flex-shrink: 0 means the item will never shrink — it always keeps its defined or content size.",
    topic: "Flexbox"
  },
  {
    question: "How can you center an item both horizontally and vertically using Flexbox?",
    options: ["margin: auto on the item", "justify-content: center AND align-items: center on container", "text-align: center and vertical-align: middle", "position: center on the item"],
    correct: 1,
    explanation: "Setting justify-content: center and align-items: center on the flex container centers the child both ways.",
    topic: "Flexbox"
  },
  {
    question: "What does 'align-self' do?",
    options: ["Aligns the entire container", "Overrides align-items for one specific flex item", "Centers text inside an item", "Sets the item's main axis alignment"],
    correct: 1,
    explanation: "align-self lets a single flex item override the container's align-items value for itself only.",
    topic: "Flexbox"
  },
  {
    question: "What does 'flex-wrap: wrap' do?",
    options: ["Wraps text inside a flex item", "Allows flex items to move onto multiple lines when they overflow", "Wraps the container around children", "Prevents items from overflowing"],
    correct: 1,
    explanation: "flex-wrap: wrap lets items break onto a new line when there is not enough space.",
    topic: "Flexbox"
  },
  {
    question: "What is the difference between align-items and align-content?",
    options: ["They are identical", "align-items aligns a single line; align-content distributes multiple lines (needs flex-wrap)", "align-content is for columns only", "align-items controls the main axis"],
    correct: 1,
    explanation: "align-items works on a single line; align-content distributes space between multiple wrapped lines.",
    topic: "Flexbox"
  },
  {
    question: "Which properties are applied to the FLEX CONTAINER (parent)? (Select all that apply)",
    options: ["display: flex", "justify-content", "align-items", "flex-grow"],
    correct: [0, 1, 2],
    explanation: "display:flex, justify-content, and align-items are container properties. flex-grow is an item property.",
    topic: "Flexbox",
    type: "multi"
  },
  {
    question: "Which properties are applied to FLEX ITEMS (children)? (Select all that apply)",
    options: ["flex-grow", "flex-shrink", "align-self", "justify-content"],
    correct: [0, 1, 2],
    explanation: "flex-grow, flex-shrink, and align-self are item-level properties. justify-content is a container property.",
    topic: "Flexbox",
    type: "multi"
  },
  {
    question: "Which statements about flex-wrap are correct? (Select all that apply)",
    options: ["Default value is nowrap", "wrap allows items to go to the next line", "wrap-reverse wraps items in reverse direction", "flex-wrap is applied on flex items"],
    correct: [0, 1, 2],
    explanation: "Default is nowrap, wrap enables multi-line, wrap-reverse reverses the direction. flex-wrap is a CONTAINER property.",
    topic: "Flexbox",
    type: "multi"
  },

  // ─── Grid ───
  {
    question: "What does the 'fr' unit represent in CSS Grid?",
    options: ["Frequency", "A fraction of the available space", "Fixed radius", "Font ratio"],
    correct: 1,
    explanation: "fr = fractional unit, divides the remaining space in the grid container into fractions.",
    topic: "Grid"
  },
  {
    question: "What is the difference between auto-fit and auto-fill in CSS Grid?",
    options: ["They are identical", "auto-fit collapses empty tracks; auto-fill keeps them", "auto-fill collapses empty tracks; auto-fit keeps them", "auto-fit is for rows, auto-fill for columns"],
    correct: 1,
    explanation: "auto-fit collapses empty columns so items stretch; auto-fill keeps empty columns at their minimum size.",
    topic: "Grid"
  },
  {
    question: "What does 'grid-column: 1 / 3' mean?",
    options: ["Item is in column 3, row 1", "Item spans from column line 1 to line 3 (covers 2 columns)", "Item takes 1/3 of grid width", "Item is placed in the 3rd column"],
    correct: 1,
    explanation: "grid-column: 1 / 3 means the item starts at line 1 and ends at line 3 — spanning 2 columns.",
    topic: "Grid"
  },
  {
    question: "What does 'grid-column: 1 / -1' do?",
    options: ["Item is in first and last column", "Item spans the entire row from first to last line", "Item is removed from grid", "Item spans 1 column"],
    correct: 1,
    explanation: "-1 is the last grid line, so 1 / -1 spans full width across all columns.",
    topic: "Grid"
  },
  {
    question: "What does 'place-items: center' do in a Grid container?",
    options: ["Centers the grid itself on the page", "Shorthand for align-items + justify-items both set to center", "Centers only text inside grid items", "Moves items to the center column"],
    correct: 1,
    explanation: "place-items is shorthand for align-items + justify-items. place-items: center centers items both ways.",
    topic: "Grid"
  },
  {
    question: "What does 'minmax(200px, 1fr)' mean?",
    options: ["Column is exactly 200px", "Column is minimum 200px, maximum 1fr of available space", "Column is maximum 200px", "Column is 1fr divided by 200"],
    correct: 1,
    explanation: "minmax(min, max) — column won't go below 200px but can grow up to its fair share (1fr).",
    topic: "Grid"
  },
  {
    question: "In grid-template-areas, what does a period (.) represent?",
    options: ["End of a row", "An empty grid cell", "A full-width area", "A comment"],
    correct: 1,
    explanation: "A period (.) in grid-template-areas represents an empty/unnamed cell.",
    topic: "Grid"
  },
  {
    question: "Which properties are applied to GRID ITEMS (children)? (Select all that apply)",
    options: ["grid-column", "grid-row", "grid-area", "grid-template-columns"],
    correct: [0, 1, 2],
    explanation: "grid-column, grid-row, and grid-area are item-level placement properties. grid-template-columns is a container property.",
    topic: "Grid",
    type: "multi"
  },
  {
    question: "Which are correct about 'minmax()' in CSS Grid? (Select all that apply)",
    options: ["Sets a minimum and maximum size for a track", "Can be used inside repeat()", "minmax(200px, 1fr) means min 200px, max 1fr", "minmax() is only for rows"],
    correct: [0, 1, 2],
    explanation: "minmax sets min/max track sizes, works inside repeat(), and takes min then max. It works for both rows AND columns.",
    topic: "Grid",
    type: "multi"
  },
  {
    question: "Which are correct about 'auto-fit' vs 'auto-fill'? (Select all that apply)",
    options: ["Both create as many columns as can fit", "auto-fit collapses empty tracks so items expand", "auto-fill keeps empty tracks at their minimum size", "They behave identically when the grid is completely full"],
    correct: [0, 1, 2, 3],
    explanation: "Both fill columns. auto-fit collapses empties (items expand), auto-fill keeps them. When grid is full, both behave the same.",
    topic: "Grid",
    type: "multi"
  },

  // ─── Visibility ───
  {
    question: "What is the difference between opacity: 0 and display: none?",
    options: ["No difference", "opacity:0 hides visually but keeps space and events; display:none removes from layout", "display:none makes element transparent", "opacity:0 deletes the element"],
    correct: 1,
    explanation: "opacity:0 is invisible but takes space and can be clicked. display:none removes it from layout entirely.",
    topic: "Visibility"
  },
  {
    question: "Which properties can be used to hide an element? (Select all that apply)",
    options: ["display: none", "visibility: hidden", "opacity: 0", "color: transparent"],
    correct: [0, 1, 2],
    explanation: "display:none, visibility:hidden, and opacity:0 all hide an element visually. color:transparent only hides text color.",
    topic: "Visibility",
    type: "multi"
  },

  // ─── Cursor ───
  {
    question: "How do you show a pointer/hand cursor on hover?",
    options: ["cursor: hand", "cursor: pointer", "cursor: click", "mouse: pointer"],
    correct: 1,
    explanation: "cursor: pointer shows the hand icon, typically used for clickable elements.",
    topic: "Cursor"
  },
  {
    question: "Which are valid values for the cursor property? (Select all that apply)",
    options: ["pointer", "default", "not-allowed", "hand-open"],
    correct: [0, 1, 2],
    explanation: "pointer, default, and not-allowed are valid cursor values. 'hand-open' is not standard CSS.",
    topic: "Cursor",
    type: "multi"
  },

  // ─── calc() ───
  {
    question: "What does width: calc(100% - 40px) mean?",
    options: ["100px minus 40px", "Parent width minus 40 pixels", "Fixed 40px width", "Full 100% width"],
    correct: 1,
    explanation: "100% is the full parent width — subtracting 40px gives the remaining width for the element.",
    topic: "calc()"
  },
  {
    question: "Which are valid uses of the calc() function? (Select all that apply)",
    options: ["width: calc(100% - 40px)", "padding: calc(1rem + 10px)", "font-size: calc(16px * 1.5)", "color: calc(red + blue)"],
    correct: [0, 1, 2],
    explanation: "calc() works for any length/size calculation mixing units. It cannot calculate color values.",
    topic: "calc()",
    type: "multi"
  },

  // ─── Positioning ───
  {
    question: "What is 'position: absolute' relative to?",
    options: ["The <body> tag", "Nearest ancestor with a position other than static", "Always the direct parent", "The viewport"],
    correct: 1,
    explanation: "An absolute element is positioned relative to its nearest non-static positioned ancestor.",
    topic: "Positioning"
  },
  {
    question: "What is 'position: fixed' relative to?",
    options: ["Parent element", "Nearest positioned ancestor", "The viewport", "Screen resolution"],
    correct: 2,
    explanation: "Fixed elements are positioned relative to the viewport and stay in place while scrolling.",
    topic: "Positioning"
  },
  {
    question: "How does 'position: sticky' work?",
    options: ["Sticks permanently", "Acts like relative until scroll threshold, then sticks like fixed", "Always sticks to its parent", "Identical to absolute"],
    correct: 1,
    explanation: "Sticky behaves like relative until the scroll threshold is reached, then sticks within its parent.",
    topic: "Positioning"
  },
  {
    question: "Which position values remove an element from the normal document flow? (Select all that apply)",
    options: ["absolute", "fixed", "relative", "sticky"],
    correct: [0, 1],
    explanation: "absolute and fixed remove elements from normal flow. relative and sticky keep the element in flow.",
    topic: "Positioning",
    type: "multi"
  },

  // ─── Z-Index ───
  {
    question: "Why might z-index not work on an element?",
    options: ["Element is too large", "Element has position: static", "Value is too low", "Element is hidden"],
    correct: 1,
    explanation: "z-index only works on positioned elements (relative, absolute, fixed, sticky) — not static.",
    topic: "Z-Index"
  },
  {
    question: "What does z-index control?",
    options: ["Horizontal position", "Vertical position", "Stack order of overlapping elements", "Zoom level"],
    correct: 2,
    explanation: "z-index controls the stacking order of overlapping elements on the Z-axis.",
    topic: "Z-Index"
  },

  // ─── Overflow ───
  {
    question: "What is the difference between overflow: scroll and overflow: auto?",
    options: ["No difference", "scroll always shows scrollbars; auto only shows when content overflows", "auto always shows scrollbars", "scroll hides content"],
    correct: 1,
    explanation: "scroll always renders scrollbars; auto adds them only when content actually overflows.",
    topic: "Overflow"
  },
  {
    question: "Which are valid values for the overflow property? (Select all that apply)",
    options: ["hidden", "scroll", "auto", "clip-all"],
    correct: [0, 1, 2],
    explanation: "hidden, scroll, and auto (and visible) are valid overflow values. 'clip-all' is not valid.",
    topic: "Overflow",
    type: "multi"
  },

  // ─── Multiple Backgrounds ───
  {
    question: "How do you apply multiple backgrounds in CSS?",
    options: ["Write background property multiple times", "Separate values with commas in background-image", "Use multiple background tags", "Use background-list property"],
    correct: 1,
    explanation: "background-image: url(img1.jpg), url(img2.jpg); — multiple backgrounds separated by commas.",
    topic: "Multiple Backgrounds"
  },
  {
    question: "Which background is displayed on top when multiple are defined?",
    options: ["The last one", "The first one", "They are all layered equally", "The largest one"],
    correct: 1,
    explanation: "The first background in the list is rendered on top (foreground), the last is furthest back.",
    topic: "Multiple Backgrounds"
  },

  // ─── Word-Wrap ───
  {
    question: "What does word-wrap: break-word do?",
    options: ["Deletes long words", "Breaks long words to fit inside the container", "Reduces font size", "Hides overflowing text"],
    correct: 1,
    explanation: "break-word allows long words (like URLs) that would overflow to break and wrap onto the next line.",
    topic: "Word-Wrap"
  },
  {
    question: "What is the relationship between overflow-wrap and word-wrap?",
    options: ["They are completely different", "overflow-wrap is the modern standard name for word-wrap", "word-wrap is newer", "No relationship"],
    correct: 1,
    explanation: "overflow-wrap is the modern replacement for word-wrap — both do the same thing.",
    topic: "Word-Wrap"
  },

  // ─── Border-Radius ───
  {
    question: "What shape does border-radius: 50% create on a square element?",
    options: ["Half circle", "A perfect circle", "Only rounded corners", "Diamond shape"],
    correct: 1,
    explanation: "border-radius: 50% on a square element creates a perfect circle.",
    topic: "Border-Radius"
  },
  {
    question: "When providing 4 values to border-radius, what is the order?",
    options: ["Top, right, bottom, left", "Top-left, top-right, bottom-right, bottom-left", "All corners the same", "Width, height, depth, angle"],
    correct: 1,
    explanation: "4 values go clockwise: top-left, top-right, bottom-right, bottom-left.",
    topic: "Border-Radius"
  },

  // ─── Box-Shadow ───
  {
    question: "What is the correct order of values in box-shadow: 2px 4px 6px black?",
    options: ["Color, blur, offset-x, offset-y", "Offset-x, offset-y, blur-radius, color", "Blur, offset-x, offset-y, color", "Color, offset-x, offset-y, blur"],
    correct: 1,
    explanation: "box-shadow order: offset-x, offset-y, blur-radius, spread-radius (optional), color.",
    topic: "Box-Shadow"
  },
  {
    question: "Which values can be included in a box-shadow declaration? (Select all that apply)",
    options: ["offset-x and offset-y", "blur-radius", "spread-radius", "opacity"],
    correct: [0, 1, 2],
    explanation: "box-shadow accepts offset-x, offset-y, blur-radius, spread-radius, and color. Use rgba color for transparency, not opacity.",
    topic: "Box-Shadow",
    type: "multi"
  },

  // ─── Text-Shadow ───
  {
    question: "In text-shadow: 2px 2px 4px black, what does the 4px represent?",
    options: ["Shadow size", "Blur radius", "Offset-x", "Opacity"],
    correct: 1,
    explanation: "The third value is the blur radius — the higher it is, the more blurry/spread the shadow.",
    topic: "Text-Shadow"
  },
  {
    question: "Which values are part of a text-shadow declaration? (Select all that apply)",
    options: ["Horizontal offset", "Vertical offset", "Blur radius", "Spread radius"],
    correct: [0, 1, 2],
    explanation: "text-shadow uses horizontal offset, vertical offset, blur radius, and color. Spread radius is box-shadow only.",
    topic: "Text-Shadow",
    type: "multi"
  },

  // ─── Transforms ───
  {
    question: "What does transform: scale(2) do?",
    options: ["Makes element 2px bigger", "Doubles the element's size", "Moves element by 200%", "Creates 2 copies"],
    correct: 1,
    explanation: "scale(2) doubles the element's size from its original dimensions.",
    topic: "Transforms"
  },
  {
    question: "What does transform: translateX(50px) do?",
    options: ["Moves element 50px down", "Moves element 50px to the right", "Scales element by 50%", "Rotates element 50 degrees"],
    correct: 1,
    explanation: "translateX moves an element horizontally — positive value moves it to the right.",
    topic: "Transforms"
  },
  {
    question: "Which are valid CSS transform functions? (Select all that apply)",
    options: ["rotate()", "scale()", "translateX()", "flip()"],
    correct: [0, 1, 2],
    explanation: "rotate(), scale(), and translateX() are valid transform functions. flip() does not exist in CSS.",
    topic: "Transforms",
    type: "multi"
  },

  // ─── Root Element ───
  {
    question: "What does the :root pseudo-class represent in CSS?",
    options: ["The body element", "The html element", "The head element", "The main element"],
    correct: 1,
    explanation: ":root represents the <html> element and is the best place to declare CSS variables.",
    topic: "Root Element"
  },
  {
    question: "What is the difference between :root and the html selector?",
    options: ["No difference", ":root has higher specificity than html", "html has higher specificity", "They target different elements"],
    correct: 1,
    explanation: ":root is a pseudo-class (specificity 0,1,0,0), higher than the html tag selector (0,0,0,1).",
    topic: "Root Element"
  },

  // ─── CSS Variables ───
  {
    question: "How do you define a CSS variable?",
    options: ["$color: red", "--color: red", "@color: red", "var-color: red"],
    correct: 1,
    explanation: "CSS variables start with double dashes (--), e.g., --primary-color: blue;",
    topic: "CSS Variables"
  },
  {
    question: "What is the correct syntax to use a CSS variable?",
    options: ["color: $primary", "color: --primary", "color: var(--primary)", "color: @primary"],
    correct: 2,
    explanation: "CSS variables are used with the var() function: e.g. color: var(--primary-color);",
    topic: "CSS Variables"
  },
  {
    question: "Which are true about CSS Variables? (Select all that apply)",
    options: ["Defined with -- prefix", "Accessed using var()", "Can be redefined inside specific selectors", "Work the same as Sass variables"],
    correct: [0, 1, 2],
    explanation: "CSS variables use -- prefix, are accessed with var(), and can be overridden in specific scopes. They differ from Sass variables (compiled, not dynamic).",
    topic: "CSS Variables",
    type: "multi"
  },

  // ─── Transitions ───
  {
    question: "What does a CSS Transition do?",
    options: ["Adds keyframe animation", "Makes property changes smooth and gradual", "Teleports an element to a new position", "Removes a style rule"],
    correct: 1,
    explanation: "transition makes style changes (like on hover) animate smoothly instead of snapping instantly.",
    topic: "Transitions"
  },
  {
    question: "In 'transition: all 0.3s ease-in-out', what is 'ease-in-out'?",
    options: ["Transition direction", "A timing function defining the speed curve", "Transition delay", "A property name"],
    correct: 1,
    explanation: "ease-in-out is a timing function — starts slow, speeds up in middle, slows at the end.",
    topic: "Transitions"
  },
  {
    question: "Which are valid timing functions for CSS transitions? (Select all that apply)",
    options: ["ease", "linear", "ease-in-out", "fast-slow"],
    correct: [0, 1, 2],
    explanation: "ease, linear, ease-in, ease-out, ease-in-out, and cubic-bezier() are all valid. 'fast-slow' does not exist.",
    topic: "Transitions",
    type: "multi"
  },
];
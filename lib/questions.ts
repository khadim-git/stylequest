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

  // ─── CSS Introduction (extra) ───
  {
    question: "Which property changes the background color of an element?",
    options: ["color", "bg-color", "background-color", "fill"],
    correct: 2,
    explanation: "background-color sets the background color of an element.",
    topic: "CSS Introduction"
  },
  {
    question: "What does the 'color' property control?",
    options: ["Background color", "Border color", "Text/foreground color", "Shadow color"],
    correct: 2,
    explanation: "The color property sets the color of text content inside an element.",
    topic: "CSS Introduction"
  },
  {
    question: "Which statements about CSS are correct? (Select all that apply)",
    options: ["CSS stands for Cascading Style Sheets", "CSS can style colors, fonts, and layouts", "CSS is a programming language", "CSS rules consist of a selector and declaration block"],
    correct: [0, 1, 3],
    explanation: "CSS is a styling language (not a programming language). It uses selector + declaration block syntax.",
    topic: "CSS Introduction",
    type: "multi"
  },

  // ─── CSS Types (extra) ───
  {
    question: "Where is Internal CSS defined?",
    options: ["In an external file", "Inside the <body>", "Inside the <head> in a <style> tag", "In a JavaScript file"],
    correct: 2,
    explanation: "Internal CSS is placed inside a <style> tag within the <head> section.",
    topic: "CSS Types"
  },
  {
    question: "Where is Inline CSS written?",
    options: ["Inside the <head> tag", "In the style attribute of an HTML element", "In an external .css file", "Below the <body> tag"],
    correct: 1,
    explanation: "Inline CSS is written directly in the HTML element's style attribute. e.g. <p style='color:red'>",
    topic: "CSS Types"
  },
  {
    question: "Which are true about Inline CSS? (Select all that apply)",
    options: ["Written in the style attribute", "Has the highest specificity among the 3 types", "Can be reused across multiple pages easily", "Overrides internal and external CSS by default"],
    correct: [0, 1, 3],
    explanation: "Inline CSS is in the style attribute, has highest specificity, and overrides other types. It cannot be reused across pages.",
    topic: "CSS Types",
    type: "multi"
  },

  // ─── Tag Selectors (extra) ───
  {
    question: "What does a tag selector target?",
    options: ["Elements with a specific class", "Elements with a specific ID", "All elements of a specific HTML tag", "Only the first element on the page"],
    correct: 2,
    explanation: "A tag selector like 'p' or 'h1' targets all elements of that HTML tag type.",
    topic: "Tag Selectors"
  },
  {
    question: "Which selector would style all <h1> elements?",
    options: [".h1", "#h1", "h1", "*h1"],
    correct: 2,
    explanation: "Tag selectors use the element name directly without any prefix.",
    topic: "Tag Selectors"
  },

  // ─── Grouping Selectors (extra) ───
  {
    question: "What does 'h1, h2, p { color: red; }' do?",
    options: ["Only styles h1", "Styles h1, h2, and p all with red color", "Creates a selector named h1h2p", "Only works if all three exist on the page"],
    correct: 1,
    explanation: "Comma-separated selectors apply the same rule to all listed elements.",
    topic: "Grouping Selectors"
  },
  {
    question: "Which are true about grouping selectors? (Select all that apply)",
    options: ["Uses comma to separate selectors", "Reduces code repetition", "All selectors must be the same type", "One rule applies to all grouped elements"],
    correct: [0, 1, 3],
    explanation: "Grouping uses commas, reduces repetition, and applies one rule to all. Selectors can be any type (tag, class, ID mixed).",
    topic: "Grouping Selectors",
    type: "multi"
  },

  // ─── Colors (extra) ───
  {
    question: "What is the HEX value for white?",
    options: ["#000000", "#ffffff", "#ff0000", "#cccccc"],
    correct: 1,
    explanation: "#ffffff is white — all three color channels (R, G, B) at maximum.",
    topic: "Colors"
  },
  {
    question: "What does HSL stand for in CSS colors?",
    options: ["Height, Saturation, Lightness", "Hue, Saturation, Lightness", "Hue, Shade, Luminance", "High, Standard, Low"],
    correct: 1,
    explanation: "HSL = Hue (0-360 degrees), Saturation (0-100%), Lightness (0-100%).",
    topic: "Colors"
  },
  {
    question: "Which statements about RGBA are correct? (Select all that apply)",
    options: ["The A stands for Alpha (transparency)", "Alpha value 0 means fully transparent", "Alpha value 1 means fully opaque", "Alpha value can go up to 255"],
    correct: [0, 1, 2],
    explanation: "In RGBA, A = Alpha. 0 = fully transparent, 1 = fully opaque. Alpha ranges from 0 to 1, not 0 to 255.",
    topic: "Colors",
    type: "multi"
  },

  // ─── Typography (extra) ───
  {
    question: "What does font-size: 16px mean?",
    options: ["16 cm font", "16 pixel font size", "16% font size", "16 point font"],
    correct: 1,
    explanation: "px = pixels, so 16px means a font size of 16 pixels.",
    topic: "Typography"
  },
  {
    question: "How do you use Google Fonts in CSS?",
    options: ["Via @import or <link> tag", "Via font-download property", "Via JavaScript only", "By downloading into the CSS file"],
    correct: 0,
    explanation: "Google Fonts are imported using @import url() or an HTML <link> tag.",
    topic: "Typography"
  },
  {
    question: "Which are valid font-weight values? (Select all that apply)",
    options: ["bold", "700", "normal", "thick"],
    correct: [0, 1, 2],
    explanation: "bold, 700, and normal are valid font-weight values. 'thick' is not valid.",
    topic: "Typography",
    type: "multi"
  },
  {
    question: "Which statements about font-family are correct? (Select all that apply)",
    options: ["You can specify multiple fallback fonts", "Fonts with spaces in name need quotes", "font-family can only hold one font", "Generic families like serif are valid values"],
    correct: [0, 1, 3],
    explanation: "font-family accepts a comma-separated fallback list. Multi-word fonts need quotes. Generic families like serif are valid final fallbacks.",
    topic: "Typography",
    type: "multi"
  },

  // ─── Text Styles (extra) ───
  {
    question: "What does text-align: center do?",
    options: ["Centers the element itself", "Horizontally centers the text/inline content", "Vertically centers content", "Centers images only"],
    correct: 1,
    explanation: "text-align only aligns text and inline content horizontally — not the element itself.",
    topic: "Text Styles"
  },
  {
    question: "Which property adds an underline to text?",
    options: ["text-style: underline", "font-decoration: underline", "text-decoration: underline", "underline: true"],
    correct: 2,
    explanation: "text-decoration: underline adds a line under the text.",
    topic: "Text Styles"
  },
  {
    question: "Which are valid values for text-transform? (Select all that apply)",
    options: ["uppercase", "lowercase", "capitalize", "boldcase"],
    correct: [0, 1, 2],
    explanation: "uppercase, lowercase, and capitalize are valid text-transform values. 'boldcase' does not exist.",
    topic: "Text Styles",
    type: "multi"
  },
  {
    question: "Which properties control text spacing? (Select all that apply)",
    options: ["letter-spacing", "word-spacing", "line-height", "font-size"],
    correct: [0, 1, 2],
    explanation: "letter-spacing, word-spacing, and line-height all control spacing. font-size controls scale, not spacing.",
    topic: "Text Styles",
    type: "multi"
  },

  // ─── Margin (extra) ───
  {
    question: "When does margin collapse occur?",
    options: ["When padding is zero", "When two vertical margins of adjacent blocks meet", "When element is hidden", "It never happens"],
    correct: 1,
    explanation: "When two block elements' vertical margins meet, only the larger margin applies — this is margin collapse.",
    topic: "Margin"
  },
  {
    question: "What is the difference between margin and padding?",
    options: ["No difference", "Margin is outside the border; padding is inside between content and border", "Padding is outside; margin is inside", "Both are inside the border"],
    correct: 1,
    explanation: "Margin creates space outside the border. Padding creates space inside the border, between the content and the border.",
    topic: "Margin"
  },
  {
    question: "Which shorthand margin declarations are valid? (Select all that apply)",
    options: ["margin: 10px", "margin: 10px 20px", "margin: 10px 20px 30px 40px", "margin: top right bottom left"],
    correct: [0, 1, 2],
    explanation: "1, 2, or 4 numeric values are valid shorthand. The last option uses words instead of values, which is invalid.",
    topic: "Margin",
    type: "multi"
  },

  // ─── Div and Span (extra) ───
  {
    question: "When should you use <span> instead of <div>?",
    options: ["For block-level containers", "For styling inline portions of text", "For page sections", "For navigation menus"],
    correct: 1,
    explanation: "<span> is used to wrap and style a portion of inline text without breaking the flow.",
    topic: "Div and Span"
  },
  {
    question: "Which are true about <div>? (Select all that apply)",
    options: ["It is a block-level element", "It takes up the full available width by default", "It is used as a generic container", "It displays inline by default"],
    correct: [0, 1, 2],
    explanation: "<div> is block-level, takes full width, and is a generic container. It does NOT display inline by default.",
    topic: "Div and Span",
    type: "multi"
  },

  // ─── ID and Class (extra) ───
  {
    question: "What is the syntax for an ID selector?",
    options: [".header", "#header", "*header", "@header"],
    correct: 1,
    explanation: "ID selectors start with #. An ID should only be used once per page.",
    topic: "ID and Class"
  },
  {
    question: "Can one element have multiple classes?",
    options: ["No, only one class per element", "Yes, separated by spaces in the class attribute", "Yes, but only two maximum", "Only with JavaScript"],
    correct: 1,
    explanation: "Multiple classes can be applied: class='btn primary large' — space-separated in the HTML attribute.",
    topic: "ID and Class"
  },

  // ─── Backgrounds (extra) ───
  {
    question: "Which property sets a background image?",
    options: ["background-src", "background-image", "bg-image", "image-url"],
    correct: 1,
    explanation: "background-image: url('path/to/image.jpg') sets the background image of an element.",
    topic: "Backgrounds"
  },
  {
    question: "What does background-position: center do?",
    options: ["Centers the element on the page", "Positions the background image in the center of the element", "Centers the text inside", "Moves the element to center"],
    correct: 1,
    explanation: "background-position controls where the background image is placed within the element.",
    topic: "Backgrounds"
  },
  {
    question: "Which are background shorthand components? (Select all that apply)",
    options: ["background-color", "background-image", "background-position", "background-font"],
    correct: [0, 1, 2],
    explanation: "background shorthand includes color, image, position, size, repeat, and attachment. background-font does not exist.",
    topic: "Backgrounds",
    type: "multi"
  },

  // ─── Width and Size (extra) ───
  {
    question: "What does min-width do?",
    options: ["Sets maximum width", "Prevents element from shrinking below a certain width", "Sets width to auto", "Hides element if too small"],
    correct: 1,
    explanation: "min-width ensures the element never gets smaller than the specified value.",
    topic: "Width and Size"
  },
  {
    question: "What is the difference between width: 100% and width: 100vw?",
    options: ["They are the same", "100% is relative to parent; 100vw is relative to the viewport", "100vw is relative to parent; 100% is relative to viewport", "Both are relative to the screen"],
    correct: 1,
    explanation: "100% takes the full width of the parent container; 100vw takes the full viewport width regardless of parent.",
    topic: "Width and Size"
  },
  {
    question: "Which are true about max-width? (Select all that apply)",
    options: ["It prevents the element from growing beyond a set size", "It overrides width if the element would exceed max-width", "It works well for responsive design", "It sets the minimum size of an element"],
    correct: [0, 1, 2],
    explanation: "max-width caps the element's size, overrides width when needed, and is great for responsive layouts. It does NOT set the minimum size.",
    topic: "Width and Size",
    type: "multi"
  },

  // ─── Box Model (extra) ───
  {
    question: "What is the default box-sizing in CSS?",
    options: ["border-box", "padding-box", "content-box", "margin-box"],
    correct: 2,
    explanation: "Default is content-box — width applies only to content; padding and border are added on top.",
    topic: "Box Model"
  },
  {
    question: "Which are true about box-sizing: border-box? (Select all that apply)",
    options: ["Padding is included within the defined width", "Border is included within the defined width", "Margin is included within the defined width", "Total size stays predictable"],
    correct: [0, 1, 3],
    explanation: "border-box includes padding and border inside the defined width. Margin is always outside and is NOT included.",
    topic: "Box Model",
    type: "multi"
  },
  {
    question: "With content-box, which values are added ON TOP of the defined width? (Select all that apply)",
    options: ["Padding", "Border", "Margin", "Color"],
    correct: [0, 1, 2],
    explanation: "In content-box, padding, border, and margin are added on top of the defined width. Color does not affect dimensions.",
    topic: "Box Model",
    type: "multi"
  },

  // ─── Nth-Child (extra) ───
  {
    question: "How do you select the last child of an element?",
    options: [":end-child", ":last-child", ":final-child", ":nth-child(last)"],
    correct: 1,
    explanation: "The :last-child pseudo-class selects the last child element of its parent.",
    topic: "Nth-Child"
  },
  {
    question: "How do you select only odd-numbered rows in a table?",
    options: ["tr:nth-child(odd)", "tr:nth-child(2n+1)", "Both A and B", "tr:odd"],
    correct: 2,
    explanation: "Both :nth-child(odd) and :nth-child(2n+1) select odd-numbered rows.",
    topic: "Nth-Child"
  },
  {
    question: "Which are true about :nth-child? (Select all that apply)",
    options: ["It accepts keywords like 'odd' and 'even'", "It accepts formulas like 2n+1", "It counts only same-tag siblings", "It starts counting from 1"],
    correct: [0, 1, 3],
    explanation: "nth-child accepts keywords and formulas, starts at 1. It counts ALL sibling elements regardless of tag — that is nth-of-type.",
    topic: "Nth-Child",
    type: "multi"
  },

  // ─── Descendant Selectors (extra) ───
  {
    question: "How do you select all <p> tags anywhere inside a <div>?",
    options: ["div p", "div+p", "div>p", "div.p"],
    correct: 0,
    explanation: "A space (descendant combinator) selects all matching elements at any depth inside the parent.",
    topic: "Descendant Selectors"
  },
  {
    question: "What does the adjacent sibling combinator (+) do?",
    options: ["Selects all siblings", "Selects only the immediately following sibling", "Selects the parent element", "Selects all descendants"],
    correct: 1,
    explanation: "div + p selects only the first <p> that immediately follows a <div>.",
    topic: "Descendant Selectors"
  },
  {
    question: "What does the general sibling combinator (~) select?",
    options: ["Only the first sibling", "All following siblings of the same type", "The parent element", "Only direct children"],
    correct: 1,
    explanation: "div ~ p selects all <p> elements that are siblings after a <div>, not just the immediate one.",
    topic: "Descendant Selectors",
  },

  // ─── First-of-Type (extra) ───
  {
    question: "What does p:last-of-type select?",
    options: ["Last paragraph on the entire page", "Last p element within its parent", "Only the last paragraph with a class", "Nothing"],
    correct: 1,
    explanation: "last-of-type selects the last element of that specific type within its parent.",
    topic: "First-of-Type"
  },
  {
    question: "Which are true about :first-of-type vs :first-child? (Select all that apply)",
    options: [":first-child selects the first child regardless of type", ":first-of-type selects first of its specific tag within the parent", "Both always select the same element", ":first-of-type filters by tag before selecting"],
    correct: [0, 1, 3],
    explanation: ":first-child is any first child, :first-of-type is first of that specific tag. They can select different elements.",
    topic: "First-of-Type",
    type: "multi"
  },

  // ─── Pseudo Classes (extra) ───
  {
    question: "When does the :visited pseudo-class apply?",
    options: ["When link is hovered", "When the link has already been visited by the user", "When the link is active", "When the link is disabled"],
    correct: 1,
    explanation: ":visited applies to links the user has previously clicked and visited.",
    topic: "Pseudo Classes"
  },
  {
    question: "What does the :active pseudo-class represent?",
    options: ["A hovered element", "An element being clicked/activated at that moment", "A focused input", "A visited link"],
    correct: 1,
    explanation: ":active applies while an element is being activated — e.g. the moment a button is clicked.",
    topic: "Pseudo Classes"
  },
  {
    question: "Which pseudo-classes apply to links? (Select all that apply)",
    options: [":link", ":visited", ":hover", ":checked"],
    correct: [0, 1, 2],
    explanation: ":link (unvisited), :visited, and :hover commonly apply to links. :checked applies to checkboxes/radio inputs.",
    topic: "Pseudo Classes",
    type: "multi"
  },

  // ─── Borders (extra) ───
  {
    question: "How do you add a border only on the bottom of an element?",
    options: ["border: bottom", "border-bottom: 1px solid black", "bottom-border: 1px", "border-side: bottom"],
    correct: 1,
    explanation: "border-bottom sets only the bottom border of an element.",
    topic: "Borders"
  },
  {
    question: "Which value creates a dashed border?",
    options: ["border-style: broken", "border-style: dashed", "border: dash", "border-type: dashes"],
    correct: 1,
    explanation: "border-style: dashed creates a dashed border line.",
    topic: "Borders"
  },
  {
    question: "Which individual border properties exist? (Select all that apply)",
    options: ["border-top", "border-left", "border-right", "border-center"],
    correct: [0, 1, 2],
    explanation: "border-top, border-left, border-right (and border-bottom) are all valid. 'border-center' does not exist.",
    topic: "Borders",
    type: "multi"
  },

  // ─── CSS Units (extra) ───
  {
    question: "Which unit is always relative to the root (<html>) element's font size?",
    options: ["px", "em", "rem", "%"],
    correct: 2,
    explanation: "'rem' is always relative to the root element's font size, unaffected by nesting.",
    topic: "CSS Units"
  },
  {
    question: "What does 1vh equal?",
    options: ["1% of the parent height", "1% of the viewport height", "1 pixel height", "1% of the screen height"],
    correct: 1,
    explanation: "1vh = 1% of the viewport height, so 100vh = the full viewport height.",
    topic: "CSS Units"
  },
  {
    question: "Which are absolute CSS units? (Select all that apply)",
    options: ["px", "cm", "mm", "vw"],
    correct: [0, 1, 2],
    explanation: "px, cm, and mm are absolute units with fixed sizes. vw is relative to the viewport width.",
    topic: "CSS Units",
    type: "multi"
  },
  {
    question: "Which statements about the rem unit are correct? (Select all that apply)",
    options: ["rem is relative to the root element", "rem is not affected by parent element nesting", "rem is relative to the parent element", "rem is consistent across the entire document"],
    correct: [0, 1, 3],
    explanation: "rem is always relative to root (<html>), unaffected by nesting, making it consistent. em (not rem) is relative to parent.",
    topic: "CSS Units",
    type: "multi"
  },

  // ─── List Style (extra) ───
  {
    question: "How do you change list numbers to Roman numerals?",
    options: ["list-type: roman", "list-style-type: upper-roman", "counter: roman", "number: roman"],
    correct: 1,
    explanation: "list-style-type: upper-roman or lower-roman changes list numbering to Roman numerals.",
    topic: "List Style"
  },
  {
    question: "What does list-style-position: inside do?",
    options: ["Hides the list marker", "Places the list marker inside the content box", "Moves list items inside the parent", "Centers list items"],
    correct: 1,
    explanation: "list-style-position: inside makes the marker part of the text flow inside the list item.",
    topic: "List Style"
  },

  // ─── Line-Height (extra) ───
  {
    question: "What is the recommended unitless line-height for body text?",
    options: ["0.5", "1.0", "1.5", "3.0"],
    correct: 2,
    explanation: "A line-height of 1.4–1.6 is generally recommended for body text readability.",
    topic: "Line-Height"
  },
  {
    question: "What happens when line-height is set to 1?",
    options: ["1px height", "Line height equals the font size exactly", "Lines overlap", "Text disappears"],
    correct: 1,
    explanation: "line-height: 1 means the line height is exactly equal to the font-size — no extra space.",
    topic: "Line-Height"
  },

  // ─── Specificity (extra) ───
  {
    question: "What does !important do in CSS?",
    options: ["Adds a comment", "Gives the property the highest priority, overriding specificity", "Deletes the style", "Disables the style"],
    correct: 1,
    explanation: "!important overrides all other declarations regardless of specificity — use sparingly.",
    topic: "Specificity"
  },
  {
    question: "Which has higher specificity: 'div p.highlight' or '#main'?",
    options: ["div p.highlight", "#main", "They are equal", "Depends on order"],
    correct: 1,
    explanation: "#main has specificity (0,1,0,0). div p.highlight has (0,0,1,2). ID always beats class + tag combos.",
    topic: "Specificity"
  },
  {
    question: "Which statements about CSS specificity are correct? (Select all that apply)",
    options: ["ID has higher specificity than class", "Inline styles override external CSS by default", "!important overrides all normal specificity", "More selectors always means higher specificity"],
    correct: [0, 1, 2],
    explanation: "IDs beat classes, inline styles override external, !important wins over normal rules. More selectors don't always win — type matters.",
    topic: "Specificity",
    type: "multi"
  },

  // ─── Float and Clear (extra) ───
  {
    question: "What does clear: both do?",
    options: ["Clears all styles", "Forces element to start below any floated elements on both sides", "Removes float", "Clears the border"],
    correct: 1,
    explanation: "clear: both forces an element to appear below any floating elements on either side.",
    topic: "Float and Clear"
  },
  {
    question: "What is the 'clearfix' technique used for?",
    options: ["Fixing broken CSS", "Making a parent container contain its floated children", "Clearing all CSS rules", "Removing floats from all elements"],
    correct: 1,
    explanation: "Clearfix is a hack to make a parent element wrap around its floated children that would otherwise collapse.",
    topic: "Float and Clear"
  },
  {
    question: "Which are valid values for the clear property? (Select all that apply)",
    options: ["left", "right", "both", "all"],
    correct: [0, 1, 2],
    explanation: "clear: left, right, and both are valid. 'all' is not a valid clear value.",
    topic: "Float and Clear",
    type: "multi"
  },

  // ─── Display Properties (extra) ───
  {
    question: "What is the default display value of a <span>?",
    options: ["block", "inline", "inline-block", "flex"],
    correct: 1,
    explanation: "<span> is an inline element by default — it does not start on a new line.",
    topic: "Display Properties"
  },
  {
    question: "What is the default display value of a <div>?",
    options: ["inline", "block", "flex", "grid"],
    correct: 1,
    explanation: "<div> is a block-level element by default — it starts on a new line and takes full width.",
    topic: "Display Properties"
  },
  {
    question: "Which are correct about display: inline-block? (Select all that apply)",
    options: ["It allows setting width and height", "It stays in inline flow with other elements", "It starts on a new line like block", "It is useful for navigation items"],
    correct: [0, 1, 3],
    explanation: "inline-block allows width/height, flows inline, and is great for nav items. It does NOT start on a new line.",
    topic: "Display Properties",
    type: "multi"
  },

  // ─── Flexbox (extra) ───
  {
    question: "What does 'flex: 1' shorthand expand to?",
    options: ["flex-grow: 1, flex-shrink: 0, flex-basis: auto", "flex-grow: 1, flex-shrink: 1, flex-basis: 0%", "flex-grow: 0, flex-shrink: 1, flex-basis: 1px", "flex-grow: 1, flex-shrink: 1, flex-basis: 100%"],
    correct: 1,
    explanation: "flex: 1 expands to flex-grow: 1, flex-shrink: 1, flex-basis: 0% — item can grow and shrink equally.",
    topic: "Flexbox"
  },
  {
    question: "What value of flex-direction makes items flow top to bottom?",
    options: ["row", "row-reverse", "column", "column-reverse"],
    correct: 2,
    explanation: "flex-direction: column stacks flex items vertically from top to bottom.",
    topic: "Flexbox"
  },
  {
    question: "What does the 'order' property do in Flexbox?",
    options: ["Sets the item size", "Controls the visual order of a specific flex item", "Sets item alignment", "Removes item from flow"],
    correct: 1,
    explanation: "order accepts an integer — lower values appear first. Default is 0 for all items.",
    topic: "Flexbox"
  },
  {
    question: "What is the default value of 'align-items'?",
    options: ["center", "flex-start", "stretch", "baseline"],
    correct: 2,
    explanation: "align-items defaults to stretch — flex items stretch to fill the container's cross-axis height.",
    topic: "Flexbox"
  },
  {
    question: "Which are correct about the 'order' property? (Select all that apply)",
    options: ["Default value for all items is 0", "Lower order values appear first", "Negative values are allowed", "It changes the actual DOM order"],
    correct: [0, 1, 2],
    explanation: "order defaults to 0, lower appears first, negatives are valid. It only changes VISUAL order — DOM order is unchanged.",
    topic: "Flexbox",
    type: "multi"
  },
  {
    question: "Which are valid align-items values? (Select all that apply)",
    options: ["flex-start", "center", "stretch", "space-between"],
    correct: [0, 1, 2],
    explanation: "flex-start, center, and stretch are valid align-items values. space-between is a justify-content value.",
    topic: "Flexbox",
    type: "multi"
  },
  {
    question: "When flex-direction is 'column', which statements are true? (Select all that apply)",
    options: ["The main axis is vertical", "justify-content controls vertical spacing", "align-items controls horizontal alignment", "flex-grow affects the item's height"],
    correct: [0, 1, 2, 3],
    explanation: "In column direction: main axis is vertical, justify-content is vertical, align-items is horizontal, and flex-grow grows height.",
    topic: "Flexbox",
    type: "multi"
  },

  // ─── Grid (extra) ───
  {
    question: "What does 'grid-column: span 2' mean?",
    options: ["Item starts at column 2", "Item spans across 2 columns from its current position", "Item takes 2% of grid width", "Item is placed in grid area 2"],
    correct: 1,
    explanation: "span 2 means the item occupies 2 column tracks from wherever it is placed.",
    topic: "Grid"
  },
  {
    question: "What does 'grid-auto-flow: column' do?",
    options: ["Creates columns automatically", "Places auto-placed items in columns instead of rows", "Makes all columns the same size", "Removes empty columns"],
    correct: 1,
    explanation: "By default grid-auto-flow is row (fills row by row). Setting it to column fills column by column instead.",
    topic: "Grid"
  },
  {
    question: "What does 'grid-template-columns: 1fr 2fr 1fr' create?",
    options: ["3 equal columns", "3 columns where middle is twice as wide as the others", "3 columns of 1px, 2px, 1px", "2 columns"],
    correct: 1,
    explanation: "Total 4fr — first and last take 1fr each (25%), middle takes 2fr (50%).",
    topic: "Grid"
  },
  {
    question: "What does 'gap: 10px 20px' mean in CSS Grid?",
    options: ["Column gap 10px, row gap 20px", "Row gap 10px, column gap 20px", "All gaps alternate 10px and 20px", "Padding 10px, margin 20px"],
    correct: 1,
    explanation: "gap shorthand: first value is row-gap, second is column-gap.",
    topic: "Grid"
  },
  {
    question: "Which property controls the size of implicitly created rows?",
    options: ["grid-template-rows", "grid-auto-rows", "row-size", "grid-implicit-rows"],
    correct: 1,
    explanation: "grid-auto-rows sets the height of rows that are auto-created by the implicit grid.",
    topic: "Grid"
  },
  {
    question: "What is the shorthand for grid-row and grid-column together?",
    options: ["grid-place", "grid-area", "grid-span", "grid-position"],
    correct: 1,
    explanation: "grid-area is the shorthand: grid-row-start / grid-column-start / grid-row-end / grid-column-end.",
    topic: "Grid"
  },
  {
    question: "Which are valid ways to make a grid item span multiple columns? (Select all that apply)",
    options: ["grid-column: 1 / 3", "grid-column: span 2", "grid-column: 1 / span 2", "column-span: 2"],
    correct: [0, 1, 2],
    explanation: "All three CSS Grid syntaxes are valid for spanning columns. column-span is not a standard CSS Grid property.",
    topic: "Grid",
    type: "multi"
  },
  {
    question: "Which are correct about 'gap' in CSS Grid? (Select all that apply)",
    options: ["gap is shorthand for row-gap and column-gap", "gap: 10px sets both row and column gap to 10px", "gap: 10px 20px sets row 10px, column 20px", "gap adds space inside grid items"],
    correct: [0, 1, 2],
    explanation: "gap is the shorthand, one value sets both, two values set row then column. gap adds space BETWEEN tracks, not inside items.",
    topic: "Grid",
    type: "multi"
  },
  {
    question: "Which are true about the implicit grid? (Select all that apply)",
    options: ["Created when items exceed the explicitly defined grid", "grid-auto-rows controls implicit row sizes", "grid-auto-columns controls implicit column sizes", "Implicit grid tracks cannot be styled"],
    correct: [0, 1, 2],
    explanation: "The implicit grid auto-creates tracks for overflow items. grid-auto-rows and grid-auto-columns control those sizes. They CAN be styled.",
    topic: "Grid",
    type: "multi"
  },

  // ─── Visibility (extra) ───
  {
    question: "What is the difference between visibility: hidden and opacity: 0?",
    options: ["No difference", "visibility:hidden blocks pointer events; opacity:0 still allows them", "opacity:0 blocks pointer events", "Both are identical in every way"],
    correct: 1,
    explanation: "visibility:hidden disables pointer events. opacity:0 is invisible but the element can still be clicked.",
    topic: "Visibility"
  },
  {
    question: "Which statements about visibility: hidden are correct? (Select all that apply)",
    options: ["Element is invisible", "Element still takes up space in the layout", "Pointer events are disabled", "Element is removed from the DOM"],
    correct: [0, 1, 2],
    explanation: "visibility:hidden makes element invisible, keeps its space, and disables pointer events. It is NOT removed from the DOM.",
    topic: "Visibility",
    type: "multi"
  },

  // ─── Cursor (extra) ───
  {
    question: "Which property is used to change the mouse cursor appearance?",
    options: ["mouse-style", "cursor", "pointer", "icon"],
    correct: 1,
    explanation: "The cursor property controls the appearance of the mouse pointer.",
    topic: "Cursor"
  },
  {
    question: "What does cursor: not-allowed show?",
    options: ["A loading spinner", "A circle with a line through it, indicating something is disabled", "An arrow cursor", "A text cursor"],
    correct: 1,
    explanation: "cursor: not-allowed shows a circle-with-line icon, typically used on disabled buttons or inputs.",
    topic: "Cursor"
  },

  // ─── calc() (extra) ───
  {
    question: "What does the calc() function allow you to do?",
    options: ["Generate random numbers", "Perform calculations mixing different CSS units", "Get the page height", "Check conditions"],
    correct: 1,
    explanation: "calc() lets you mix different units in calculations, e.g., width: calc(100% - 20px).",
    topic: "calc()"
  },

  // ─── Positioning (extra) ───
  {
    question: "What is the default value of the 'position' property?",
    options: ["relative", "absolute", "static", "fixed"],
    correct: 2,
    explanation: "All elements are position: static by default.",
    topic: "Positioning"
  },
  {
    question: "Which position values remove an element from normal document flow? (Select all that apply)",
    options: ["absolute", "fixed", "relative", "sticky"],
    correct: [0, 1],
    explanation: "absolute and fixed remove elements from normal flow. relative and sticky keep the element in flow.",
    topic: "Positioning",
    type: "multi"
  },
  {
    question: "Which are true about position: relative? (Select all that apply)",
    options: ["Element stays in normal document flow", "Can be offset using top, left, right, bottom", "Creates a positioning context for absolute children", "Removes the element from flow like absolute"],
    correct: [0, 1, 2],
    explanation: "relative keeps element in flow, allows offset properties, and creates a containing block for absolute children. It does NOT remove from flow.",
    topic: "Positioning",
    type: "multi"
  },

  // ─── Z-Index (extra) ───
  {
    question: "Which conditions are required for z-index to work? (Select all that apply)",
    options: ["Element must have a position other than static", "A stacking context must exist", "The element must be a flex item", "Element must have position: relative, absolute, fixed, or sticky"],
    correct: [0, 1, 3],
    explanation: "z-index requires a non-static position and works within stacking contexts. Being a flex item is not required.",
    topic: "Z-Index",
    type: "multi"
  },

  // ─── Overflow (extra) ───
  {
    question: "What does overflow: hidden do?",
    options: ["Hides the entire element", "Clips content that overflows outside the container", "Adds a scrollbar", "Changes the content size"],
    correct: 1,
    explanation: "overflow: hidden clips any content that goes beyond the container's boundaries.",
    topic: "Overflow"
  },
  {
    question: "Which are true about overflow: auto? (Select all that apply)",
    options: ["Adds scrollbars only when content overflows", "Is cleaner than overflow: scroll for most cases", "Always shows scrollbars regardless of content", "Hides overflowing content"],
    correct: [0, 1],
    explanation: "auto adds scrollbars only when needed, making it cleaner than scroll. It does NOT always show scrollbars.",
    topic: "Overflow",
    type: "multi"
  },

  // ─── Multiple Backgrounds (extra) ───
  {
    question: "Which are true about multiple backgrounds in CSS? (Select all that apply)",
    options: ["Separated by commas in the background-image property", "First listed background appears on top", "Each layer can have its own position and size", "Maximum 2 backgrounds are allowed"],
    correct: [0, 1, 2],
    explanation: "Multiple backgrounds use commas, the first is on top, and each layer has independent settings. There is NO limit of 2.",
    topic: "Multiple Backgrounds",
    type: "multi"
  },

  // ─── Word-Wrap (extra) ───
  {
    question: "Which properties help handle long overflowing words? (Select all that apply)",
    options: ["word-wrap: break-word", "overflow-wrap: break-word", "word-break: break-all", "text-overflow: break"],
    correct: [0, 1, 2],
    explanation: "word-wrap, overflow-wrap, and word-break all handle long text. text-overflow: break is not valid.",
    topic: "Word-Wrap",
    type: "multi"
  },

  // ─── Border-Radius (extra) ───
  {
    question: "How do you set only the top-left and top-right corners to be rounded?",
    options: ["border-radius: 10px 10px 0 0", "border-radius: top 10px", "border-top-radius: 10px", "corner-top: 10px"],
    correct: 0,
    explanation: "border-radius: 10px 10px 0 0 sets top-left, top-right, bottom-right, bottom-left in clockwise order.",
    topic: "Border-Radius"
  },
  {
    question: "Which are correct ways to use border-radius? (Select all that apply)",
    options: ["border-radius: 10px (all corners)", "border-radius: 50% (circle)", "border-top-left-radius: 5px (single corner)", "border-radius: round"],
    correct: [0, 1, 2],
    explanation: "All-corners shorthand, 50% for circles, and individual corner properties are valid. 'round' is not a valid value.",
    topic: "Border-Radius",
    type: "multi"
  },

  // ─── Box-Shadow (extra) ───
  {
    question: "How do you add multiple box shadows to one element?",
    options: ["Write the property multiple times", "Separate shadows with commas in one property", "Use an array", "Not possible"],
    correct: 1,
    explanation: "box-shadow: 2px 2px red, 4px 4px blue; — multiple shadows separated by commas.",
    topic: "Box-Shadow"
  },
  {
    question: "What does adding 'inset' to box-shadow do?",
    options: ["Makes shadow larger", "Makes the shadow appear inside the element instead of outside", "Removes the shadow", "Makes shadow more blurry"],
    correct: 1,
    explanation: "inset keyword makes the shadow appear inside the element's border, creating an inner shadow effect.",
    topic: "Box-Shadow"
  },

  // ─── Text-Shadow (extra) ───
  {
    question: "What does the text-shadow property do?",
    options: ["Adds shadow behind a box", "Adds a shadow effect behind text characters", "Adds shadow on an image", "Adds shadow on a border"],
    correct: 1,
    explanation: "text-shadow adds a shadow effect specifically behind text characters.",
    topic: "Text-Shadow"
  },
  {
    question: "Can you add multiple text shadows to one element?",
    options: ["No, only one is allowed", "Yes, separate them with commas", "Yes, using multiple text-shadow properties", "Only with JavaScript"],
    correct: 1,
    explanation: "Multiple text shadows can be applied using comma separation: text-shadow: 1px 1px red, 2px 2px blue;",
    topic: "Text-Shadow"
  },

  // ─── Transforms (extra) ───
  {
    question: "What does transform: rotate(45deg) do?",
    options: ["Moves element 45px to the right", "Rotates the element 45 degrees", "Scales element by 45%", "Moves element 45px up"],
    correct: 1,
    explanation: "rotate() rotates an element by the specified number of degrees.",
    topic: "Transforms"
  },
  {
    question: "What does the transform-origin property control?",
    options: ["Removes the transform", "Sets the pivot point around which the transform occurs", "Sets the transform speed", "Defines multiple transforms"],
    correct: 1,
    explanation: "transform-origin defines the point around which rotation or scaling occurs (default: center center).",
    topic: "Transforms"
  },
  {
    question: "Which statements about CSS transforms are correct? (Select all that apply)",
    options: ["Transforms do not affect surrounding elements in layout", "Multiple transforms can be chained in one declaration", "transform: scale(1) has no visible effect", "transform always requires a transition to work"],
    correct: [0, 1, 2],
    explanation: "Transforms don't affect layout of others, multiple can be chained, and scale(1) = no change. Transforms do NOT require a transition.",
    topic: "Transforms",
    type: "multi"
  },

  // ─── Root Element (extra) ───
  {
    question: "Why is :root preferred for declaring CSS variables?",
    options: ["It loads faster", "Variables declared in :root are accessible throughout the entire document", "It has lower specificity", "It only works in modern browsers"],
    correct: 1,
    explanation: ":root is the highest-level element, so variables declared there cascade down to every element on the page.",
    topic: "Root Element"
  },

  // ─── CSS Variables (extra) ───
  {
    question: "Where is it best practice to declare CSS variables for global access?",
    options: ["Inside body", "Inside :root", "Inside every selector", "Inside head"],
    correct: 1,
    explanation: "Declaring variables in :root makes them accessible throughout the entire document.",
    topic: "CSS Variables"
  },
  {
    question: "Can CSS variables be overridden inside a specific selector?",
    options: ["No, they are always global", "Yes, redeclaring the variable inside a selector overrides it for that scope", "Only with !important", "Only in external CSS files"],
    correct: 1,
    explanation: "CSS variables follow the cascade — redeclaring inside a selector overrides the value for that element and its children.",
    topic: "CSS Variables"
  },
  {
    question: "Which are valid CSS variable declarations? (Select all that apply)",
    options: ["--primary-color: blue", "--font-size: 16px", "--gap: 1rem 2rem", "$color: red"],
    correct: [0, 1, 2],
    explanation: "CSS variables start with -- and can hold any valid CSS value. $color is Sass syntax, not standard CSS.",
    topic: "CSS Variables",
    type: "multi"
  },

  // ─── Transitions (extra) ───
  {
    question: "What does transition-delay do?",
    options: ["Cancels the transition", "Waits a specified time before starting the transition", "Slows the transition permanently", "Repeats the transition"],
    correct: 1,
    explanation: "transition-delay causes the transition to start after a specified delay time.",
    topic: "Transitions"
  },
  {
    question: "Which sub-properties make up the transition shorthand? (Select all that apply)",
    options: ["transition-property", "transition-duration", "transition-timing-function", "transition-color"],
    correct: [0, 1, 2],
    explanation: "transition shorthand includes property, duration, timing-function, and delay. 'transition-color' does not exist.",
    topic: "Transitions",
    type: "multi"
  },
  {
    question: "Which statements about CSS transitions are correct? (Select all that apply)",
    options: ["Transitions require a trigger like :hover to activate", "transition: all applies to all animatable properties", "Transitions can animate between any two values", "Transitions loop automatically by default"],
    correct: [0, 1, 2],
    explanation: "Transitions need a state change trigger, 'all' targets every property, and values must be interpolatable. Transitions do NOT loop automatically.",
    topic: "Transitions",
    type: "multi"
  },

  // ─── Extra questions to reach 248 ───
  {
    question: "What does overflow-x: hidden do?",
    options: ["Hides the entire element", "Hides content that overflows horizontally only", "Hides content that overflows vertically", "Adds a horizontal scrollbar"],
    correct: 1,
    explanation: "overflow-x controls only horizontal overflow. Setting it to hidden clips content going beyond the left/right edges.",
    topic: "Overflow"
  },
  {
    question: "What does cursor: crosshair show?",
    options: ["A hand icon", "A plus/crosshair icon", "A loading spinner", "A text cursor"],
    correct: 1,
    explanation: "cursor: crosshair shows a + crosshair icon, often used in drawing or precision tools.",
    topic: "Cursor"
  },
  {
    question: "What does word-break: break-all do?",
    options: ["Deletes all words", "Allows breaking between any two characters, even mid-word", "Only breaks at spaces", "Breaks at hyphens only"],
    correct: 1,
    explanation: "word-break: break-all allows line breaks anywhere in the text, even in the middle of a word.",
    topic: "Word-Wrap"
  },
  {
    question: "What does the 'z-index: -1' do?",
    options: ["Removes the element", "Places the element behind its parent", "Makes element invisible", "Has no effect"],
    correct: 1,
    explanation: "A negative z-index places the element behind its stacking context parent, useful for background effects.",
    topic: "Z-Index"
  },
  {
    question: "Which are true about multiple backgrounds? (Select all that apply)",
    options: ["Each background can have a different repeat value", "Each background can have a different size", "They are defined in background-image with commas", "All backgrounds must be images"],
    correct: [0, 1, 2],
    explanation: "Each background layer is independent — different repeat, size, and position. Backgrounds can also be gradients, not just images.",
    topic: "Multiple Backgrounds",
    type: "multi"
  },
  {
    question: "What does list-style shorthand combine? (Select all that apply)",
    options: ["list-style-type", "list-style-position", "list-style-image", "list-style-color"],
    correct: [0, 1, 2],
    explanation: "list-style shorthand combines list-style-type, list-style-position, and list-style-image. list-style-color does not exist.",
    topic: "List Style",
    type: "multi"
  },
  {
    question: "What does transform: skewX(20deg) do?",
    options: ["Rotates element 20 degrees", "Tilts the element along the X axis by 20 degrees", "Moves element 20px on X axis", "Scales element by 20%"],
    correct: 1,
    explanation: "skewX() slants/tilts an element along the horizontal axis by the specified angle.",
    topic: "Transforms"
  },
  {
    question: "What is animation-direction: alternate used for?",
    options: ["Plays animation in reverse only", "Makes animation play forward then backward alternately", "Plays animation randomly", "Skips every other animation cycle"],
    correct: 1,
    explanation: "alternate makes the animation play forward on odd iterations and backward on even iterations — creating a ping-pong effect.",
    topic: "Animations"
  },
  {
    question: "What does the @keyframes 'from' keyword represent?",
    options: ["100% of the animation", "0% — the starting state of the animation", "50% midpoint", "The element's default state"],
    correct: 1,
    explanation: "from is equivalent to 0% — it defines the starting state of the animation.",
    topic: "Animations"
  },
  {
    question: "What does transition: all 0s do?",
    options: ["Disables all transitions", "Makes all property changes instant (no animation)", "Removes all CSS styles", "Freezes the element"],
    correct: 1,
    explanation: "A duration of 0s means the transition happens instantly — effectively disabling the smooth animation.",
    topic: "Transitions"
  },
  {
    question: "What is the purpose of the calc() operator spaces rule?",
    options: ["Spaces are optional in calc()", "Spaces are required around + and - operators in calc()", "Spaces are required around * and / only", "No spaces allowed in calc()"],
    correct: 1,
    explanation: "calc() requires spaces around + and - operators (e.g. calc(100% - 20px)) to avoid ambiguity with signs.",
    topic: "calc()"
  },
  {
    question: "What does 'grid-auto-flow: dense' do?",
    options: ["Makes grid items larger", "Fills in holes in the grid by placing smaller items in gaps", "Removes all gaps", "Makes all items the same size"],
    correct: 1,
    explanation: "dense fills in gaps in the grid by allowing smaller items to backtrack and fill empty spaces.",
    topic: "Grid"
  },

  // ─── Animations ───
  {
    question: "Which rule is used to define a CSS animation?",
    options: ["@transition", "@keyframes", "@animate", "@motion"],
    correct: 1,
    explanation: "@keyframes defines the animation steps. Then the animation property applies it to an element.",
    topic: "Animations"
  },
  {
    question: "What does animation-iteration-count: infinite do?",
    options: ["Animation never starts", "Animation repeats forever in a loop", "Animation runs once", "Animation runs randomly"],
    correct: 1,
    explanation: "infinite makes the animation loop continuously without stopping.",
    topic: "Animations"
  },
  {
    question: "What does animation-fill-mode: forwards do?",
    options: ["Animation plays forward direction", "Element stays in the final keyframe state after animation ends", "Animation applies styles before it starts", "Animation reverses after finishing"],
    correct: 1,
    explanation: "forwards keeps the element at its 100% keyframe state after the animation finishes.",
    topic: "Animations"
  },
  {
    question: "Which are valid sub-properties of the animation shorthand? (Select all that apply)",
    options: ["animation-duration", "animation-delay", "animation-iteration-count", "animation-color"],
    correct: [0, 1, 2],
    explanation: "duration, delay, and iteration-count are valid animation sub-properties. animation-color does not exist.",
    topic: "Animations",
    type: "multi"
  },
];
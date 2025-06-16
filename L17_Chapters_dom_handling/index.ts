console.log("dom Handling with typesecript");

//Non-null assertion
var heading = document.querySelector("h1")!;
console.log(heading.textContent);

//Optional chaining
var headingwithQuestionMark = document.querySelector("h1");
console.log(headingwithQuestionMark?.textContent);

var anchorClass = document.querySelector(".ankworWorld")! as HTMLAnchorElement;
console.log(anchorClass?.href);

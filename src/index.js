import "./styles.css";

const createWrapElem = (options, ...childs) => {
  let $div = document.createElement("div");
  $div.classList = options.class;
  childs.forEach((item) => {
    $div.appendChild(item);
  });
  return $div;
};

const createHTML = (options) => {
  let { type, attrs, text, click } = options;
  let $element = document.createElement(type);

  attrs
    ? attrs.forEach((item) => {
        let { type, value } = item;
        $element.setAttribute(type, value);
      })
    : null;

  text ? ($element.innerHTML = text) : null;

  click
    ? $element.addEventListener("click", function (e) {
        options.click(e);
      })
    : null;

  return $element;
};

let $submitbtn = createHTML({
  type: "button",
  text: "submit",
  click: function (e) {
    hanleSubmit(e);
  },
  attrs: [
    { type: "class", value: "btn btn--primary" },
    { type: "id", value: "btn btn--primary" }
  ]
});

let $editBtn = createHTML({
  type: "button",
  text: "edit",
  click: function (e) {
    handleEdit(e);
  }
});

const editBtn = (data, func) => {
  const { id } = data;

  let $elem = createHTML({
    type: "button",
    text: "edit",
    attrs: [{ type: "data-edit", value: id }]
  });

  $elem.addEventListener("click", function (e) {
    func(e);
  });

  return $elem;
};

const deleteBtn = (data, func) => {
  const { id } = data;
  let $elem = createHTML({
    type: "button",
    text: "delete",
    attrs: [{ type: "data-remove", value: id }]
  });

  $elem.addEventListener("click", function (e) {
    func(e);
  });

  return $elem;
};

const inputElem = (data) => {
  const { value } = data;
  return createHTML({
    type: "input",
    attrs: [{ type: "value", value: value }]
  });
};

let $deleteBtn = createHTML({
  type: "button",
  text: "delete"
});

let $inputField = createHTML({
  type: "input",
  attrs: [{ type: "placeholder", value: "Add text here..." }]
});

let $valueField = createHTML({
  type: "input"
});

let $liElem = createWrapElem(
  { class: "li_element" },
  $valueField,
  $editBtn,
  $deleteBtn
);

const handleEdit = (e) => {
  console.log(e.target);
};

const handleDelete = (e) => {
  console.log(e.target);
};

const renderLiItem = (data) => {};

const hanleSubmit = (e) => {
  let $this = e.target;
  let value = $this.parentNode.querySelector("input").value;
  console.log("value", value);
  // array.push(value);
};
let $input = document.createElement("input");
// let $button = document.createElement("button");
// $button.innerHTML = "this is the button";

let $div2 = createWrapElem({ class: "wrapper" }, $inputField, $submitbtn);
let $app = document.getElementById("app");

const compareArray = (arr1, arr2) => {
  return;
};

$app.appendChild($div2);

let sampleArray = [
  {
    id: 1,
    value: "this is todo list",
    isCompleted: false
  },
  {
    id: 2,
    value: "this is todo list 2",
    isCompleted: false
  },
  {
    id: 3,
    value: "this is todo list 3",
    isCompleted: false
  },
  {
    id: 4,
    value: "this is todo list 4",
    isCompleted: false
  }
];
// sampleArray.forEach((item) => {
//   return $app.appendChild(
//     createWrapElem(
//       { class: "li_element" },
//       inputElem(item),
//       editBtn(item, (e) => {
//         handleEdit(e);
//       }),
//       deleteBtn(item, (e) => {
//         handleDelete(e);
//       })
//     )
//   );
// });

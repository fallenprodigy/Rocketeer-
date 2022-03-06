const skills = document.getElementById("skills");
const button = document.querySelector(".button");
const button2 = document.querySelector("#button");

const getData = async () => {
  const response = await fetch("https://bootcamp-2022.devtest.ge/api/skills");
  const data = await response.json();
  // console.log(data);
  return data;
};

const displayOption = async () => {
  const options = await getData();
  // console.log(options);
  options.map((option) => {
    const newOption = document.createElement("option");
    // console.log(option);
    newOption.value = option.title;
    newOption.text = option.title;
    skills.appendChild(newOption);
  });
};

displayOption();

button.addEventListener("click", (e) => {
  e.preventDefault();

  addLanguage();
});

let x = 0;

const addLanguage = () => {
  let txtNewInputBox = document.createElement("div");

  txtNewInputBox.innerHTML =
    "<input type='text' value=enteredYear class='newInput' id='newInputBox'>";

  if (x < 3) {
    document.getElementById("newElementId").appendChild(txtNewInputBox);
    const enteredYear = button2.value;
    console.log(enteredYear);
    x++;
  }
  // }
};

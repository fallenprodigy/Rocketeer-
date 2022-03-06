const skills = document.getElementById("skills");

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

const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  addLanguage();
});

const addLanguage = () => {
  let txtNewInputBox = document.createElement("div");

  txtNewInputBox.innerHTML =
    "<input type='text' class='newInput' id='newInputBox'>";

  document.getElementById("newElementId").appendChild(txtNewInputBox);
};

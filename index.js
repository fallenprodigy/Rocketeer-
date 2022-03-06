const getData = async () => {
  const response = await fetch(
    "https://bootcamp-2022.devtest.ge/api/applications?token=89nOpas%7Casdanjjh%5E%26as"
  );
  const data = await response.json();
  console.log(data);
  return data;
};

getData();

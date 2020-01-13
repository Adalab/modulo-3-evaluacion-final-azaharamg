const getData = () => {
  return fetch("https://rickandmortyapi.com/api/character/?page=19").then(response => response.json());
};

export default getData;

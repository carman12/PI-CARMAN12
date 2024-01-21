import axios from "axios";

const URL = "https://rym2.up.railway.app/api/character/";

async function getCharById(req, res) {
  const { id } = req.params;

  try {
    const response = await axios.get(`${URL}${id}?key=pi-carman12`);

    if (response.data && response.data.status === 'OK') {
      const data = response.data.data;

      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin?.name,
        image: data.image,
        status: data.status,
      };

      res.status(200).json(character);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export default getCharById;

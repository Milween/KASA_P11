async function getHotels() {
  // Penser à remplacer par les données récupérées dans le json.
  const result = await fetch("../data/hotels.json");
  const data = await result.json();
  const hotels = await data.getHotels;
  // et bien retourner le tableau photographers seulement une fois.
      return { hotels };
}

getHotels()
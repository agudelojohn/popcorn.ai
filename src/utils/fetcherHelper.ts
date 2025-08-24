import requestCreator from "@/services/openAI/aiFetcher";

async function getMoviesData({
  emotions,
  genres,
}: {
  emotions: string[];
  genres: string[];
}) {
  const response = await requestCreator({
    prompt: createPrompt(emotions, genres),
  });
  const moviesArray = transformResponseToArray(response);
  console.log("debugger Movies response ", response);
  return moviesArray;
}

function transformResponseToArray(response: any) {
  const content = response.choices[0].message.content;
  const moviesArray = content
    .split("\n")
    .map((movie: string) => movie.trim())
    .filter((movie: string) => movie !== "");
  return moviesArray;
}

function transformArrayToString(array: string[]) {
  let str = array.join(", ");
  const lastCommaIndex = str.lastIndexOf(", ");
  if (lastCommaIndex !== -1) {
    str = str.slice(0, lastCommaIndex) + " y" + str.slice(lastCommaIndex + 1);
  }
  return str;
}

function createPrompt(emotions: string[], genres: string[]) {
  const emotionsStr = transformArrayToString(emotions);
  const genresStr = transformArrayToString(genres);
  const idioma = "español";
  const prompt = `Actua como un experto en cine, teniendo en cuenta que hoy quiero ver algo que vaya acorder a mi actual estado de animo (${emotionsStr}) y me gustan las peliculas del genero ${genresStr}. Dame 5 recomendaciones de peliculas para ver. Crea una lista y dame la respuesta con solo la lista, sin texto extra y en ${idioma}, con el siguiente formato de datos: Nombre de la pelicula, año de lanzamiento - Director`;
  return prompt;
}
export { getMoviesData };

import requestCreator from "@/services/openAI/aiFetcher";

async function getMoviesData() {
  const response = await requestCreator();
  const moviesArray = transformResponseToArray(response);
  return moviesArray;
}

function transformResponseToArray(response: any) {
  const content = response.choices[0].message.content;
  const moviesArray = content.split("\n").map((movie: string) => movie.trim()).filter((movie: string) => movie !== "");
  return moviesArray;
}

export { getMoviesData };

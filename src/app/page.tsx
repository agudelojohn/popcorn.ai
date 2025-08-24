"use client";
import RoundedButton from "@/components/RoundedButton";
import Spinner from "@/components/Spinner";
import { getMoviesData } from "@/utils/fetcherHelper";
import { useRef, useState } from "react";

export default function Home() {
  const emotions = [
    "Alegría",
    "Tristeza",
    "Miedo",
    "Ira",
    "Sorpresa",
    "Asco",
    "Amor",
    "Ansiedad",
    "Culpa",
    "Vergüenza",
  ];
  const generos = [
    "Comedia",
    "Musical",
    "Animación / Familiar",
    "Drama",
    "Romance trágico",
    "Melodrama",
    "Terror / Horror",
    "Thriller psicológico",
    "Suspenso",
    "Acción",
    "Venganza / Justicia",
    "Cine bélico",
    "Misterio",
    "Ciencia ficción",
    "Thriller con giros de guion",
    "Gore / Splatter",
    "Terror corporal (Body Horror)",
    "Cine experimental perturbador",
    "Romance",
    "Comedia romántica",
    "Drama romántico",
    "Distopía",
    "Películas de desastres",
    "Cine noir",
    "Drama psicológico",
    "Thriller moral",
    "Comedia de enredos",
    "Sátira",
    "Cine adolescente",
  ];

  const listResultRef = useRef<HTMLDivElement>(null);

  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [filmGenre, setFilmGenre] = useState<string[]>([]);
  const [loadingFetch, setLoadingFetch] = useState(false);

  const [resultMovies, setResultMovies] = useState<string[]>([]);

  function resetData() {
    setSelectedEmotions([]);
    setFilmGenre([]);
  }

  function handleCalculateMovie() {
    setLoadingFetch(true);
    getMoviesData()
      .then((res) => {
        setResultMovies(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoadingFetch(false);
        resetData();
        setTimeout(() => {
          if (listResultRef.current) {
            listResultRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 0);
      });
  }

  return (
    <>
      <h1 className="text-center">Lest's get a movie for today</h1>
      <h2 className="text-center mt-8 mb-5">
        Selecciona tu estado de animo actual
      </h2>
      <div className="flex gap-2 selft-center flex-wrap justify-stretch mt-4 px-10">
        {emotions &&
          emotions.map((emotion) => (
            <RoundedButton
              key={emotion}
              text={emotion}
              selected={selectedEmotions.includes(emotion)}
              onClick={() => {
                if (selectedEmotions.includes(emotion)) {
                  setSelectedEmotions(
                    selectedEmotions.filter((e) => e !== emotion)
                  );
                } else {
                  setSelectedEmotions([...selectedEmotions, emotion]);
                }
              }}
            />
          ))}
      </div>
      <h2 className="text-center mt-8 mb-5">
        Selecciona tus tipos de genero favorito
      </h2>
      <div className="flex gap-2 selft-center flex-wrap justify-stretch mt-4 px-10">
        {generos &&
          generos.map((genre) => (
            <RoundedButton
              key={genre}
              text={genre}
              selected={filmGenre.includes(genre)}
              onClick={() => {
                if (filmGenre.includes(genre)) {
                  setFilmGenre(filmGenre.filter((g) => g !== genre));
                } else {
                  setFilmGenre([...filmGenre, genre]);
                }
              }}
            />
          ))}
      </div>
      <div className="flex gap-2 selft-center flex-wrap justify-center mt-10">
        <RoundedButton
          text={"Calcular Película"}
          onClick={handleCalculateMovie}
        />
      </div>
      <div className="flex gap-2 selft-center flex-wrap justify-center mt-10">
        {loadingFetch && <Spinner />}
        {!loadingFetch && resultMovies && resultMovies.length > 0 && (
          <div
            id="result-list"
            className="w-full text-center max-w-lg mb-20"
            ref={listResultRef}
          >
            {resultMovies.map((movie, index) => (
              <p key={index} className="p-1 rounded ">
                {movie}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

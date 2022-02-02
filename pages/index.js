import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Agri</title>
        <meta name="description" content="Agri Agri Agri Agri Agri Agri yasser yasser karami karami Agri Agri Agri Agri Agri Agri Agri" />
        <link rel="icon" href="/AGRI (1).ico" />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return { props: { results: request.results } };
}

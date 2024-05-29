import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, error } = useSWR("/api/random-character", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <h1>Here's a random Character:</h1>
      <p>First Name: {data.firstName}</p>
      <p>Last Name: {data.lastName}</p>
      <p>Twitter Name: {data.twitterName}</p>
      <p>Geohash: {data.geoHash}</p>
      <p>Age: {data.age}</p>
    </>
  );
}

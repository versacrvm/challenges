import React from "react";
import { introduction } from "./lib/data.js";
import Head from "next/head";
import Link from "next/link";
import { volumes } from "./lib/data.js";
import { useRouter } from "next/router.js";
import Button from "../components/Button.style.js";
import P from "../components/P.style.js";

export default function Volumes() {
  console.log({ volumes });
  const router = useRouter();
  function getRandomElement(array) {
    const randomSlug = array[Math.floor(Math.random() * array.length)].slug;
    router.push(`/volumes/${randomSlug}`);
  }

  return (
    <>
      <Head>
        <title>Lord of the Rings</title>
      </Head>
      <main>
        <h1>Lord of the Rings</h1>
        <P>{introduction}</P>
        <h2>All Volumes:</h2>
        <ul>
          {volumes.map((volume, index) => (
            <li key={index}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          ))}
        </ul>
        <Button type="button" onClick={() => getRandomElement(volumes)}>
          Random Volume
        </Button>
      </main>
    </>
  );
}

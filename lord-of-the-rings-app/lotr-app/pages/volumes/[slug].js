import React from "react";
import { volumes } from "../lib/data.js";
import Link from "next/link.js";
import Image from "next/image.js";
import { useRouter } from "next/router.js";

// this used to be the individual components which are now dynamic

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const currentVolume = volumes.find((volume) => volume.slug === slug);
  if (!currentVolume) {
    return null;
  }
  const { title, description, cover, books, ordinal } = currentVolume;

  return (
    <>
      <Link href="/">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.ordinal} {book.title}
          </li>
        ))}
      </ul>
      <Image src={cover} width={140} height={230} />
    </>
  );
}

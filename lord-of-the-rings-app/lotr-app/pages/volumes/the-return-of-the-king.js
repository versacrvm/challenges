import React from "react";
import { volumes } from "../lib/data.js";
import Link from "next/link.js";
import Image from "next/image.js";

export default function trotk() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <>
      <Link href="/">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book, index) => (
          <li key={index}>
            {book.ordinal} {book.title}
          </li>
        ))}
      </ul>
    </>
  );
}

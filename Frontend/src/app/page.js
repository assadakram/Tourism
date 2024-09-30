"use client";
import Content from "../components/content";
import {sanityClient} from "../../sanity.js";

async function getData() {
  const query = `*[_type == "advanture"]`;
  return await sanityClient.fetch(query);
}

export default async function Home() {
  const adventures = await getData();
  return (
    <>
      <Content locations={adventures} />
    </>
  );
}

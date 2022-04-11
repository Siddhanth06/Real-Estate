import { createClient } from "@supabase/supabase-js";
import React, { useState } from "react";
import HomeCarousel from "./components/carousel";
import Footer from "./components/footer";
import Houses from "./houses";

import Navbar from "./components/navbar";
import Projects from "./components/project";

export default function Home({ data }) {
  return (
    <>
      <Navbar />
      <HomeCarousel id="home" />

      <Projects id="projects" />
      <Houses id="houses" data={data} />
      <Footer  />
    </>
  );
}
export async function getServerSideProps() {
  const supabase = createClient(
    "https://qvthtxoqqpjllkcfwmar.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQ0MjE2MjgxLCJleHAiOjE5NTk3OTIyODF9.ebphrnhHfHkxHicRGFJCywcrdKW598DDcfMdIG83P_k"
  );

  const { data, error } = await supabase
    .from("add_properties")
    .select("*")
    .match({ type: "House" });

  // Pass data to the page via props
  return { props: { data: data } };
}

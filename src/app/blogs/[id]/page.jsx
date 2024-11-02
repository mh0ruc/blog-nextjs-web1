"use client";

import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Enterance from "@/app/components/Enterance";
import Skills from "@/app/components/Skills";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [skills, setSkills] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3001/blogs');
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Data fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const filtered = data.filter(d => d.id === (params.id));
      setFilteredData(filtered);
     
    }
  }, [data, params.id]);

  return (
    <>
      <Enterance name={filteredData[0]?.name}  job={filteredData[0]?.job} />
      <About  about={filteredData[0]?.about}/> 
      <div className="flex">
        <Skills skills={filteredData[0]?.skills} />
        <Contact email={filteredData[0]?.email} number={filteredData[0]?.number} />
      </div>
    </>
  );
};

export default Page;

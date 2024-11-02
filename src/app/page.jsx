"use client"
import Image from "next/image";
import Enterance from "./components/Enterance";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Blogsgrid from "./components/blogsgrid";

const Page = () => {
  const [editBlog, setEditBlog] = useState({});
  const [data, setData] = useState([]);
  console.log(data)
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
    getLocal();
    fetchData();
  }, []);

  const getLocal = () => {
    const blogData = localStorage.getItem("blog");
    if (blogData === null) {
      localStorage.setItem("blog", JSON.stringify({}));
    } else {
      setEditBlog(JSON.parse(blogData));
    }
  };

  return (
    <>
     { /*<Enterance name={editBlog.name} job={editBlog.job} />
      <About about={editBlog.about} />
      <div className="flex">
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        <Skills skills={editBlog.skills} />
        <Contact email={editBlog.email} number={editBlog.number} />
      </div>*/}
      <div>
      <Blogsgrid data={data}/>
      </div>
    </>
  );
};

export default Page;

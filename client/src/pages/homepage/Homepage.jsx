import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Homepage() {
  const { search } = useLocation(); // find location.search which stores the pair: ?user=name  or ?cat=catname, as string.
  const [posts, setPosts] = useState([]); // posts stores the all posts to render.

  useEffect(() => {
    const fetchPosts = async () => {
      // fetched the data of REST api.
      const res = await axios.get("/posts" + search); // /api is defined in the proxy so we send the /post route.
      // res is the array containg all posts ie(postArr).
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}

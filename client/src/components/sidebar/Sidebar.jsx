import { Link } from "react-router-dom";
import "./sidebar.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Sidebar() {
  const [cats, setCats] = useState([]); // cats => arrya of categories to disply on the side.
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories/"); // api endpoint is /api/posts/categories  which will return all the categories in the category array ( as defined in categories model)
      setCats(res.data);
    };
    getCats();
  }, []);

  // this returns a fun fact and the categories available
  return (
    <div className="sidebar">
      <div className="sidebarItem item1">
        <span className="sidebarTitle">TODAY'S FUN FACT</span>
        <img
          class="factsImg"
          src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/og.4ad05d4125a5.png"
          alt=""
        />
        <p id="fact">
          Mozilla Firefox,s logo is a red panda and not a fox. You might not
          think it makes sense with the word “fox” being in the name but a very
          little known fact is that the red panda's nickname is “firefox.”
        </p>
      </div>
      {/*<div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <li className="sidebarListItem">
              <Link className="link" to={`/posts?cat=${c.name}`}> 
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
          </div> */}
    </div>
  );
}

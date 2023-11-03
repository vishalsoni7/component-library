import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../header/header.css";

import { componentArray } from "../components/component";

export const Header = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    const input = e.target.value.toLowerCase();
    setSearch(input);

    const filterSearch = componentArray.filter((item) =>
      item.toLowerCase().includes(input)
    );
    setData(filterSearch);
  };

  const handleSearchClick = (page) => {
    navigate(`/${page}`);
    setSearch("");
    setData([]);
  };

  return (
    <div className="header-parent-div">
      <h2 className="header-heading" onClick={() => navigate("/")}>
        Css Gems
      </h2>

      <div className="searched-div">
        <div className="header-child1-div">
          <input
            onChange={handleSearch}
            value={search}
            placeholder="Search Components"
            type="text"
          />
        </div>

        <div className="searched">
          {search.trim().length > 0 && (
            <>
              {data.map((page) => (
                <div
                  className="page"
                  onClick={() => handleSearchClick(page)}
                  key={page}
                >
                  {" "}
                  {page}{" "}
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      <div className="header-child2-div">
        <p>
          <NavLink className="link" to="/">
            {" "}
            Home{" "}
          </NavLink>{" "}
        </p>
        <p>
          <NavLink className="link" to="/components">
            {" "}
            Components
          </NavLink>
        </p>
      </div>
    </div>
  );
};

import { Route, Routes } from "react-router-dom";
import { Components } from "../components/Component";

import { Alerts } from "../pages/alert/Alerts";
import { Avatars } from "../pages/avatar/Avatars";
import { Badge } from "../pages/badge/Badge";
import { Buttons } from "../pages/button/Button";
import { Card } from "../pages/card/Card";
import { Heading } from "../pages/heading/Heading";
import { Image } from "../pages/image/Image";
import { Text } from "../pages/text/Text";

import { Home } from "../pages/home/Home";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/alert" element={<Alerts />} />
        <Route path="/avatar" element={<Avatars />} />
        <Route path="/badge" element={<Badge />} />
        <Route path="/button" element={<Buttons />} />
        <Route path="/card" element={<Card />} />
        <Route path="/heading" element={<Heading />} />
        <Route path="/image" element={<Image />} />
        <Route path="/text" element={<Text />} />
      </Routes>
    </>
  );
};

import { Container, Image, Menu } from "semantic-ui-react";
import React, { useState } from "react";
import "./Navi.css";
import NaviSignedOut from "./NaviSignedOut";
import NaviSignedIn from "./NaviSignedIn";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Favorites from "./Favorites";

export default function Navi() {
  const { favoritesItems } = useSelector((state) => state.favorites)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory()

  function handleSingOut() {
    setIsAuthenticated(false);
    history.push("/")
  }

  function handleSingIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted className="bg-dark" style={{ height: "69px" }} stackable>
        <Container>
          <Menu.Item as={Link} to="/">
            <Image
              size="small"
              src="https://res.cloudinary.com/dxahez1o6/image/upload/v1623776939/LogoWhite_qxcm3w.png"
            />
          </Menu.Item>
          <Menu.Item as={Link} to="/">
            <h5 className="mx-3 font-weight-bold text-white">Ana Sayfa</h5>
          </Menu.Item>
          <Menu.Item as={Link} to="/findJob">
            <h5 className="mx-3 font-weight-bold text-white">İş Ara</h5>
          </Menu.Item>
          <Menu.Item as={Link} to="/unconfirmedJobAdvertisements">
            <h5 className="mx-3 font-weight-bold text-white">Pozisyonlar</h5>
          </Menu.Item>
          <Menu className="bg-dark" inverted floated="right">
            {favoritesItems.length > 0 && <Favorites/>}
            {isAuthenticated ? (
              <Menu.Item>
                <NaviSignedIn signOut={handleSingOut} />
              </Menu.Item>
            ) : (
              <Menu.Item>
                <NaviSignedOut signIn={handleSingIn} />
              </Menu.Item>
            )}
          </Menu>
        </Container>
      </Menu>
    </div>
  );
}

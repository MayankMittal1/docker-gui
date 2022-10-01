import React, { useState } from "react";
import { Navbar, NavbarProps, Row } from "reactstrap";
import "./style.css";
import NavBar from "../../NavBar/NavBar";
import SearchBar from "./";
import Image from "./";

function Step1() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="bigbox">
        <NavBar></NavBar>
        <SearchBar></SearchBar>
        <Image></Image>
      </div>
    </>
  );
}

export default Step1;

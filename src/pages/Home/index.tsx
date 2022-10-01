import React, { useState } from "react";
import { Navbar, NavbarProps, Row } from "reactstrap";
import "./style.css";
import NavBar from "../Nav";
import Search from "../Searchbar";
import Port from "../Port";
import Image from "../Image";
import Variables from "../Variables";
import Command from "../Command"
import ProgressBar from "../Step1/ProgressBar";

function Example(
  args: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Navbar> &
    Readonly<NavbarProps>
) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="bigbox">
        <NavBar></NavBar>
        
    

        <Command></Command>
      </div>
    </>
  );
}

export default Example;

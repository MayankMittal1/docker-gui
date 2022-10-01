import React, { useState } from "react";
import { Navbar, NavbarProps, Row } from "reactstrap";
import "./style.css";
import NavBar from "../Nav";
import Port from "../Port";
import Variables from "../Variables";

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
        <Port />
      </div>
    </>
  );
}

export default Example;

import React, { useState } from "react";
import {
  Navbar,
  NavbarProps,
} from "reactstrap";
import NavBar from "../Nav";
import Searchbar from "../Searchbar"
import Image from "../Image"

function Example(
  args: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Navbar> &
    Readonly<NavbarProps>
) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    <NavBar></NavBar>
    <Searchbar></Searchbar>
    <Image></Image>
    </>
  ) 
  
  }

export default Example;


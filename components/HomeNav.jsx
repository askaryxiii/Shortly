"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  IoClose,
  IoMenuSharp,
  useEffect,
  useState,
  Link,
  Image,
  logo,
} from "@/externals/imports";

function NavList() {
  return (
    <ul className="my-2 flex flex-row justify-evenly gap-2 lg:mb-0 lg:mt-0 lg:items-center lg:gap-6">
      <Typography
        as={Link}
        href="/"
        variant="paragraph"
        className="p-1 font-semibold text-gray-700"
      >
        Home
      </Typography>
      <Typography
        as={Link}
        href="/"
        variant="paragraph"
        className="p-1 font-semibold text-gray-700"
      >
        Pricing
      </Typography>
      <Typography
        as={Link}
        href="/"
        variant="paragraph"
        className="p-1 font-semibold text-gray-700"
      >
        About
      </Typography>
    </ul>
  );
}

const HomeNav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-3xl rounded-none shadow-none px-16 py-7">
      <div className="flex items-center justify-evenly text-blue-gray-900">
        <Typography
          as={Link}
          href="/"
          variant="h4"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <Image
            src={logo}
            width={100}
            height={28}
            alt="Picture of the author"
          />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <IoClose className="h-6 w-6" strokeWidth={2} />
          ) : (
            <IoMenuSharp className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default HomeNav;

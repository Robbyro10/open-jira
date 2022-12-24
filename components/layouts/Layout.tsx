import Box from "@mui/material/Box";
import Head from "next/head";
import { FC, PropsWithChildren, ReactComponentElement } from "react";
import { NavBar, SideBar } from "../ui";

interface Props extends PropsWithChildren {
  title?: string;
}

export const Layout: FC<Props> = ({ title = "OpenJira", children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <NavBar />
      <SideBar />
      <Box sx={{ padding: 1 }}>{children}</Box>
    </Box>
  );
};

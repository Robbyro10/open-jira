import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Inter } from "@next/font/google";
import { NextPage } from "next";
import { Layout } from "../components/layouts";
import { EntryList, NewEntry } from "../components/ui";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item sm={4} xs={12}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pending" />
            <CardContent>
              <NewEntry />
              <EntryList status={"pending"} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="In Progress" />
            <CardContent>
              <EntryList status={"in-progress"} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completed" />
            <CardContent>
              <EntryList status={"finished"} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;

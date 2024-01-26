import React from "react";
import Box from "@mui/material/Box";
import SideNav from "../menu/SideNav";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AccordionDah from "../menu/AccordionDah";
import HomeChart from "../menu/HomeChart";
import CountUp from "react-countup";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="pb-5" style={{ background: "#ddd" }}>
        <Box sx={{ display: "flex" }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction="row">
                  <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        $ <CountUp delay={0.2} end={50000} duration={5} />
                      </Typography>
                      <Typography variant="body2" color="text.light">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        $ <CountUp delay={0.3} end={30200} duration={5} />
                      </Typography>
                      <Typography variant="body2" color="text.light">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card sx={{ maxWidth: 420 }}>
                    <CardContent>
                      <strong>
                        $ <CountUp delay={0.3} end={50000} duration={5} /> Total
                      </strong>
                    </CardContent>
                  </Card>
                  <Card sx={{ maxWidth: 420 }}>
                    <CardContent>
                      <strong>
                        $ <CountUp delay={0.3} end={30200} duration={5} />
                        Total
                      </strong>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Grid container spacing={2} className="my-2">
              <Grid item xs={8}>
                <Stack spacing={2}>
                  <Card sx={{ height: 50 + "vh" }}>
                    <CardContent>
                      <HomeChart />
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card
                    sx={{ height: 50 + "vh" }}
                    style={{ overflowY: "auto" }}
                  >
                    <CardContent>
                      <AccordionDah />
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Home;

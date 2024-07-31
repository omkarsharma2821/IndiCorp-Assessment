import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  createTheme,
  styled,
  Paper,
  keyframes,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const Home = () => {
  const theme = createTheme();
  const StyledPaper = styled(Paper)({
    padding: theme.spacing(0),
    border: "1 px solid black",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
    "& img": {
      width: "100%",
      height: "auto",
      display: "block",
      transition: "transform 0.1s ease-in-out",
      transform: "scale(1)",
    },
    // width: '60%',
    margin: "auto",
  });
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundAttachment: "fixed",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('/images/HP.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Typography
          variant="h1"
          mt={0}
          sx={{
            color: "white",
            textAlign: "center",
            fontSize: "10vw",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          }}
        >
          GearGuard{" "}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "white",
            textAlign: "center",
            fontSize: "3vw",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          }}
        >
          Simplifying the way you handle tool issues.
        </Typography>
      </Box>
      <Container sx={{mt:10}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                width: "480px",
                height: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h3" fontWeight="semibold" mb={2}>
                Manage Your Tools
              </Typography>
              <Typography variant="h4" mb={0} >
              Add your tools and manage them effortlessly with our system. Keep track of issues, status, and availability—all in one place.
              </Typography>
              <NavLink to="/addtool">
                <Button
                  sx={{
                    textTransform: "none",
                    borderRadius: "28px",
                    mt: 4,
                    width: "60%",
                    fontSize: "25px",
                    py: 1,
                    backgroundColor: "rgb(33, 40, 189)",
                  }}
                  variant="contained"
                >
                  Start now!
                </Button>
              </NavLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledPaper>
              <Container
                sx={{
                  display: "flex",
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/images/G10.png')`,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 1,
                  minHeight: 500,
                  width: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Container>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
      <div>
        <div className="page2 d-flex justify-content-center align-items-center mt-0">
          <h1 className="display-2 text-center">Things make us unique</h1>
        </div>
        <section className="">
          <div className="container py-0">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 mb-5">
                <div className="card shadow cards-home">
                  <img
                    className="img-fluid homeCardsImg"
                    src="images/HP.png"
                    alt="Modern Furniture"
                  />
                  <h5 className="text-center mt-1 mx-4">Modern Tools</h5>
                  <a
                    href="/browsetool"
                    className="d-flex justify-content-center"
                  >
                    <button className="btn btn-primary mt-1 mx-4 mb-3 w-75">
                    Explore Our Range
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 mb-5">
                <div className="card shadow cards-home">
                  <img
                    className="img-fluid homeCardsImg"
                    src="images/G1.gif"
                    alt="Satisfied Customer"
                  />
                  <h5 className="text-center mt-1 mx-4">Satisfied Customer</h5>
                  <a
                    href="/view"
                    className="d-flex justify-content-center"
                  >
                    <button className="btn btn-primary mt-1 mx-4 mb-3 w-75">
                    Manage Orders
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 mb-5">
                <div className="card shadow cards-home">
                  <img
                    className="img-fluid homeCardsImg"
                    src="images/G10.png"
                    alt="Customer Support"
                  />
                  <h5 className="text-center mt-1 mx-4">Customer Support</h5>
                  <a
                    href="/contact"
                    className="d-flex justify-content-center"
                  >
                    <button className="btn btn-primary mt-1 mx-4 mb-3 w-75">
                      Contact Us
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;

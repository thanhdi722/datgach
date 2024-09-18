import {
  AppBar,
  Toolbar,
  Grid,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import PhoneIcon from "@mui/icons-material/Phone";
import Link from "next/link";
import Logobachlongauth from "../../assets/images/Logobachlongauth.png";
const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fad200",
        color: "#333",
        position: "fixed",
        zIndex: 10,
        top: 0,
      }}
    >
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Left Section: Logo */}
          <Grid item xs={6} sm={4} md={4}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* Logo Image */}
              <Link href={"https://bachlongmobile.com/"}>
                <Box sx={{ width: { xs: "80%", sm: "50%" } }}>
                  <Image
                    src={Logobachlongauth}
                    alt="Bạch Long mobile"
                    style={{ width: "100%" }}
                  />
                </Box>
              </Link>
              {/* Text next to the logo */}
              {/* <Image
                src="/logo.png"
                alt="Bạch Long Mobile"
                width={60}
                height={40}
              /> */}
            </Box>
          </Grid>
          <Grid
            sx={{ display: { xs: "none", sm: "block" }, textAlign: "center" }}
            item
            xs={5}
          >
            <Typography variant="h3" sx={{ color: "black", fontSize: 20 }}>
              Hệ thống ủy quyền chính hãng Apple tại Việt Nam
            </Typography>
          </Grid>
          {/* Right Section: Phone number (in the same row as logo for mobile) */}
          <Grid
            item
            xs={6}
            sm={3}
            md={3}
            sx={{
              textAlign: "right",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <a
              href="tel:1900636469"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <IconButton color="inherit">
                <Box>
                  <Grid
                    container
                    sx={{
                      marginLeft: "-15px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Grid item xs={6}>
                      <PhoneIcon style={{ fontSize: 25 }} />
                    </Grid>
                    <Grid item xs={6} sx={{ justifyContent: "center" }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: { xs: "10px", sm: 15 },
                          color: "black",
                          marginRight: "30px",
                        }}
                      >
                        1900636469
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "black", fontSize: 15 }}
                      >
                        Hotline
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </IconButton>
            </a>
          </Grid>

          {/* Center Section: Official Reseller Text takes up full width on mobile */}
          <Grid
            sx={{ display: { xs: "block", sm: "none" }, textAlign: "center" }}
            item
            xs={12}
          >
            <Typography
              variant="h6"
              sx={{ color: "black", fontSize: { xs: "13px", sm: "14px" } }}
            >
              Hệ thống ủy quyền chính hãng Apple tại Việt Nam
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

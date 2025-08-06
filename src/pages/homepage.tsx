import { Card, CardContent, Typography, Box } from "@mui/material";

const Homepage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ maxWidth: 400, padding: 2, textAlign: "center" }}>
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            Welcome to the Admin Dashboard
          </Typography>
          <Typography variant="body1" color="textSecondary">
            This is a simple admin dashboard built with React Admin.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Homepage;

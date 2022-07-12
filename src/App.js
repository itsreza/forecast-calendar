import routes from "./router/routes";
import { Route } from "react-router-dom";
import { Grid } from "@mui/material";

function App() {
  const renderRoutes = routes.map((route) => (
    <Route key={route.path} {...route} />
  ));

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        {renderRoutes}
      </Grid>
    </Grid>
  );
}

export default App;

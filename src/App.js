import routes from "./router/routes";
import { Route } from "react-router-dom";
import { Grid } from "@mui/material";
import classes from "./app.module.scss";
import Header from "./components/widgets/Header";

function App() {
  const renderRoutes = routes.map((route) => (
    <Route key={route.path} {...route} />
  ));

  return (
    <Grid className={classes.app} container spacing={2}>
      <Grid xs={12} item>
        <Header />
      </Grid>
      <Grid className={classes.app_layout} item lg={6} md={6} sm={8} xs={11}>
        {renderRoutes}
      </Grid>
    </Grid>
  );
}

export default App;

import Calendar from "../container/Calendar";
import Weather from "../container/Weather";

const routes = [
  { path: "/", exact: true, children: <Calendar /> },
  { path: "/weather", exact: true, children: <Weather /> },
];

export default routes;

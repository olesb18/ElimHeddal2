import { Home } from "./components/Home";
import {ElimHeddal} from "./components/ElimHeddal";
import {SaligBlanding} from "./components/SaligBlanding";
import {ElimMedia} from "./components/ElimMedia";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
  path: '/ElimHeddal',
    element: <ElimHeddal />
  },
  {
    path: '/ElimMedia',
    element: <ElimMedia />
  },
  {
    path: '/SaligBlanding',
    element: <SaligBlanding />
  },
];

export default AppRoutes;

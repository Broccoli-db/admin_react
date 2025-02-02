import routers from "./routers";
import { Suspense } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Loading from "../components/Loading";
const Elements = (props) => {
  let { element: Element } = props;
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let [searchParams] = useSearchParams();
  return <Element {...{ navigate, location, params, searchParams }}></Element>;
};
const createRouter = (routers) => {
  return (
    <>
      {routers.map((i, index) => {
        let { path } = i;
        return (
          <Route key={index} path={path} element={<Elements {...i}></Elements>}>
            {i.children && i.children.length > 0
              ? createRouter(i.children)
              : null}
          </Route>
        );
      })}
    </>
  );
};
const RouterView = () => {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <Routes>{createRouter(routers)}</Routes>
    </Suspense>
  );
};
export default RouterView;

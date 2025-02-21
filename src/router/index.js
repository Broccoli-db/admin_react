import routers from "./routers";
import { Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Loading from "../components/Loading";
import ErrorFallback from "../components/ErrorFallback";
import { setWaterMark } from "../utils/index";
import { useSelector, useDispatch } from "react-redux"
import { setUser } from "../store/use"
const Elements = (props) => {
  const dispatch = useDispatch()
  let { element: Element } = props;
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let [searchParams] = useSearchParams();
  let { user } = useSelector((state) => {
    return state.use
  })
  dispatch(setUser(localStorage.getItem("user")))
  // 添加水印
  setWaterMark(user || "")
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
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      < Suspense fallback={< Loading ></Loading >}>
        <Routes>{createRouter(routers)}</Routes>
      </Suspense >
    </ErrorBoundary>
  );
};
export default RouterView;

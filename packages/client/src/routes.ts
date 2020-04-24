import { RouteConfig } from "@jerrywithaz/better-react-router-routing";
import HomeView from "views/HomeView";
import ApplicationView from "views/ApplicationView";

const routes: RouteConfig[] = [{
    key: "route-base-view",
    secure: false,
    path: "/",
    exact: true,
    component: HomeView
}, {
    key: "route-application-view",
    secure: false,
    path: "/application/:applicationId",
    exact: false,
    component: ApplicationView
}]

export default routes;
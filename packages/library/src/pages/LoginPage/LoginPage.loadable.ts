import createLoadableComponent from "../../utils/createLoadableComponent/createLoadableComponent";

const LoginPageLoadable = createLoadableComponent({
    importFunc: () => import("./LoginPage.component"),
    fallback: "Could not load Login Page."
});

export default LoginPageLoadable;
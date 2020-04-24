import createLoadableComponent from "../../../../src/utils/createLoadableComponent/createLoadableComponent";
var LoginPageLoadable = createLoadableComponent({
    importFunc: function () { return import("./LoginPage.component"); },
    fallback: "Could not load Login Page."
});
export default LoginPageLoadable;

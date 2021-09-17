import { register } from "react-native-bundle-splitter";

const HomeBridge = register({ loader: () => import("./HomeContainer") });

export default HomeBridge;
import { Admin, Resource, radiantLightTheme } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import AttachedAppealList from "./pages/attached-appeal/appeal-list";
import AttachedAppealShow from "./pages/attached-appeal/appeal-show";
import AttachedAppealCreate from "./pages/attached-appeal/appeal-create";
import AttachedAppealEdit from "./pages/attached-appeal/appeal-edit";
import UserList from "./pages/users/user-list";
import UserShow from "./pages/users/user-show";
import ArcticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import Homepage from "./pages/homepage";
import { authProvider } from "./pages/authProvider";

export const App = () => (
  <Admin
    theme={radiantLightTheme}
    layout={Layout}
    dataProvider={dataProvider}
    dashboard={Homepage}
    authProvider={authProvider}
  >
    <Resource
      icon={ArcticleIcon}
      name="attached-appeal-devices"
      options={{ label: "Biriktirilgan shartnomalar" }}
      list={AttachedAppealList}
      show={AttachedAppealShow}
      edit={AttachedAppealEdit}
      // create={AttachedAppealCreate}
    />
    <Resource
      icon={PersonIcon}
      name="confirmed-appeal-devices"
      options={{ label: "Jarayondagi shartnomalar" }}
      list={UserList}
      show={UserShow}
    />
    {/* <Resource
      icon={PersonIcon}
      name="confirmed-appeal-devices"
      options={{ label: "Tasdiqlangan shartnomalar" }}
      list={UserList}
      show={UserShow}
    />
    <Resource
      icon={PersonIcon}
      name="confirmed-appeal-devices"
      options={{ label: "Rad etilgan shartnomalar" }}
      list={UserList}
      show={UserShow}
    />
    <Resource
      icon={PersonIcon}
      name="confirmed-appeal-devices"
      options={{ label: "Yangi shartnomalar" }}
      list={UserList}
      show={UserShow}
    /> */}
  </Admin>
);

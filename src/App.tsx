import { Admin, Resource, radiantLightTheme } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import PostList from "./pages/posts/post-list";
import UserList from "./pages/users/user-list";
import PostShow from "./pages/posts/post-show";
import PostCreate from "./pages/posts/post-create";
import UserShow from "./pages/users/user-show";
import PostEdit from "./pages/posts/post-edit";
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
      name="posts"
      list={PostList}
      show={PostShow}
      edit={PostEdit}
      create={PostCreate}
    />
    <Resource icon={PersonIcon} name="users" list={UserList} show={UserShow} />
  </Admin>
);

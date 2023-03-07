import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import HeaderOption from "./HeaderOption";
import { useDispatch, useSelector } from "react-redux";
import { auth} from "./firebase";
import { logout, selectUser } from "../../features/userSlice";
import { Link } from "react-router-dom";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <span
          className="header__brand"
          style={{ color: "#1C98ED", fontSize: "20px" }}
        >
          DECRYPT
        </span>
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <Link to="/" style={{textDecoration: "none"}}>
          <HeaderOption Icon={HomeIcon} title="Home" />
        </Link>
        <HeaderOption Icon={QuestionAnswerIcon} title="Explore" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption Icon={PersonIcon} title="Account" />
        <HeaderOption
          avatar={user?.photoURL}
          title={user ? "Logout" : "Login"}
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;

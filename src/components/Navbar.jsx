import React, { useState } from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LoginDialog from "./LoginDialog";
import Register from "./RegisterDialog";
import axios from "axios";
import { Avatar } from "@mui/material";

export default function Navbar(props) {
  const [LoginData, setLoginData] = useState({});
  //ກວດສິດການສົ່ງຄ່າ
  const [authData, setauthData] = useState({});

  const [open, setopen] = useState(false);
  const [openregister, setopenregister] = useState(false);

  const navgigation = useNavigate();
  // functionlink ໄປໜ້າອື່ນ
  const handlink = (path) => {
    navgigation(path);
  };

  const handOpenDialog = () => {
    setopen(true);
  };
  const handCloseDialog = () => {
    setopen(false);
  };

  const handOpenRegister = () => {
    setopenregister(true);
  };
  const handCloseRegister = () => {
    setopenregister(false);
  };

  // ສົ່ງຄ່າໄປກວດສອບ (e ເປັນຕົວປ່ຽນໃສ່ຫຍັງກະໄດ້)
  const handChange = (e) => {
    setauthData({
      ...authData,
      [e.target.name]: e.target.value,
    });
  };

  const handlogin = () => {
    console.log(authData);
    axios({
      url: "http://localhost:3000/Login",
      method: "POST",
      data: authData,
    }).then((res) => {
      if (res.data.success) localStorage.setItem("token", res.data.data.token);
      props.setisLogin(true);
      setopen(false);
      // console.log(res.data)
      //  alert(res.data);
    });
  };
  //ສ້າງໄວ້ເປັນຟັງສັນຂອງການເພີ່ມຂໍ້ມູນ
  const handRegister = () => {
    axios({
      url: "http://localhost:3000/Register",
      method: "POST",
      data: authData,
    }).then((res) => {
      alert(res.data);
    });
  };
  console.log(authData);

  return (
    <div className="navbarcontainer">
      <div className="logo">
        <h1>WISTIA</h1>
      </div>

      <div className="menu">
        <div className="menuItem">
          <p onClick={() => handlink("/")}>Home</p>
        </div>
        <div className="menuItem">
          <p onClick={() => handlink("/product")}>Product</p>
        </div>

        <div className="menuItem">
          <p onClick={() => handlink("/learning")}>Learning center</p>
        </div>

        <div className="menuItem">
          <p onClick={() => handlink("/original")}>Original Series</p>
        </div>

        <div className="menuItem">
          <p onClick={() => handlink("/about")}>About</p>
        </div>
      </div>
      {!props.isLogin ? (
        <div className="button">
          <button onClick={handOpenDialog} className="loginButtonStyle">
            Login
          </button>
          <button onClick={handOpenRegister} className="getStartButtonStyle">
            Register
          </button>
        </div>
      ) : (
        <Avatar
          className="Avatar"
          sx={{ cursor: "pointer" }}
          onClick={() => handlink("/profiel")}
        >
          B
        </Avatar>
      )}
      <div className="Navbaricon">
        <MenuIcon
          fontSize="large"
          sx={{ display: { xs: "block", md: "none" } }}
        />
      </div>

      <LoginDialog
        open={open}
        handCloseDialog={handCloseDialog}
        handlogin={handlogin}
        handChange={handChange}
      />
      <Register
        openregister={openregister}
        handCloseRegister={handCloseRegister}
        handRegister={handRegister}
        handChange={handChange}
      />
    </div>
  );
}

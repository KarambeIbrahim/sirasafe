import React, { useContext, useState } from "react";
import FormInput from "../../components/formInput/FormInput";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
//import { FacebookRounded } from "@mui/icons-material";
import { auth, provider } from "../../firebase";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const { dispatch } = useContext(AuthContext);
  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Identifiant doit être entre 3 et 16 caractères et ne peut contenir de caractères spéciaux",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "L'adresse email doit être valide",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Le mot de passe doit être entre 8 et 20 caractères et doit contenir au moins, 1 lettre, 1 chiffre, 1 caractère spécial",
      pattern: `(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Le mot de passe ne correspond pas",
      pattern: inputValues.password,
      required: true,
    },
  ];

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try{
      await createUserWithEmailAndPassword(
        auth,
        inputValues.email,
        inputValues.password
      ).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: inputValues.username,
        });
        navigate("/login");
      });
    }catch(error){}
  };

  const signInWithGoogle = () => {
    dispatch({ type: "LOGIN_START" });

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        // The signed-in user info.
        const user = result.user;
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
        navigate("/");
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILURE" });
      });
  };
  // console.log(inputValues);
  return (
    
    <div className="register" style= {{backgroundImage:`url("/assets/bg.png")`}}>
      <form>
        <div>
        <Link to="/">
            <img src="/assets/logo.png" className="logo" alt="googleIcon" />
          </Link>
        </div>
        <h2>S'inscrire</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={inputValues[input.name]}
            onChange={handleChange}
          />
        ))}
      
        <button type="submit" onClick={handleRegister}>
          S'inscrire
        </button>

        <div className="formLink">
          <span>Vous avez déjà un compte ? </span>
          <Link to="/login" className="formSignup" style= {{textDecoration:"none"}}>
            {" "}
            Connectez-vous
          </Link>
        </div>

        <div className="line">

        </div>
        
        <div className="media-options">
          <Link to="#" className="facebook google" style= {{textDecoration:"none"}} onClick={signInWithGoogle}>
            <img src="/assets/google.png" className="googleImg" alt="googleIcon" />
            <span className="">Se connecter avec Google</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
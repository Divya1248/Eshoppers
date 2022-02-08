import * as types from "./actiontype";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";

export let Signup = (email, password) => {
  return async dispatch => {
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      dispatch({
        type: "Upload",
        // payload: uploadData,
      });
      sendEmailVerification(user);
    });
  };
};

export let Createuser = (email, password) => {
  return async dispatch => {
     signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch({
          type: types.createData,
          payload: user,
        });
      })
      .catch(error => toast.error(error.message));
  };
};

export let AddBasket = item => ({
  type: types.Addtobasket,
  payload: item,
});

export let removeBasket = id => ({
  type: types.remove_from_cart,
  payload: id,
});

export let SetcartEmpty = () => ({
  type: types.Set_cart_empty,
});

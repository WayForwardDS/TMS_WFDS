
import React from "react";
import AuthForm from "../../components/auth/AuthForm";
import wayforwardLogo from "../../assets/wayforwad.jpg";

const WayforwardLogin = () => {
  return (
    <AuthForm
      logo={wayforwardLogo}
      primaryColor="#E50914"
      buttonColor="red-600"
      companyName="Wayforward"
    />
  );
};

export default WayforwardLogin;
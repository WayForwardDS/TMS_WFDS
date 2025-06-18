import React from "react";
import AuthForm from "../../components/auth/AuthForm";
import chiesiLogo from "../../assets/chiesi.svg";

const ChiesiLogin = () => {
  return (
    <AuthForm
      logo={chiesiLogo}
      primaryColor="#800D7A"
      buttonColor="purple-700"
      companyName="Chiesi"
    />
  );
};

export default ChiesiLogin;
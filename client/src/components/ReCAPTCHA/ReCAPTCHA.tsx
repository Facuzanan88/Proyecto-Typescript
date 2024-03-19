import { Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const [isVerified, setIsVerified] = useState(false);

  // Manejar la verificación de reCAPTCHA
  const onChange = () => {
    console.log("Se realizo un cambio");
    setIsVerified(true);
  };

  return (
    <Stack>
      <ReCAPTCHA
        sitekey="6Lf_ZJ0pAAAAAFZUFexbCLg9vd1Zi7o5d80rUQ5-"
        onChange={onChange}
        onErrored={() => console.log("Error al cargar reCAPTCHA")}
      />
    </Stack>
  );
}

export default ContactForm;

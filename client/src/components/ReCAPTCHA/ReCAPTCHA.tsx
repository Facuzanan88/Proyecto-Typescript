import React, { useState, useRef } from "react";
import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHAType } from "react-google-recaptcha";

function ContactForm() {
  const [captchaValido, setCaptchaValido] = useState(null);
  const [usuarioValido, setUsuarioValido] = useState(false);

  const captcha = useRef<ReCAPTCHAType | null>(null); // Definir el tipo explícitamente

  const onChange = () => {
    if (captcha.current?.getValue()) {
      console.log("el usuario no es un robot");
    }
  };

  return (
    <div>
      <ReCAPTCHA
        ref={captcha}
        sitekey="6Lf_ZJ0pAAAAAFZUFexbCLg9vd1Zi7o5d80rUQ5-"
        onChange={onChange}
        /* onErrored={() => console.log("Error al cargar reCAPTCHA")} */
      />
    </div>
  );
}

export default ContactForm;

import React, { useRef, useState, useEffect } from "react";
import Title from "./Title";
import emailjs from "emailjs-com";

const Contacts = () => {
  const [text, setText] = useState('Submit');
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const form = useRef();

  const contactInfo = {
    
    person1: {
      name: "Moisés Martínez",
      email: "moisesvelasquez101@gmail.com",
      serviceId: "service_djtsqle",
      templateId: "template_g1croun",
      contactNumber: "+503 77274627",
      message: "Mensaje personalizado para la persona 1",
      instagram: "https://www.instagram.com/sarcoxhe/",
      github: "https://github.com/Moidew",
      cv: "https://drive.google.com/file/d/1lDUNDUVbCisit_z03xGtF82snhIm5-ZE/view?usp=share_link"
    },
    person2: {
      name: "Diana Iraheta",
      email: "diana.1r4he@gmail.com",
      serviceId: "service_tjlejap",
      templateId: "template_yuu4yrl",
      contactNumber: "+503 6543210",
      message: "Mensaje personalizado para la persona 2",
      instagram: "https://www.instagram.com/dianairahe03/",
      github: "https://github.com/person2",
      cv: "https://drive.google.com/file/d/1V3VDOfO4DyuY86X3G-g_ouAdMp0i__Hl/view?usp=share_link"
    },
    person3: {
      name: "Daniela Menéndez",
      email: "dgeralmenendez.hernandez@gmail.com",
      serviceId: "service_tpxim6q",
      templateId: "template_yuu4yrl",
      contactNumber: "+503 7924680",
      message: "Mensaje personalizado para la persona 3",
      instagram: "https://www.instagram.com/danimenendez2206/",
      github: "https://github.com/Dani0622",
      cv: "https://drive.google.com/file/d/1lTWEI8VQkYzrKSMzVOcCaKewN4Huqewe/view?usp=share_link"
    },
    person4: {
      name: "Tatiana Menjivar",
      email: "vaneflo1725@gmail.com",
      serviceId: "service_re69i69",
      templateId: "template_yuu4yrl",
      contactNumber: "+503 2097531",
      message: "Mensaje personalizado para la persona 4",
      instagram: "https://www.instagram.com/tati_menjivar25/",
      github: "https://github.com/person4",
      cv: "https://drive.google.com/file/d/1PILWuz0JbVAaJ1ik35ddJ0FLkyGCCPUM/view?usp=drive_link"
    },
    person5: {
      name: "Eliseo Flores",
      email: "eliseofr02@gmail.com",
      serviceId: "service_ne3itxz",
      templateId: "template_yuu4yrl",
      contactNumber: "+503 2097531",
      message: "Mensaje personalizado para la persona 4",
      instagram: "https://www.instagram.com/person4/",
      github: "https://github.com/eliseofr",
      cv: "https://drive.google.com/file/d/1QX2oRXbhOBynHGYvQQbJbeO1yXsPgFNs/view?usp=share_link"
    }


  };

  const selectedPersonInfo = contactInfo[selectedPerson];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(selectedPersonInfo.serviceId, selectedPersonInfo.templateId, form.current, 'Qh2_U20eHzlJNIjyy')
      .then((result) => {
        console.log(result.text);
        setIsMessageSent(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  const handleClick = () => {
    setText("Sent");
    setTimeout(() => {
      setText("Submit");
    }, 2000);
  };

  const handlePersonSelection = (person) => {
    setSelectedPerson(person);
    setIsMessageSent(false);
  };

  const prefillContactForm = () => {
    if (selectedPersonInfo) {
      form.current.elements.Name.value = '';
      form.current.elements.Email.value = '';
      form.current.elements.Message.value = '';

      form.current.elements.Name.value = `Contacting ${selectedPersonInfo.name}`;
      form.current.elements.Email.value = selectedPersonInfo.email;
    }
  };

  const handlePhoneNumberClick = (e) => {
    e.preventDefault();
    if (selectedPersonInfo) {
      alert(`El número de ${selectedPersonInfo.name} es ${selectedPersonInfo.contactNumber}`);
    }
  };

  const downloadCV = (e) => {
    e.preventDefault();
    if (selectedPersonInfo) {
      const link = document.createElement("a");
      link.href = selectedPersonInfo.cv;
      link.download = `${selectedPersonInfo.name}_CV.pdf`;
      link.click();
    }
  };

  useEffect(() => {
    prefillContactForm();
  }, [selectedPerson]);

  return (
    <div id="contact">
      <Title title="Contactanos" />
      <div className="form-container">
        <h3>¿Tiene alguna pregunta o quiere trabajar juntos? Vamos a hacerlo:</h3>
        <form ref={form} onSubmit={sendEmail} method="POST" className="contact-form">
          <input type="text" name="Name" placeholder="Your name" required />
          <input type="email" name="Email" placeholder="Your email" required />
          <textarea name="Message" placeholder="Leave a message!" required />
          <button onClick={handleClick} value="send" type="submit">{text}</button>
        </form>
        <div className="person-selection">
          {Object.keys(contactInfo).map((person) => (
            <button key={person} onClick={() => handlePersonSelection(person)}>
              {contactInfo[person].name}
            </button>
          ))}
        </div>
        {selectedPersonInfo && !isMessageSent && (
          <div className="social-icons">
            <a rel="noopener noreferrer" target="_blank" href={selectedPersonInfo.instagram}>
              <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="Instagram" className="icon" />
            </a>
            <a rel="noopener noreferrer" target="_blank" href={selectedPersonInfo.github}>
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="icon" />
            </a>
            <a href="#" onClick={handlePhoneNumberClick}>
              <img src="https://cdn-icons-png.flaticon.com/512/73/73552.png" alt="Phone" className="icon" />
            </a>
            <a href="#" onClick={downloadCV}>
              <img src="https://cdn-icons-png.flaticon.com/512/3846/3846805.png" alt="CV" className="icon" />
            </a>
          </div>
        )}
        {isMessageSent && (
          <div className="success-message">
            <p>Your message has been sent successfully!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;


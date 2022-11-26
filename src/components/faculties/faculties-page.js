import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../ui/footer/footer";
import Header from "../ui/header/header";

const FacultiesPage = () => {
  const [faculties, setFaculties] = useState([]);

  const getFaculties = () => {
    axios.get("http://localhost:3000/api/faculties").then((response) => {
      const data = response.data;
      console.log(data);
    }).catch(error => {
        console.log(error)
    });
  };
  getFaculties();
  return (
    <div>
      <Header />
      <Accordion>
        <AccordionSummary id="panel1" aria-controls="panel1content">
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>Text</AccordionDetails>
      </Accordion>
      <Footer />
    </div>
  );
};
export default FacultiesPage;

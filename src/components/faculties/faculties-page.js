import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../ui/header/header";

const FacultiesPage = () => {
  const [faculties, setFaculties] = useState([]);

  const GetDepartments = (dep) =>{
   return(
    <div>
      {dep.map(({ id, name}) => (
        <p className="weed-text" key={id}>
          {" "}
          {name} 
          <hr></hr>
        </p>
      ))}
    </div>
   )
  };

  useEffect(() => {
    const getFaculties = () => {
      axios
        .get("http://localhost:3000/api/faculties")
        .then((response) => {
          const data = response.data;
          setFaculties(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getFaculties();
  }, []);
  return (
    <div>
      <Header />
      {faculties.map(({ id, name, departments }) => (
        <Accordion>
          <AccordionSummary id={'1'} aria-controls="panel1content">
            {name}
          </AccordionSummary>
          <AccordionDetails>
            {GetDepartments(departments)}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
export default FacultiesPage;

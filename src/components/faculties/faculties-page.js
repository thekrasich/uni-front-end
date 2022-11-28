import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../ui/header/header";
import "../faculties/style.css";

const FacultiesPage = () => {
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    const getFaculties = () => {
      axios
        .get("http://localhost:3000/api/faculties")
        .then((response) => {
          const data = response.data;
          setFaculties(data);
          console.log(data);
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
      {faculties.map((faculty) => (
        <div>
          <div className="faculty-container">
            <img
              className="faculty-image-container"
              src={faculty.imageUrl}
              alt="faculty_image"
            />
            <p className="faculty-text">
              <p>{faculty.name}</p> <p>{faculty.address}</p>
              <p>{faculty.email}</p> <p>{faculty.phone}</p>
              <a href={faculty.url}>{faculty.url}</a>
            </p>
          </div>
          <Accordion>
            <AccordionSummary
              id={"1"}
              aria-controls="panel1content"
              expandIcon={<ExpandMore />}
            >
              <p>Кафедри</p>
            </AccordionSummary>
            <AccordionDetails>
              {faculty.departments.map((dep) => (
                <div>
                  <div className="faculty-container">
                    <img
                      className="dep-image-container"
                      src={dep.imageUrl}
                      alt="depContainer"
                    />
                    <p className="department-text">
                      <p>{dep.name}</p> <p>{dep.email}</p>
                    </p>
                  </div>
                  <hr></hr>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>

          <hr></hr>
          <p></p>
        </div>
      ))}
    </div>
  );
};
export default FacultiesPage;

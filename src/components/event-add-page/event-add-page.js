import { useEffect, useState } from "react";
import Select from "react-select";
import "../event-add-page/style.css";
import Header from "../ui/header/header";
import axios from "axios";

const EventAddPage = () => {
  const [options, setOptions] = useState([]);

  const convertToOptions = (tags) => {
    setOptions(tags.map((tag) => ({ value: tag.id, label: tag.name })));
    console.log(options);
  };

  useEffect(() => {
    const getTags = () => {
      axios
        .get("http://localhost:3000/api/tags")
        .then((response) => {
          const data = response.data;
          convertToOptions(data.items);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getTags();
  }, []);
  const onSubmit = (addevent) => {
    addevent.preventDefault();
    const { title, description, departmentId, startsAt, endsAt, tags } =
      Object.fromEntries(new FormData(addevent.target));
    const event = {
      title,
      description,
      departmentId,
      startsAt,
      endsAt,
      tags,
    };
  };
  return (
    <div>
      <Header />
      <form className="event-add-container">
        <p className="event-add-header-text">Створити подію</p>
        <hr></hr>
        <p className="event-add-text">Заголовок</p>
        <input name="input-container"></input>
        <p className="event-add-text">Опис</p>
        <textarea name="input-container"></textarea>
        <p className="event-add-text">Починається</p>
        <input type="datetime-local"></input>
        <p className="event-add-text">Закінчується</p>
        <input type="datetime-local"></input>
        <p className="event-add-text">Теги</p>
        <Select isMulti options={options} />
        <p className="event-add-text">Відділення</p>
        <Select options={options} />
        <p></p>
        <button onSubmit={onSubmit}>Створити</button>
      </form>
    </div>
  );
};

export default EventAddPage;

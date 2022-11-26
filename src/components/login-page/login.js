import "../login-page/style.css";
import Header from "../ui/header/header";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <form className="login-form">
      <p>Вхід у систему:</p>
      <p>E-mail: </p>
      <input className="login-input-field"></input>
      <p>Пароль:</p>
      <input type="password" className="login-input-field"></input>
      <p>Немає облікового запису?</p>
      <a className="login-link" href="/Registration">Зареєструйся вже!</a>
      </form>
    </div>
  );
};
export default LoginPage;

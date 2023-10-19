import RegisterProgress from "./RegisterProgress.jsx";
import RegisterForm from "./RegisterForm.jsx";
import styles from './RegisterProgress.module.scss'

function Register() {
  
  return (
    <section
      className={`${styles.registerContainer} col col-lg-6 col-sm-12`}
      data-phase="1"
      data-total-price="0">
      <RegisterProgress />
      <RegisterForm />
    </section>
  );
}

export default Register;

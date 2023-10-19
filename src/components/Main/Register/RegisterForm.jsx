import styles from './RegisterForm.module.scss'
import { AddressPhase } from './ThreeStepPhase'
function RegisterForm() {
  return (
    <>
      {/* <!-- register-form --> */}
      <section className={`${styles.formContainer} col col-12`}>
        {/* <!-- address phase --> */}
        {/* 到Register/ThreeStepPhase/AddressPhase */}

        {/* <!-- shipping phase --> */}
        {/* 到Register/ThreeStepPhase/ShippingPhase */}

        {/* <!-- credit-card phase --> */}
        {/* 到Register/ThreeStepPhase/CreditCardPhase */}
        <AddressPhase />

      </section>
    </>
  );
}

export default RegisterForm;

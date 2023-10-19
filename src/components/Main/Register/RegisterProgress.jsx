import styles from "./RegisterProgress.module.scss";

function ProgressGroup ({ stepNumber, progressLabel, dataPhase }) {
  return (
    <span className={styles.progressGroup} data-phase={dataPhase}>
      <span className={styles.progressIcon}>
        <span className={styles.text}>{stepNumber}</span>
        {/* <svg className={`${styles.icon} cursor-point`}>
          <use xlinkHref={`${icons}#pg-complete.svg`} />
        </svg> */}
      </span>
      <span className={styles.progressLabel}>{progressLabel}</span>
    </span>
  )
}



function RegisterProgress() {
  return (
    <>
      {/* <!-- register-title --> */}
      {/* <h2 className={`${styles.registerTitle} col col-12`}>結帳</h2> */}

      {/* <!-- register-progress --> */}
      {/* <section className={`${styles.progressContainer} col col-12`}>
        <span className={styles.progressGroup} data-phase="address">
          <span className="text">
            <span className={styles.text}>1</span> */}
      {/* <svg className="icon cursor-point">
              <use xlink:href="#svg-icon-pg-complete"></use>
              <use href="#svg-icon-pg-complete"></use>
            </svg> */}
      {/* </span> */}

      {/* <span className={styles.progressLabel}>寄送地址</span>
        </span>
        <span className={styles.progressBar} data-order="1"></span>
        <span className={styles.progressGroup} data-phase="shipping">
          <span className={styles.progressIcon}>
            <span className={styles.text}>2</span> */}
      {/* <svg className="icon cursor-point">
              <use xlink:href="#svg-icon-pg-complete"></use>
              <use href="#svg-icon-pg-complete"></use>
            </svg> */}
      {/* </span> */}

      {/* <span className={styles.progressLabel}>運送方式</span>
        </span>
        <span className={styles.progressBar} data-order="2"></span>
        <span className={styles.progressGroup} data-phase="credit-card">
          <span className={styles.progressIcon}>
            <span className={styles.text}>3</span> */}
      {/* <svg className="icon cursor-point">
              <use xlink:href="#svg-icon-pg-complete" ></use>
              <use href="#svg-icon-pg-complete"></use>
            </svg> */}
      {/* </span>
          <span className={styles.progressLabel}>付款資訊</span>
        </span>
      </section> */}

      <h2 className={`${styles.registerTitle} col col-12`}>結帳</h2>

      <section className={`${styles.progressContainer} col col-12`}>
        <ProgressGroup
          dataPhase="address"
          stepNumber="1"
          progressLabel="寄送地址"
        />
        <span className={styles.progressBar} data-order="1" />
        <ProgressGroup
          dataPhase="shipping"
          stepNumber="2"
          progressLabel="運送方式"
        />
        <span className={styles.progressBar} data-order="2" />
        <ProgressGroup
          dataPhase="credit-card"
          stepNumber="3"
          progressLabel="付款資訊"
        />
      </section>
    </>
  );
}

export default RegisterProgress;

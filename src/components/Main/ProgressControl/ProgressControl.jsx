import styles from "./ProgressControl.module.scss";
import rightArrow from "../../../icons/right-arrow.svg";
// import leftArrow from "../../../icons/left-arrow.svg";

function NextButton({ text}) {
  return (
    <button className={`${styles.next} cursor-point`} >
      {text}
      <span>
        <img src={rightArrow} alt="next step" />
      </span>
    </button>
  );
}

// function PrevButton({ text }) {
//   return (
//     <button className={`${styles.prev} cursor-point`} >
//       <span>
//         <img src={leftArrow} alt="previous step" />
//       </span>
//       {text}
//     </button>
//   );
// }

function ButtonDataPhase({ dataPhase, children }) {
  return (
    <section
      className={`${styles.buttonGroup} col col-12`}
      data-phase={dataPhase}
    >
      {children}
    </section>
  );
}

function ProgressControl() {
  
  return (
    <>
      {/* <section className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`} >
          <section className="button-group col col-12" data-phase="address">
            <button className={`${styles.next} cursor-point`}>
              下一步 */}
      {/* <svg className="cursor-point">
                <use xlink:href="#svg-icon-right-arrow"></use>
                <use href="#svg-icon-right-arrow"></use>
              </svg> */}
      {/* <img src={rightArrow} alt="next step" />
            </button>
          </section> */}

      {/* <section className={`${styles.buttonGroup} col col-12`} data-phase="shipping">
            <button className="prev">
              <svg className="cursor-point">
                <use xlink:href="#svg-icon-left-arrow"></use>
                <use href="#svg-icon-left-arrow"></use>
              </svg>
              上一步
            </button>
            
            <button className={`${styles.next}`}>
              下一步
              <svg className="cursor-point">
                <use xlink:href="#svg-icon-right-arrow"></use>
                <use href="#svg-icon-right-arrow"></use>
              </svg>
            </button>
          </section> */}

      {/* <section className={`${styles.buttonGroup} col col-12`}data-phase="credit-card"> */}
      {/* <button className="prev">
              <svg className="cursor-point">
                <use xlink:href="#svg-icon-left-arrow"></use>
                <use href="#svg-icon-left-arrow"></use>
              </svg>
              上一步
            </button> */}

      {/* <button className={`${styles.next}`}>
              確認下單
            </button>
          </section>
        </section> */}

      <section
        className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}
      >
        <ButtonDataPhase dataPhase="address">
          <NextButton text="下一步"  />
        </ButtonDataPhase>

        {/* <ButtonDataPhase dataPhase="shipping">
          <NextButton text="下一步" />
          <PrevButton text="上一步"  />
        </ButtonDataPhase>

        <ButtonDataPhase dataPhase="credit-card">
          <NextButton text="確認下單" />
        </ButtonDataPhase> */}
      </section>
    </>
  );
}

export default ProgressControl;

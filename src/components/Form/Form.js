import {useEffect, useRef} from "react";

import Select from "../Select/Select";

import formBackground from "../../assets/images/FormBackground.png";
import formSubstrate from "../../assets/images/FormSubstrate.png";

import "./Form.scss";

const Form = () => {

  const formRef = useRef(null);
  const substrateRef = useRef(null);

  const changeSubstratePosition = (e) => {
    if (formRef.current && substrateRef.current) {

      const element = formRef.current.getBoundingClientRect();
      let layerX = e.clientX-element.left
      let layerY = e.clientY-element.top

      const width = formRef.current.clientWidth;
      const height = formRef.current.clientHeight;

      const eighthPartOfWidth = width/16;
      const eighthPartOfHeight = height/16;

      const elementTop = 14;
      const elementLeft = 11;

      if (layerX > width / 2) {
        const position = layerX - width / 2;
        const shift = Math.ceil(position/eighthPartOfWidth)
        substrateRef.current.style.left = `${elementLeft + shift}px`;
      } else {
        const shift = Math.ceil(9 - layerX/eighthPartOfWidth)
        substrateRef.current.style.left = `${elementLeft - shift}px`;
      }

      if (layerY > height / 2) {
        const position = layerY - height / 2;
        const shift = Math.ceil(position/eighthPartOfHeight)
        substrateRef.current.style.top = `${elementTop + shift}px`;
      } else {
        const shift = Math.ceil(9 - layerY/eighthPartOfHeight)
        substrateRef.current.style.top = `${elementLeft - shift}px`;
      }
    }
  };

  const changeToInitSubstratePosition = () => {
    substrateRef.current.style.left = "11px";
    substrateRef.current.style.top = "14px";
  }

  useEffect(() => {
    const element = formRef.current;
    if (element) {
      element.addEventListener('mousemove', changeSubstratePosition);
      element.addEventListener('mouseout', changeToInitSubstratePosition);
      return () => {
        element.removeEventListener('mousemove', changeSubstratePosition);
        element.removeEventListener('mouseout', changeToInitSubstratePosition);
      }
    }
  }, [])

  return (
    <div ref={formRef} className="form__wrapper" style={{backgroundImage: `url(${formBackground})`}}>
      <img ref={substrateRef} className="from__substrate" src={formSubstrate} alt="substrate"/>

      <div className="from__title">Sign up</div>
      <div className="from__description">before August 31 and pay $500 during the first three months</div>

      <form className="form">
        <input className="form__input" placeholder="Name" type="text"/>
        <input className="form__input" placeholder="Business email" type="email"/>

        <Select
          options={["Ad Agency", "Ad Network", "Advertiser", "Publisher", "Other"]}
          defaultOption="Company type"
        />

        <button className="form__button">Get Discount</button>
      </form>

    </div>
  );
};

export default Form;

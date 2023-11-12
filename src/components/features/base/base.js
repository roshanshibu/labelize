import "./base.css";
const BaseFeature = (props) => {
  return (
    <>
      <p className="featureTitle">{props.title}</p>
      <p className="featureDescription">{props.description}</p>
    </>
  );
};

export default BaseFeature;

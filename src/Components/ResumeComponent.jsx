import PropTypes from "prop-types";

const ResumeComponent = ({ text }) => {
  return <h1 className="text-green-500">{text}</h1>;
};

ResumeComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ResumeComponent;

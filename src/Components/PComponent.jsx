import PropTypes from "prop-types";

const PComponent = ({ text }) => {
  return <p>{text}</p>;
};

PComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PComponent;

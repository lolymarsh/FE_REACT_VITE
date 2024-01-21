import PropTypes from "prop-types";

const H2Component = ({ text }) => {
  return <h2>{text}</h2>;
};

H2Component.propTypes = {
  text: PropTypes.string.isRequired,
};

export default H2Component;

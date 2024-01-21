import PropTypes from "prop-types";

const ContainerComponent = ({ children }) => {
  return <div className="container mx-auto p-4">{children}</div>;
};

ContainerComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContainerComponent;

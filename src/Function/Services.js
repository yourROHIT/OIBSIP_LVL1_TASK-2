const Services = ({ icon, text }) => {
  return (
    <div className="service">
      <i className={icon}></i>
      <h2 className="service-heading">{text}</h2>
    </div>
  );
};

export default Services;

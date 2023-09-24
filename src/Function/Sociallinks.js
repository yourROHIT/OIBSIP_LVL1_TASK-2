const socialLinks = ({ link, icon }) => {
  return (
    <a href={link} className="social-media-link">
      <i className={icon}></i>
    </a>
  );
};

export default socialLinks;

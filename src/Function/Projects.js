const Project = ({ name, languages, image, link, text }) => {
  return (
    <div className="project">
      <div className="project-text">
        <h2 className="project-name">{name}</h2>
        <h4 className="project-technologies">{languages}</h4>
      </div>
      <img src={image} className="project-img" />
      <a href={link} className="project-link" target="_blank">
        {text}
      </a>
    </div>
  );
};

export default Project;

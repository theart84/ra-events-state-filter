import classes from './ProjectList.module.css';
import ProjectListItem from "./ProjectListItem/ProjectListItem";

const ProjectList = (props) => {

  return (
    <div className={classes.container}>
      {props.images.map(image =>
        <ProjectListItem
          key={Math.random()}
          img={image.img}
        />)
      }
    </div>
  )
}

export default ProjectList;

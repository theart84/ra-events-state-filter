import classes from './ProjectListItem.module.css';

const ProjectListItem = (props) => {
  return (
    <div className={classes['image-container']}>
      <img
        className={classes['image-item']}
        src={props.img}
        alt={Math.random()}
      />
    </div>
  )
}

export default ProjectListItem;

import classes from './ToolbarItem.module.css';

const ToolbarItem = (props) => {
  let classButton = classes.filterButton;
  if (props.selected === props.title) {
    classButton = `${classes.filterButton} ${classes.active}`;
  }
  return (
    <div>
      <button
        className={classButton}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </div>
  )
}

export default ToolbarItem;

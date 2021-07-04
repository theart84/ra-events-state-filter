import ToolbarItem from "./ToolbarItem/ToolbarItem";
import classes from './Toolbar.module.css';

const Toolbar = (props) => {
  return (
    <div className={classes['filter-container']}>
      {props.filters.map(filterItem => (
        <ToolbarItem
          key={Math.random()}
          title={filterItem}
          selected={props.selected}
          onClick={props.onSelectFilter}
        />
      ))}
    </div>

  )
}

export default Toolbar;

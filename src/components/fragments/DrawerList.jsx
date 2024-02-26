import DrawerItem from "components/elements/DrawerItem";
import { drawerList } from "constants/drawer";
import PropTypes from "prop-types";

const DrawerList = ({ location, onMenuClick }) => {
  return (
    <div className="mx-4.5 gap-6">
      {drawerList.map((item, index) => (
        <DrawerItem key={index.toString()} item={item} index={index} location={location} onMenuClick={onMenuClick} />
      ))}
    </div>
  );
};

export default DrawerList;

DrawerList.propTypes = {
  location: PropTypes.object,
  onMenuClick: PropTypes.func,
};

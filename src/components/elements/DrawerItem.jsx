import { animated } from "@react-spring/web";
import { drawerArrow } from "assets/images";
import useDrawerSubMenu from "hooks/useDrawerSubMenu";
import PropTypes from "prop-types";
import { useRef } from "react";

const DrawerItem = ({ item, index, location, onMenuClick }) => {
  const subMenuRef = useRef(null);

  const { arrowAnim, subMenuAnim, onSubMenuItemClick } = useDrawerSubMenu(index, subMenuRef.current ? subMenuRef.current.clientHeight : 0);

  return (
    <div>
      <button className="flex-row py-0 items-center gap-4.5" onClick={() => onMenuClick(item, index)}>
        <img src={location.pathname.includes(item.path) ? item.active : item.inactive} />

        <h3 style={arrowAnim} className={`flex-1 text-start ${location.pathname.includes(item.path) ? "text-primary" : "text-placeholder"}`}>
          {item.label}
        </h3>

        {item.subMenu && <animated.img style={arrowAnim} src={drawerArrow} />}
      </button>

      {item.subMenu && (
        <animated.div style={subMenuAnim} className="overflow-hidden">
          <div className="gap-6 pl-11 pt-6" ref={subMenuRef}>
            {item.subMenu.map((item, index) => (
              <button key={index.toString()} className="py-0" onClick={() => onSubMenuItemClick(item.path)}>
                <h4 className={`text-placeholder ${location.pathname.includes(item.path) ? "text-primary" : "text-placeholder"} whitespace-nowrap`}>{item.label}</h4>
              </button>
            ))}
          </div>
        </animated.div>
      )}
    </div>
  );
};

export default DrawerItem;

DrawerItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  location: PropTypes.object,
  onMenuClick: PropTypes.func,
};

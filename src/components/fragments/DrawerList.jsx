import DrawerItem from "components/elements/DrawerItem";
import { drawerListAdmin, drawerListDokter } from "constants/drawer";
import ScrollContainer from "containers/ScrollContainer";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { roleState } from "store/atom/authState";

const DrawerList = ({ location, onMenuClick }) => {
  const role = useRecoilValue(roleState);

  return (
    <ScrollContainer styles="mx-4.5 gap-6">
      {(role === 2 ? drawerListDokter : drawerListAdmin).map((item, index) => (
        <DrawerItem key={index.toString()} item={item} index={index} location={location} onMenuClick={onMenuClick} />
      ))}
    </ScrollContainer>
  );
};

export default DrawerList;

DrawerList.propTypes = {
  location: PropTypes.object,
  onMenuClick: PropTypes.func,
};

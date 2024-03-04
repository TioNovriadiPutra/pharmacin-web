import PropTypes from "prop-types";
import { menuIcon, profileIcon } from "assets/images";
import ProfileMenu from "components/elements/ProfileMenu";
import { drawerListAdmin, drawerListDokter } from "constants/drawer";
import { useRecoilValue } from "recoil";
import { drawerSubIndexState } from "store/atom/pageState";
import { roleState } from "store/atom/authState";

const DrawerProfile = ({ onClick, profileData, onMenuClick }) => {
  const drawerSubIndex = useRecoilValue(drawerSubIndexState);
  const role = useRecoilValue(roleState);

  return (
    <div>
      <div className="mx-3.25 flex-row flex-1 items-center gap-5.5 overflow-hidden">
        <img src={profileIcon} onClick={onClick} />

        <div className="gap-1 w-34">
          <h2 className="truncate">{profileData.name}</h2>

          <p className="truncate">{profileData.role}</p>
        </div>

        <img src={menuIcon} className="cursor-pointer" onClick={onMenuClick} />
      </div>

      {drawerSubIndex === (role === 2 ? drawerListDokter.length + 1 : drawerListAdmin.length + 1) && <ProfileMenu />}
    </div>
  );
};

export default DrawerProfile;

DrawerProfile.propTypes = {
  onClick: PropTypes.func,
  profileData: PropTypes.object,
  onMenuClick: PropTypes.func,
};

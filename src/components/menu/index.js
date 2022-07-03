import { styled } from '@mui/styles';
import { IconButton } from '@mui/material';
import HomeIcon from '../../assets/svg/home.svg';
import NotificationIcon from '../../assets/svg/notification.svg';
import TaskIcon from '../../assets/svg/task.svg';
import UserIcon from '../../assets/svg/user.svg';

const menuList = [
  {
    id: 1,
    icon: HomeIcon,
  },
  {
    id: 2,
    icon: NotificationIcon,
  },
  {
    id: 3,
    icon: TaskIcon,
  },
  {
    id: 4,
    icon: UserIcon,
  },
];

const Menu = () => {
  return (
    <>
      <Wrapper>
        {menuList.map((menu) => (
          <IconButton key={menu.id}>
            <img src={menu.icon} alt={UserIcon} />
          </IconButton>
        ))}
      </Wrapper>
    </>
  );
};

const Wrapper = styled(`div`)({
  position: 'absolute',
  maxHeight: '96px',
  bottom: '0',
  borderTop: '1px solid #E2E2EA',
  width: '100%',
  padding: '20px 25px 36px 25px',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '375px',
});

export default Menu;

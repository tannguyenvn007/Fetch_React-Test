import { styled } from '@mui/styles';
import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Coupon from '../coupon';

const Header = () => {
  return (
    <Wrapper>
      <IconButtonCustom variant='contained'>
        <ChevronLeftIcon />
      </IconButtonCustom>
      <Title>Silver Tier</Title>
      <Description>
        In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem
        exclusive rewards.
      </Description>
      <Coupon />
    </Wrapper>
  );
};

const Wrapper = styled(`div`)({
  background: '#171725',
  padding: '60px 24px 0;',
  minHeight: '428px',
  position: 'relative',
});

const Title = styled(`div`)({
  fontSize: '32px',
  fontWeight: '600',
  marginBottom: '8px',
  marginTop: '16px',
  lineHeight: '40px',
  color: '#fff',
});

const Description = styled(`div`)({
  fontSize: '16px',
  fontWeight: '400',
  color: '#B5B5BE',
  lineHeight: '24px',
});

const IconButtonCustom = styled(IconButton)({
  '&.MuiIconButton-root': {
    backgroundColor: '#FFFFFF',
  },

  '&.MuiIconButton-root:hover': {
    backgroundColor: '#FFFFFF',
  },
});

export default Header;

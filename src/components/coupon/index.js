import { styled } from '@mui/styles';
import { Button, LinearProgress, linearProgressClasses } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CouponBackgroundImage from '../../assets/svg/coupon-background.svg';

const Coupon = () => {
  return (
    <Wrapper>
      <CoinBalance>
        <Title>Available Coin balance</Title>
        <CoinNumber>340</CoinNumber>
        <BorderLinearProgress variant='determinate' value={70} />
        <Description>
          You have paid rental fee for $1,200. Pay more $800 to achieve Gold
          Tier.
        </Description>
      </CoinBalance>
      <div>
        <ViewTierBenefit endIcon={<ChevronRightIcon />}>
          View tier benefits
        </ViewTierBenefit>
      </div>
      <CouponButtonWrapper>
        <CouponButton variant='contained'>My Coupons</CouponButton>
      </CouponButtonWrapper>
      <CouponUpdateDate>Updated : 02/11/2021</CouponUpdateDate>
    </Wrapper>
  );
};

const Wrapper = styled(`div`)({
  position: 'absolute',
  padding: '24px',
  width: '343px',
  background: '#fff',
  top: '252px',
  boxSizing: 'border-box',
  left: '16px',
  borderRadius: '8px',
  boxShadow: '0px 12px 18px 0px #1717250A',
  backgroundImage: `url(${CouponBackgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  objectFit: 'cover',
});

const CoinBalance = styled(`div`)({});
const Title = styled(`div`)({
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '24px',
  color: '#B5B5BE',
  marginBottom: '8px',
});

const CoinNumber = styled(`div`)({
  fontWeight: '400',
  fontSize: '48px',
  lineHeight: '56px',
  color: '#171725',
  marginBottom: '32px',
});

const BorderLinearProgress = styled(LinearProgress)({
  borderRadius: 2.5,
  [`&.${linearProgressClasses.root}`]: {
    height: 5,
  },
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#E2E2EA',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 2.5,
    backgroundColor: '#0062FF',
  },
});

const Description = styled(`div`)({
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#92929D',
  marginTop: '32px',
  marginBottom: '16px',
});

const ViewTierBenefit = styled(Button)({
  '&.MuiButton-root': {
    padding: 0,
    fontWeight: 400,
    fontSize: 16,
    textTransform: 'none',
  },
});

const CouponButtonWrapper = styled(`div`)({
  marginTop: '24px',
});

const CouponButton = styled(Button)({
  '&.MuiButton-root': {
    width: '100%',
    height: 60,
    backgroundColor: '#171725',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: ' 18px',
    lineHeight: '24px',
  },
});

const CouponUpdateDate = styled(`div`)({
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  color: '#B5B5BE',
  textAlign: 'center',
  marginTop: '16px',
});

export default Coupon;

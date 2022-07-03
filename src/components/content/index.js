import { Box, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/styles';

import Petrol1 from '../../assets/svg/petrol1.svg';
import Petrol2 from '../../assets/svg/petrol2.svg';
import Rental1 from '../../assets/svg/rental1.svg';
import Rental2 from '../../assets/svg/rental2.svg';
import Food1 from '../../assets/svg/food1.svg';
import Food2 from '../../assets/svg/food2.svg';
import { Fragment } from 'react';

const contentData = [
  {
    id: 1,
    categoryName: 'Petrol',
    listItem: [
      {
        id: 1,
        image: Petrol1,
        title: '15 Coins',
        description:
          '50% discount for every $100 top-up on your Shell Petrol Card',
      },
      {
        id: 2,
        image: Petrol2,
        title: '1,000 Coins',
        description: '70% discount top-up on your Shell Petrol Card',
      },
    ],
  },
  {
    id: 2,
    categoryName: 'Rental Rebate',
    listItem: [
      {
        id: 1,
        image: Rental1,
        title: '20 Coins',
        description: 'Get $20 Rental rebate',
      },
      {
        id: 2,
        image: Rental2,
        title: '20 Coins',
        description: 'Get $20 Rental rebate',
      },
    ],
  },
  {
    id: 3,
    categoryName: 'Food and Beverage',
    listItem: [
      {
        id: 1,
        image: Food1,
        title: '25 Coins',
        description: 'NTUC Fairprice $50 Voucher',
      },
      {
        id: 2,
        image: Food2,
        title: '5 Coins',
        description: 'Free Cold Stone Sundae at any flavour!',
      },
    ],
  },
];

const Content = () => {
  return (
    <Wrapper>
      {contentData.map((data) => {
        return (
          <Fragment key={data.id}>
            <CategoryName>{data.categoryName}</CategoryName>
            <ListItem>
              <BoxCustom
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '24px',
                }}
              >
                {data.listItem.map((item) => (
                  <CardCustom key={item.id} sx={{ maxWidth: 200 }}>
                    <CardMedia
                      component='img'
                      image={item.image}
                      alt=''
                      style={{ maxHeight: '98px' }}
                    />
                    <CardContentCustom>
                      <TitleItem>{item.title}</TitleItem>
                      <Description>{item.description}</Description>
                    </CardContentCustom>
                  </CardCustom>
                ))}
              </BoxCustom>
            </ListItem>
          </Fragment>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled(`div`)({
  marginTop: '210px',
});

const ListItem = styled(`div`)({
  width: '100%',
  overflowX: 'auto',
  marginBottom: '24px',
  paddingBottom: '24px',

  '&:last-child': {
    marginBottom: '16px',
  },
});

const BoxCustom = styled(Box)({
  width: 'max-content',
  padding: '0 24px',
});

const CardCustom = styled(Card)({
  '&.MuiPaper-root': {
    border: '1px solid #F1F1F5',
    boxSizing: 'border-box',
    boxShadow: '0px 12px 18px 0px rgba(23, 23, 37, 0.04)',
    borderRadius: '4px',
    height: '240px',
  },
});

const CategoryName = styled(`div`)({
  fontWeight: '600',
  fontSize: '18px',
  color: '#171725',
  marginBottom: '24px',
  lineHeight: '24px',
  padding: '0 24px',
});

const CardContentCustom = styled(CardContent)({
  paddingBottom: '24px',
});

const TitleItem = styled(`div`)({
  fontWeight: '600',
  fontSize: '16px',
  color: '#0062FF',
  marginBottom: '8px',
  lineHeight: '24px',
});

const Description = styled(`div`)({
  fontWeight: '400',
  fontSize: '16px',
  color: '#92929D',
  lineHeight: '24px',
});

export default Content;

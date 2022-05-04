import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star.js";
import open from "../../../../assets/open.js";

const Title = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const Address = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RestaurantCard = styled(Card)`
  margin: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)``;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Open = styled(SvgXml)`
  margin-left: auto;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Test Restaurant",
    icon,
    photo = [
      "https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg",
    ],
    address = "100 Made up Road",
    isOpenNow = true,
    rating = 4,
    isClosed,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photo[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map((i) => (
            <SvgXml xml={star} height={25} width={25} />
          ))}
          {isOpenNow && <Open xml={open} height={25} width={25} />}
        </Rating>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

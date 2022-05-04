import { Card } from "react-native-paper";
import styled from "styled-components";

const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.body};
`;

const RestaurantCard = styled(Card)`
  margin: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 0px;
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

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photo[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

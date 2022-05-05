import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star.js";
import open from "../../../../assets/open.js";
import { Text } from "../../../components/typography";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Rating,
  Open,
} from "./restaurant-info-card.styles.js";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Test Restaurant",
    photo = [
      "https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg",
    ],
    address = "100 Made up Road",
    isOpenNow = true,
    rating = 4,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photo[0] }} />
      <Info>
        <Text variant="title">{name}</Text>
        <Rating>
          {ratingArray.map((i) => (
            <SvgXml xml={star} height={25} width={25} />
          ))}
          {isOpenNow && <Open xml={open} height={25} width={25} />}
        </Rating>
        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};

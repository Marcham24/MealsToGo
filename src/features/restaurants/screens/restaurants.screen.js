import { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { SafeView } from "../../../components/safeview";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  return (
    <SafeView>
      <SearchView>
        <Searchbar />
      </SearchView>
      {isLoading ? (
        <ActivityIndicator size={50} />
      ) : (
        <FlatList
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeView>
  );
};

import { View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeView = styled.SafeAreaView`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => (
  <SafeView>
    <SearchView>
      <Searchbar />
    </SearchView>
    <View>
      <RestaurantInfoCard />
    </View>
  </SafeView>
);

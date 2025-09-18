import { Image, Text, View } from "react-native";

import { StyleSheet } from "react-native";
import { AssignedTask } from "../types";
import BrandsScreen from "../BrandsScreen";

const AssignedTaskCard: React.FC<{ item: AssignedTask }> = ({ item }) => {
    return (
      <View style={BrandsScreen.assignedStyles.card}>
        {/* Poster image (rounded top like your mock) */}
        <Image source={item.poster} style={assignedStyles.poster} />
  
        {/* Text block */}
        <View style={assignedStyles.textWrap}>
          <Text style={assignedStyles.brand}>{item.brand}</Text>
          <Text style={assignedStyles.desc} numberOfLines={2}>
            {item.description}
          </Text>
        </View>
      </View>
    );
  };


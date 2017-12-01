import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SearchBar, Icon } from "react-native-elements";
import LinearGradient from "../components/LinearGradient";
import Header from "../components/Header";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  groundHeader: {
    flex: 1
  },
  ground: {
    flex: 4
  },
  searchBar: {
    backgroundColor: "transparent",
    marginHorizontal: 0,
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    margin: 0,
    padding: 0
  },
  searchContainer: {
    flexDirection: "row",
    marginTop: "10%",
    marginHorizontal: "5%"
  },
  search: {
    width: "85%"
  },
  menu: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center"
  }
});

class Ground extends React.Component {
  state = {
    searchText: ""
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.groundHeader}>
          <LinearGradient>
            <View style={styles.searchContainer}>
              <View style={styles.search}>
                <SearchBar
                  lightTheme
                  clearIcon
                  onChangeText={text => {
                    this.setState({ searchText: text });
                  }}
                  placeholder="Search"
                  containerStyle={styles.searchBar}
                  inputStyle={styles.searchBarInput}
                  showLoadingIcon={false}
                />
              </View>
              <View style={styles.menu}>
                <Icon name="menu" size={40} color="#d9d9d9" />
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.ground}>
          <View />
        </View>
      </View>
    );
  }
}

export default Ground;

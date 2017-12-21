import React from "react";
import { StyleSheet, View, Text, Keyboard, ScrollView } from "react-native";
import Button from "../components/Button";
import CloseButton from "../components/CloseButton";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 20
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "5%"
  },
  button: {
    marginTop: "5%"
  },
  errorText: {
    color: "#FF0000",
    fontSize: 13
  }
});

class ShowItems extends React.Component {
  state = {
    error: ""
  };

  render() {
    const {
      error = "",
      closeModal,
      Items = [{ id: 1, name: "Ground 1" }, { id: 2, name: "Ground 2" }]
    } = this.props;
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View style={styles.content}>
            <View>
              <View style={{ flexDirection: "row" }}>
                <CloseButton onPress={closeModal} />
              </View>
              <View>{Items.map(item => <View>{item.name}</View>)}</View>

              <View style={styles.button}>
                <Button
                  title="Submit"
                  onPress={props.handleSubmit}
                  loading={false}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default ShowItems;

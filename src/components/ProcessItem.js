import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Icon } from "react-native-elements";
import * as ModalAction from "../redux/actions/modal";
import { constants } from "../containers/Modal";

const styles = StyleSheet.create({
  swipe: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  plantContainer: {
    borderRightWidth: 4,
    borderColor: "rgba(0,0,0,0.05)",
    borderWidth: 2,
    borderRightColor: "#bfc0bf",
    backgroundColor: "white"
  },
  plantBody: {
    margin: "5%",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  data: {
    marginLeft: "5%",
    flex: 1
  },
  row: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 10,
    justifyContent: "flex-end",
    width: "100%"
  },
  text: {
    paddingRight: "5%",
    color: "#B5B5B5"
  },
  textCenter: {
    //textAlign: "center"
  },
  icon: {
    marginLeft: 15
  },
  textGray: {
    marginRight: "5%",
    color: "#B5B5B5"
  }
});

class ProcessItem extends React.Component {
  state = {
    photoA: this.props.photo
  };

  render() {
    const {
      type,
      name,
      date,
      time,
      days,
      assignPlant,
      assignDevice
    } = this.props;
    const { photoA } = this.state;

    return (
      <View style={styles.plantContainer}>
        <View style={styles.plantBody}>
          <View>
            {type === "agri" && (
              <Text style={styles.textCenter}>Agriculture Process</Text>
            )}
            {type === "irrig" && (
              <Text style={styles.textCenter}>Irrigation Process</Text>
            )}
            <Text style={styles.textCenter}>
              <Text style={styles.textGray}>Name </Text>
              {name}
            </Text>
            <Text style={styles.textCenter}>
              <Text style={styles.textGray}>Planted With </Text>
              {assignPlant}
            </Text>
            <Text style={styles.textCenter}>
              <Text style={styles.textGray}>Managed By </Text>
              {assignDevice}
            </Text>
            {date && (
              <Text style={styles.textCenter}>
                <Text style={styles.textGray}>Date </Text>
                {date}
              </Text>
            )}
            <Text style={styles.textCenter}>
              <Text style={styles.textGray}>Time </Text>
              {time}
            </Text>
            {days && (
              <Text style={styles.textCenter}>
                <Text style={styles.textGray}>Days </Text>
                {days}
              </Text>
            )}
          </View>
          <View style={styles.row}>
            {type === "agri" && (
              <Icon name="today" color="#179543" containerStyle={styles.icon} />
            )}
            <Icon name="timer" color="#179543" containerStyle={styles.icon} />
            {type === "irrig" && (
              <Icon
                name="view-day"
                color="#179543"
                containerStyle={styles.icon}
              />
            )}
            <Icon name="delete" color="#990000" containerStyle={styles.icon} />
          </View>
        </View>
      </View>
    );
  }
}

export default ProcessItem;

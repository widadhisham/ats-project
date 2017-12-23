import React from "react";
import { Alert, Platform, Linking, StyleSheet, Text } from "react-native";
import ActionSheet from "react-native-actionsheet";
import { ImagePicker } from "expo";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  actionsheetText: {
    color: "#179543",
    fontSize: 18
  }
});

class AvatarImagePicker extends React.Component {
  state = {
    image: null
  };

  pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });
    this.props.changeAvatarSource(result.uri);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      this.props.changeAvatarSource(this.state.image);
    }
  };

  imagePickerOptions = {
    cameraType: "front",
    maxWidth: 400,
    maxHeight: 400,
    storageOptions: {
      skipBackup: true,
      path: "images"
    }
  };

  pickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });
    this.props.changeAvatarSource(result.uri);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      this.props.changeAvatarSource(this.state.image);
    }
  };

  imagePickerOptions = {
    cameraType: "front",
    maxWidth: 400,
    maxHeight: 400,
    storageOptions: {
      skipBackup: true,
      path: "images"
    }
  };
  handlePressedAvatarOption = index => {
    if (index === 1) {
      this.pickImage();
    }
    if (index === 2) {
      this.pickImage2();
    }
    if (index === 3) {
      this.props.changeAvatarSource(null);
    }
  };

  render() {
    const { avatarImageSource } = this.props;
    const avatarOptions =
      avatarImageSource === null
        ? [
            <Text style={styles.actionsheetText}>Cancel</Text>,
            <Text style={styles.actionsheetText}>Take Photo</Text>,
            <Text style={styles.actionsheetText}>Import From Gallery</Text>
          ]
        : [
            <Text style={styles.actionsheetText}>Cancel</Text>,
            <Text style={styles.actionsheetText}>Take Photo</Text>,
            <Text style={styles.actionsheetText}>Import From Gallery</Text>,
            <Text style={styles.actionsheetText}>Delete Photo</Text>
          ];
    return (
      <ActionSheet
        ref={c => this.props.ActionSheetRef(c)}
        options={avatarOptions}
        cancelButtonIndex={0}
        onPress={this.handlePressedAvatarOption}
      />
    );
  }
}
AvatarImagePicker.propTypes = {
  changeAvatarSource: PropTypes.func.isRequired,
  avatarImageSource: PropTypes.string,
  ActionSheetRef: PropTypes.func.isRequired
};
AvatarImagePicker.defaultProps = {
  avatarImageSource: null
};

export default AvatarImagePicker;

import React from "react";
import { Alert, Platform, Linking } from "react-native";
import ActionSheet from "react-native-actionsheet";
import { ImagePicker } from "expo";
import PropTypes from "prop-types";

class AvatarImagePicker extends React.Component {
  state = {
    image: null
  };

  handleImagePickerResponse = response => {
    if (response.didCancel) {
      console.log("User cancelled image picker");
    } else if (response.error) {
      if (Platform.OS !== "ios") return;

      const camera = response.error.includes("Camera");

      const title = camera ? "Access Camera" : "Access Photo";
      const buttonTitle = camera ? "Allow Access Camera" : "Allow Access Photo";
      Alert.alert(
        title,
        "",
        [
          {
            text: buttonTitle,
            onPress: () => Linking.openURL("app-settings:1")
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          }
        ],
        { cancelable: false }
      );
    } else if (response.customButton) {
      console.log("User tapped custom button: ", response.customButton);
    } else {
      this.props.changeAvatarSource(response.data);
    }
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

  handlePressedAvatarOption = index => {
    if (index === 1) {
      this.pickImage();
      // ImagePicker.launchCamera(this.imagePickerOptions, response => {
      //    this.handleImagePickerResponse(response);
      //  });
    }
    if (index === 2) {
      ImagePicker.launchImageLibrary(this.imagePickerOptions, response => {
        this.handleImagePickerResponse(response);
      });
    }
    if (index === 3) {
      this.props.changeAvatarSource(null);
    }
  };

  render() {
    const { avatarImageSource } = this.props;
    const avatarOptions =
      avatarImageSource === null
        ? ["Cancel", "Take Photo", "Import From Gallery"]
        : ["Cancel", "Take Photo", "Import From Gallery", "Delete Photo"];
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

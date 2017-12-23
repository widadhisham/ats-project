import Snackbar from "react-native-snackbar";
import { connect } from "react-redux";

const SnackbarMessage = ({ message }) => {
  if (message && typeof message.text === "string")
    Snackbar.show({
      title: message.text,
      duration: Snackbar.LENGTH_SHORT
    });
  return null;
};

export default connect(state => ({ message: state.snackbar }))(SnackbarMessage);

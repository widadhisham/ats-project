import * as Modal from "../actions/modal";

const initialState = {
  modalType: null,
  modalProps: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Modal.SHOW_MODAL:
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      };
    case Modal.HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};

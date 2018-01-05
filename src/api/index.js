/*import { create } from "apisauce";

const api = create({
  baseURL: "http://192.168.0.104:8080/project/Apis/"
});
export const setUserIdInRequestTransform = userId => {
  api.addRequestTransform(request => {
    request.data.userId = userId;
  });
};

export const signUp = ({ email, password, firstName, lastName }) =>
  api.post("register", { email, password, firstName, lastName });

export const logIn = ({ email, password }) =>
  api.post("login", { email, password });

export const getData = () => api.post("getData", {});

export const addDevice = device => api.post("addDevice", { ...device });

export const editDevice = device => api.post("editDevice", { ...device });

export const deleteDevice = deviceId => api.post("deleteDevice", { deviceId });

export const addGround = ground => api.post("addLand", { ...ground });

export const editGround = ground =>
  api.post("editLand", { ...ground, landId: ground.groundId });

export const deleteGround = groundId =>
  api.post("deleteLand", { landId: groundId });

export const addPlant = plant => api.post("addPlant", { ...plant });

export const editPlant = plant => api.post("editPlant", { ...plant });

export const deletePlant = plantId => api.post("deletePlant", { plantId });

const naviMonitor = response => console.log("hey!  listen! ", response);
api.addMonitor(naviMonitor);
*/

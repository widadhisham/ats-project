export const getAssignPlant = state => {
  const { plante } = state.plante;
};

export const getAssignDevice = state => {};

export const getGrounds = state => {
  const grounds = [];
  const { groundsIds } = state.ground;
  const { plantsById } = state.plante;
  const { devicesById } = state.device;
  groundsIds.forEach(groundId => {
    const ground = state.ground.groundsById[groundId];
    grounds.push(ground);
  });
  return grounds;
};

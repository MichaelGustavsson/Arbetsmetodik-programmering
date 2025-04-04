import http from '../httpClient.js';

export const state = {
  vehicles: [],
  vehicle: {},
};

export const listVehicles = async () => {
  try {
    const client = new http('vehicles');
    const result = await client.get();

    state.vehicles = result.map((vehicle) => {
      return { ...vehicle };
    });
  } catch (error) {
    console.error(error);
  }
};

export const findVehicle = async (id) => {
  try {
    const client = new http(`vehicles/${id}`);
    const result = await client.get();
    state.vehicle = result;
  } catch (error) {
    console.error(error);
  }
};

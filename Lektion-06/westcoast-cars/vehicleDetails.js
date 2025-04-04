import * as controller from './scripts/controllers/vehicleController.js';

const initApp = async () => {
  const vehicleId = location.search.split('=')[1];
  await controller.createDetailsPage(vehicleId);
};

document.addEventListener('DOMContentLoaded', initApp);

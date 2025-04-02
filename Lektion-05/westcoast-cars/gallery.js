import * as controller from './scripts/controllers/vehicleController.js';

const initApp = async () => {
  await controller.createGallery();
};

document.addEventListener('DOMContentLoaded', initApp);

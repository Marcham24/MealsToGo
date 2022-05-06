import { mocks } from "./mock/index";

export const restaurantRequest = (location = "41.87113,-87.629799") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("No location found!");
    }
    resolve(mock);
  });
};

restaurantRequest()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("Uh Oh", err);
  });

function success(pos) {
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  return crd;
}

export const getCurrentLocation = () => {
  if (navigator.geolocation) {
    const result = navigator.geolocation.getCurrentPosition(
      (pos) => success(pos),
      (er) => er
    );
    console.log({ result });
  } else {
    return "Geolocation is not supported by this browser.";
  }
};

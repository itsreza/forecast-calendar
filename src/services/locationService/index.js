export const getCurrentLocation = () => {
  if (navigator.geolocation) {
    console.log("first");
    const coords = navigator.geolocation.getCurrentPosition((coords) => "a");
    console.log("here");
    console.log({ coords });
  } else {
    return "Geolocation is not supported by this browser.";
  }
};

// function showPosition(position) {
//   console.lo;
// }

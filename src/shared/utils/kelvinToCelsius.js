const convertKelvinToCelsius = (kelvinDegree) => {
  const celsiusDegree = kelvinDegree - 273;
  return celsiusDegree.toFixed(3);
};
export default convertKelvinToCelsius;

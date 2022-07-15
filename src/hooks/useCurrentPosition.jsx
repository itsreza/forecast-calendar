import { useEffect, useState } from "react";

const defaultCoords = {
  latitude: 35.7488336,
  longitude: 51.3069211,
};

export function useCurrentPosition(options) {
  const [position, setPosition] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    let canceled = false;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (!canceled) {
          setPosition(position);
        }
      },
      (error) => {
        if (!canceled) {
          setPosition({
            coords: defaultCoords,
          });
          setErrorMessage(
            error.code === 2
              ? "⚠️ Network Error To Get Location Turn on Vpn or Try Again..."
              : error?.message
          );
        }
      },
      options
    );

    return () => {
      canceled = true;
    };
  }, [options]);

  return [position, errorMessage];
}

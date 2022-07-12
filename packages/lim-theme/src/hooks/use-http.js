import React, { useCallback, useEffect, useState } from "react";
import { getBaseUrl } from "../../../../environment";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendHttp = useCallback(async (config, callback) => {
    const { url, body } = config;

    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${getBaseUrl()}/${url}`, {
        method: body ? "POST" : "GET",
        body: body ? body : null,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      callback(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return { sendHttp, isLoading, error };
};

export default useHttp;

const reportWebVitals = (onPerfEntry) => {
  if (typeof onPerfEntry === "function") {
    import("web-vitals").then((metrics) => {
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = metrics;
      [getCLS, getFID, getFCP, getLCP, getTTFB].forEach((fn) => fn(onPerfEntry));
    });
  }
};

export default reportWebVitals;

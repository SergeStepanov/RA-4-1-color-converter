function ConverterRGB(hex) {
  // const regexTest = /^#([0-9A-Fa-f]){6}$/.test(hex);

  // if (!regexTest) return null;

  const r = parseInt(`0x${hex.slice(1, 3)}`);
  const g = parseInt(`0x${hex.slice(3, 5)}`);
  const b = parseInt(`0x${hex.slice(5, 7)}`);
  const rgb = `rgb(${r}, ${g}, ${b})`;

  return rgb;
}

export default ConverterRGB;

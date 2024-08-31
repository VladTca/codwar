function rgb(r, g, b) {
  // Helper function to clamp and convert a number to a two-digit hexadecimal string
  function toHex(value) {
    // Clamp the value to the range 0-255
    value = Math.max(0, Math.min(255, value));
    // Convert to a hexadecimal string and ensure it is two digits
    let hex = value.toString(16).toUpperCase();
    return hex.length === 1 ? "0" + hex : hex;
  }

  // Combine the hexadecimal values for r, g, and b
  return toHex(r) + toHex(g) + toHex(b);
}

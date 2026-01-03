export function getMapsLink(address: string) {
  const encodedAddress = encodeURIComponent(address);

  if (typeof navigator !== "undefined") {
    const userAgent = navigator.userAgent || navigator.vendor;

    const isIOS =
      /iPad|iPhone|iPod/.test(userAgent) ||
      (userAgent.includes("Mac") && navigator.maxTouchPoints > 1);

    if (isIOS) {
      return `https://maps.apple.com/?address=${encodedAddress}`;
    }
  }

  return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
}

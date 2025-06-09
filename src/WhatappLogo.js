import React from "react";

const whatsappNumber = "61451935923"; // e.g., 1234567890 with country code, no +
const whatsappLink = `https://wa.me/${whatsappNumber}`;

const styles = {
  container: {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    zIndex: 1000,
    cursor: "pointer",
    background: "#25D366",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    transition: "box-shadow 0.2s",
  },
  svg: {
    width: "32px",
    height: "32px",
    fill: "white",
  },
};

function WhatappLogo() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.container}
      title="Chat with us on WhatsApp"
    >
      <svg
        style={styles.svg}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.1L4 29l7.18-2.32C12.97 27.56 14.45 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.36 0-2.68-.27-3.92-.8l-.28-.12-4.26 1.38 1.4-4.14-.18-.3C6.9 18.02 6 16.56 6 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.28.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.22.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
      </svg>
    </a>
  );
}

export default WhatappLogo;

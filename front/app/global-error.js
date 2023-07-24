"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "grid",
            placeContent: "center",
            textAlign: "center",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Helvetica Neue, Inter, Roboto, Arial, Ubuntu, sans-serif",
          }}
        >
          <h2>Что-то пошло не так!</h2>
          <button
            title="Попробуй снова"
            onClick={() => reset()}
            style={{
              backgroundColor: "#000",
              color: "var(--main-light)",
              borderRadius: "30px",
            }}
          />
        </div>
      </body>
    </html>
  );
}

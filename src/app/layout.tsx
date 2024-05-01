export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{ backgroundColor: "red", width: "100%", height: "20px" }}
        ></header>

        {children}

        <footer
          style={{ backgroundColor: "violet", width: "100%", height: "20px" }}
        ></footer>
      </body>
    </html>
  );
}

// Minimal internal payments service (demo target).
const http = require("http");

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ status: "ok" }));
  }
  res.writeHead(404);
  res.end("not found");
});

server.listen(PORT, () => console.log(`payment-service listening on :${PORT}`));

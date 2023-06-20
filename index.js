const http = require("http");
a;

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Node Handson 1</title></head>");
    res.write("<body>");
    res.write("<h2>What is Node?</h2>");
    res.write(
      "<p>Node is cross platform open source JavaScript runtime.With the help of V8 Engine it allows developers to  run JS outside browser </p>"
    );
    res.write("</body>");

    res.write("</html>");
    res.end();
  }

  if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>Node Handson 1</title></head>");
    res.write("<body>");
    res.write("<p>This is about us page</p>");
    res.write("</body>");

    res.write("</html>");
    res.end();
  }

  res.write("Enter proper URl");
  res.end();
});

server.listen(4000, () => {
  console.log(`server is running on 4000`);
});

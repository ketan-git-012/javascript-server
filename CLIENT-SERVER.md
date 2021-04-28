# How a request gets served

Web browsers communicate with web servers using HyperText Transfer Protocol(HTTP). When you click a link on web page or submit a form or search anything browser sends an http request to server.

<br>

## So, What happened exactly ?
<ul>
  <li>
    The browser goes to the DNS server, and finds the real address of server on which the website lives.
  </li>
  <li>
    The browser sends an http request to server, asking it to send a copy of website to the client. This message and all other data along with it is send from sent between client and server across the internet using TCP/IP protocol.
  </li>
  <li>
    If server approves the request it sends an http code 200 with OK message which you can have an access to the website.
  </li>
</ul>

## The Request:
<ol>
  <li>
    <b>GET:</b>
     Get a specific resource or data.
  </li>
  <li>
    <b>POST:</b>
     Create a specific resource or data.
  </li>
  <li>
    <b>PUT:</b>
     Update an existing resource or data.
  </li>
  <li>
    <b>DELETE:</b>
     Delete the specific resource or data.
  </li>
  <li>
    <b>HEAD:</b>
     Get a metadata information without getting a body like GET request does.
  </li>
</ol>

## The Response:

<ol>
  <li>
    The first includes the response code 200 OK, which tells us wether the request is succeeded or not.
  </li>
  <li>
    Content-type have the response like http/html.
  </li>
  <li>
    It also uses UTF-8 character set i.e. charset=utf-8
  </li>
  <li>
    The head also tells us how big it is (Content-Length: 41823).
  </li>
</ol>

import Server from './Server';
import config from './config/configuration';
const server = new Server(config);

server.run();
server.bootstrap();

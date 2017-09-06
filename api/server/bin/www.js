const app = require('../app');
const config = require('../config');

app.listen(config.port, () => console.log(`Server listening on port ${config.port} in ${app.get('env')} mode.`));

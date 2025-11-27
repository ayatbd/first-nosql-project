import app from './app.js';
import config from './app/config/index.js';

import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.path, () => {
      console.log(`Example app listening on port ${config.path}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

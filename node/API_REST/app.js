import dotenv from 'dotenv';

dotenv.config();

import './src/database/connection';
import express from 'express';
import indexRoutes from './src/routes/indexRoutes';
import userRoutes from './src/routes/userRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(indexRoutes);
    this.app.use(userRoutes);
  }
}

export default new App().app;

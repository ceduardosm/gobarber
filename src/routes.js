import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Carlos Eduardo Silva Melo',
    email: 'carloseduardosilvamelo@outlook.com',
    password_hash: '1234567891',
    provider: false,
  });
  return res.json(user);
});

export default routes;

import express from 'express'
import { createMinion, getMinion,updateMinion,deleteMinion } from '../controllers/MiniosController.js';
 
const minionsRouter = express.Router();
 

minionsRouter.route("/").get(getMinion).post(createMinion);
minionsRouter.route("/:id").put(updateMinion).delete(deleteMinion);


 
export default minionsRouter
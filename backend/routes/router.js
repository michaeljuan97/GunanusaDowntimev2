// import express
import express from "express";
// import function from controller
import { showDowntime, updateDowntime, showDowntimebyId } from "../controller/downtime.js";
 
// init express router
const router = express.Router();
 
// Get All Product
router.get('/downtimes', showDowntime);
 
// Get Single downtime
router.get('/downtimes/:id', showDowntimebyId);
 
// Create New Product
// router.post('/products', createProduct);
 
// Update Product
router.put('/downtimes/:id', updateDowntime);
 
// Delete Product
// router.delete('/products/:id', deleteProduct);
 
// export default router
export default router;
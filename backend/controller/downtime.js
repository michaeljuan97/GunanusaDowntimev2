// Import function from downtime Model
import { getDowntime, getDowntimebyId, updateDowntimebyId} from "../model/downtimeModel.js";
 
// Get All Products
export const showDowntime = (req, res) => {
    getDowntime((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Product
export const updateDowntime = (req, res) => {
    const reason  = req.body.reason;
    const pic = req.body.pic;
    const catatan = req.body.catatan;
    const id    = req.params.id;
    updateDowntimebyId(reason, pic, catatan, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single downtime 
export const showDowntimebyId = (req, res) => {
    getDowntimebyId(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
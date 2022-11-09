
import { createMinions,getAllMinions,updateMinions,deleteMinions } from "../service/MiniosService.js";
 
export const getMinion = async (req, res) => {
  try {
    const minions = await getAllMinions();
    res.json(minions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 

export const createMinion = async (req, res) => {
  try {
    const minions = await createMinions(req.body);
    res.json({ data: minions});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
 
export const updateMinion = async (req, res) => {
  try {
    const minions = await updateMinions(req.params.id, req.body);
    console.log(minions);
    res.json({ data: minions, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
export const deleteMinion= async (req, res) => {
  try {
    const minions = await deleteMinions(req.params.id);
    res.json({ data: minions, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
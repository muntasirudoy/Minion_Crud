import Minion from "../model/minions.js";

export const getAllMinions = async () => {
  try {
    return await Minion.find();
  } catch (error) {
    throw new Error("Internal Server Error!");
  }
};

export const createMinions = async (data) => {
  try {
    const { name, age, color } = data;
    const minion = new Minion({ name, age, color });
    const response = await minion.save();
    return response;
  } catch (error) {
    throw new Error("Internal Server Error!");
  }
};

export const updateMinions = async (id, data) => {
  try {
    return await Minion.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error("Internal Server Error!");
  }
};

export const deleteMinions = async (id) => {
  try {
    return await Minion.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Internal Server Error!");
  }
};

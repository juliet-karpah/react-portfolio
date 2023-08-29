import { getReservations } from "./requests/api-reservations";

export const reservationsLoader = async () => {
  try {
    const data = await getReservations();
    return data;
  } catch (e) {
    console.error(e);
  }
};

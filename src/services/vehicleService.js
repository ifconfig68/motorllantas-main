export const getVehicleInfo = async (plate) => {
  try {
    const response = await fetch(`http://localhost:3000/api/vehicle/${plate}`);
    if (!response.ok) {
      throw new Error("Error al obtener información del vehículo");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("❌ Error en getVehicleInfo:", error);
    throw error;
  }
};

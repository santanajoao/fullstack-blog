export const treatQuantity = (quantity: number) => {
  const standartQuantity = 15;
  if (typeof quantity !== 'number' || Number.isNaN(quantity)) {
    return standartQuantity;
  }
  return quantity;
};

export default treatQuantity;

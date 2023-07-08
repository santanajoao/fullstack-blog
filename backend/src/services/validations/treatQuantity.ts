export const treatQuantity = (quantity: number) => {
  const standartQuantity = 12;
  if (typeof quantity !== 'number' || Number.isNaN(quantity)) {
    return standartQuantity;
  }
  return quantity;
};

export default treatQuantity;

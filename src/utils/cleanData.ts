export const cleanData = (originalData: any, newData: any) => {
  const cleanedData: any = {};
    console.log("nueva", newData, "vieja", originalData)
  for (const key in newData) {
    if (Object.prototype.hasOwnProperty.call(newData, key)) {
      if(newData[key] !== originalData[key] && key === 'price') cleanedData[key] = Number(newData[key])
      if(newData[key] !== originalData[key] && key !== 'price') cleanedData[key] = newData[key]
    }
  }
  console.log(cleanedData)
  return cleanedData;
};

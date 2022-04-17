export const formatData = (originalData: any, newData: any, type: string) => {
  const cleanedData: any = {};
  if(type === 'edit'){
    for (const key in newData) {
      if (Object.prototype.hasOwnProperty.call(newData, key)) {
        if (newData[key] !== originalData[key] && key === 'price')
          cleanedData[key] = Number(newData[key]);
        if (newData[key] !== originalData[key] && key !== 'price')
          cleanedData[key] = newData[key];
      }
    }
  } else {
    for (const key in newData) {
      if (Object.prototype.hasOwnProperty.call(newData, key)) {
        if (key === 'price'){
          cleanedData[key] = Number(newData[key]);
        }
        if (key === 'active')
          cleanedData[key] = newData[key].toString();
      }
    }
  }
  return cleanedData;
};

import React from 'react';
import {Share} from 'react-native';

export const shareProduct = async ({
  name,
  price
}: {
  name: string;
  price: number;
}) => {
  try {
    if (name && price) {
      const result = await Share.share({
        message: `¡Mira el producto que puedes conseguir en H-Market!
              ${name}
              Precio: ${price} €/kg`,
      });
      // if (result.action === Share.sharedAction) {
      //   if (result.activityType) {
      //     console.log("sharing", result)
      //     // shared with activity type of result.activityType
      //   } else {
      //     console.log("sharing 2", result)
      //     // shared
      //   }
      // } else if (result.action === Share.dismissedAction) {
      //   // dismissed
      // }
    }
  } catch (error) {
    console.error('Error sharing', error);
  }
};

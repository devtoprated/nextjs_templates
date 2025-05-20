import { NOIMAGE } from "@/utilities/utilityConstant";

export const getPropertyByStatus = (status: string) => {
  switch (status) {
    case "Active":
      return "#008000";
    case "Hold":
      return "orange";
    case "Closed":
      return "#000";
    case "Pending":
      return "#FFD700";
    case "Active Under Contract":
      return "red";
    case "Coming Soon":
      return "#2C7EF2";
    case "Canceled":
      return "#754616";
    case "Temp Off Market":
      return "#B4D9EF";
    case "Withdrawn":
      return "#800080";
    default:
      return "#000";
  }
};


export function getImage(property: any) {
  let imageList = [];

  if (property.ListPictureURL && property.ListPictureURL.includes("_1024_768_")) {
    return property.ListPictureURL;
  } else if (property.ListPicture2URL && property.ListPicture2URL.includes("_1024_768_")) {
    return property.ListPicture2URL;
  } else if (property.ListPicture3URL && property.ListPicture3URL.includes("_1024_768_")) {
    return property.ListPicture3URL;
  }

  if (property.image) {
    for (const key in property.image) {
      if (property.image.hasOwnProperty(key)) {
        const imageUrl = property.image[key];
        if (imageUrl.match(/\.(jpeg|jpg|gif|png)$/) != null) {
          imageList.push(imageUrl);
        }
      }
    }
  }

  if (imageList.length === 0 && property.propertyImages && property.propertyImages.length > 1) {
  
    const mediaUrls = property.propertyImages.map((img: any) => img.MediaURL).filter((url: string) => url.match(/\.(jpeg|jpg|gif|png)$/));
    if (mediaUrls.length > 0) {
      return mediaUrls[0];
    }
  }

  console.log(imageList,'image list')

  return imageList.length > 0 ? imageList[0] : NOIMAGE;
}

export function getValidImage(image: string) {
  if (image.match(/\.(jpeg|jpg|gif|png)$/) != null) {
    console.log(image);
    return image;
  }
  return NOIMAGE;
}

export function getValidImages(images: any[]) {
  let imageList = [];
  for (const iterator of images) {
    if (iterator.MediaURLHD.match(/\.(jpeg|jpg|gif|png)$/) != null) {
      imageList.push(iterator);
    }
  }

  imageList.sort((a, b) => {
    const numA = parseInt(a.MediaDisplayOrder);
    const numB = parseInt(b.MediaDisplayOrder);

    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }
    if (isNaN(numA) && !isNaN(numB)) {
      return 1;
    } else if (!isNaN(numA) && isNaN(numB)) {
      return -1;
    } else {
      return 0;
    }
  });

  if (imageList.length > 0) {
    return imageList;
  } else {
    return [];
  }
}

export function capitalizeFirstLetter(string: string): string {
  return string?.charAt(0)?.toUpperCase() + string?.slice(1);
}

export function getTrueValues(obj: Record<string, boolean>): string[] {
  return Object.entries(obj)
    .filter(([key, value]) => value === true)
    .map(([key, value]) => key);
}

import axios from "axios";
import dayjs from "dayjs";

export const formatTime = (time: any) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export function fileToBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export async function imageToBase64(url: string) {
  try {
    const response = await axios.get(url, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data, "binary");
    const base64Image = buffer.toString("base64");
    return `data:${response.headers["content-type"]};base64,${base64Image}`;
  } catch (error) {
    console.error("Error fetching image:", error);
    throw error;
  }
}

export function convertToFormattedDate(date: any) {
  let formattedDate;
  if (date) {
    const milliseconds = date?._seconds * 1000 + date?._nanoseconds / 1000000;
    if (milliseconds) {
      formattedDate = dayjs(milliseconds).format("MM/DD/YYYY");
    }
  }
  return formattedDate;
}

export const dataURLtoFile = (dataurl: any, filename?: any) => {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};

export const firstLetterUppercase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

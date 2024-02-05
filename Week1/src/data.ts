import { writeFileSync } from "fs";

export const data = async (wallet: string) => { // data yerine wallet kullandım
  try {
    writeFileSync("../wallet.json", wallet, "utf8"); // data yerine wallet kullandım
    console.log("Data has been written to the file");
  } catch (err) {
    console.error(err);
  }
};
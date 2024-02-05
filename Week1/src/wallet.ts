import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { data } from "./data";
import { airdrop } from "./airdrop";
import { balance } from "./balance";
import { transfer } from "./transfer";

// connection
const conn = new Connection('https://api.devnet.solana.com');

// create new wallet 
const wallet: any = Keypair.generate(); // wallet değişkenine any tipi verdim
console.log(wallet);
// Balance
(async () => { // fonksiyonu async olarak tanımladım
    let balance_1 = await balance(wallet); // key yerine wallet kullandım
  
    wallet['walletBalance'] = balance_1;
  
    let jsonData = JSON.stringify(wallet, null, 2);
    data(jsonData);
  
    console.log("Wallet has been created !");
  
    airdrop(wallet); // key yerine wallet kullandım
    balance_1 = await balance(wallet); // key yerine wallet kullandım
    wallet["walletBalance"] = balance_1;
    jsonData = JSON.stringify(wallet, null,2);
    data(jsonData);
  })();
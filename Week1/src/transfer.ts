import {
    Connection,
    Keypair,
    Transaction,
    SystemProgram,
    PublicKey,
    LAMPORTS_PER_SOL,
  } from "@solana/web3.js";
  
  export const transfer = async (
    sender: Keypair, // feePayer yerine sender kullandım
    recipient: PublicKey,
    amount: number
  ) => {
    const connection = new Connection("https://api.devnet.solana.com");
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: sender.publicKey, // feePayer yerine sender kullandım
        toPubkey: recipient,
        lamports: amount * LAMPORTS_PER_SOL,
      })
    );
    const signature = await connection.sendTransaction(transaction, [sender]); // feePayer yerine sender kullandım
    console.log("Transaction successful !", signature);
  };
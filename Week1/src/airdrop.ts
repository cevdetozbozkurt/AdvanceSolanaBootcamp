import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";

const connection = new Connection('https://api.devnet.solana.com');

export const airdrop = async (wallet: Keypair, amount: number=1) =>{
    let txhash = await connection.requestAirdrop(wallet.publicKey,amount * LAMPORTS_PER_SOL); // 1e9 yerine amount * LAMPORTS_PER_SOL kullandım
    console.log('Airdrop TX Hash:', txhash);
    console.log('Airdrop has been success');

}
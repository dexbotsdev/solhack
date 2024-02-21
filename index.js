const { Wallet } = require("@project-serum/anchor");
const solanaWeb3 = require("@solana/web3.js");
const base58 = require("bs58");
const { Connection, Keypair, VersionedTransaction} = solanaWeb3;

const conn = new Connection('https://solana-mainnet.g.alchemy.com/v2/HQAlV1C4epoXirkOdOeZPiotmqc7h3XK','finalized');

const main= async()=>{
var i=0;
while(true){ 
    const pk = Keypair.generate(); 
    const wal = new Wallet(pk); 
    const bal = await conn.getBalance(wal.publicKey);
    if(Number(bal.toString())>0)
    console.log(wal.publicKey.toBase58(),base58.encode(pk.secretKey),bal.toString());

    console.log(i++)
 }
}

 main();
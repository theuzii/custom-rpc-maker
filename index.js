
const rpc = require("discord-rpc");
const config = require('./config.json');

rpc.register(config.AppID);

const client = new rpc.Client({ transport: 'ipc' });

client.on('ready', () => {
  console.log('RPC Maker başlatıldı!');
  console.log('Discord RPC Makeri kullandığınız için teşekkürler.');
  
  client.setActivity({
    details: config.durum,
    state: config.aciklama,
    largeImageKey: config.buyukResimAd,
    largeImageText: config.buyukResimYazi,
    smallImageKey: config.kucukResimAd,
    smallImageText: config.kucukResimYazi,
  });
});

client.login({ clientId: config.AppID }).catch((error) => {
  throw error.message;
});
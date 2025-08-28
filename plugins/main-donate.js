let handler = async (m, { conn }) => {
  let gambar = 'https://i.ibb.co.com/7tsQWMcf/Kode-QRIS-XIAO-BYTEs.png' // URL QRIS langsung preview
  let qris = global.qris
  let numberowner = global.nomorown

  let anu = `Hai 👋
Kalian bisa membeli paket premium melalui:
┌〔 Premium • Emoney 〕
├ QRIS : ${qris}
└────
List Premium:
10k = Premium 15 Hari
15k = Premium 30 Hari
25k = Premium 60 Hari
50k = Premium 180 Hari

Terimakasih :D

Contact Owner:
wa.me/${numberowner} (Owner)
`

  // kirim gambar QRIS dengan caption
  await conn.sendFile(m.chat, gambar, 'qris.png', anu, m)
}

handler.help = ['premium']
handler.tags = ['main']
handler.command = /^(premium)$/i

export default handler

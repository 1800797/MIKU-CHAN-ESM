import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
  let res = await fetch('https://raw.githubusercontent.com/ShirokamiRyzen/WAbot-DB/main/fitur_db/asupan_loli.json')
  if (!res.ok) throw `${res.status} ${res.statusText}`
  
  let json = await res.json()
  let success = false
  let tries = 0

  while (!success && tries < 5) { // coba maksimal 5 kali
    tries++
    let url = json[Math.floor(Math.random() * json.length)]
    let lowerUrl = url.toLowerCase()

    try {
      if (lowerUrl.endsWith('.jpg') || lowerUrl.endsWith('.jpeg') || lowerUrl.endsWith('.png') || lowerUrl.endsWith('.gif')) {
        await conn.sendMessage(m.chat, { 
          image: { url: url }, 
          caption: 'Nih Kak' 
        }, { quoted: m })
      } else {
        await conn.sendMessage(m.chat, { 
          video: { url: url }, 
          caption: 'Nih Kak' 
        }, { quoted: m })
      }
      success = true
    } catch (e) {
      console.log(`Gagal kirim (${tries}): ${url}`)
    }
  }

  if (!success) {
    await conn.reply(m.chat, '⚠️ Maaf, semua link gagal di-load. Coba lagi ya.', m)
  }
}

handler.command = /^(asupanloli)$/i
handler.tags = ['internet']
handler.help = ['asupanloli']

handler.register = true
handler.premium = false
handler.limit = true

export default handler

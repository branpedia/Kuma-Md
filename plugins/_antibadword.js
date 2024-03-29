/*let { GroupSettingChange } = require('@adiwajshing/baileys')
let handler = m => m

let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i // tambahin sendiri

handler.before = function (m, { isOwner, isBotAdmin }) {
    if (m.isBaileys && m.fromMe && isOwner) return !0
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)

    if (!chat.antiBadword && !chat.isBanned && isBadword) {
        user.warning += 1
        this.send2Button(m.chat, `*Badword terdeteksi!*
Warning: ${user.warning} / 5
Jika warning mencapai 5 kamu akan dibanned

ketik *#on antibadword* untuk menyalakan antibadword
ketik *#astagfirullah* atau *#maaf* untuk mengurangi warning

“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).`, '© stikerin', 'NYALAKAN ANTIBADWORD', ',1 antibadword', 'ASTAGHFIRULLAH', ',maaf')
        if (user.warning >= 5) {
            user.banned = true
            if (m.isGroup) {
                if (isBotAdmin) {
                    this.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
                }
            }
        }
    }
    return !0
}
module.exports = handler*/


let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i; // tambahin sendiri

export async function before(m, { isBotAdmin }) { if (m.isBaileys && m.fromMe) return; let chat = global.db.data.chats[m.chat]; let user = global.db.data.users[m.sender]; if (!user.warning) { user.warning = 0; } let isBadword = badwordRegex.exec(m.text); if (chat.antiBadword && isBadword && m.isGroup) { user.warning += 1; m.reply(`${user.warning >= 5 ? '*📮 Warning Kamu Sudah Mencapai 5 Maka Kamu Akan Dikick!*' : '*📮 Kata Kata Toxic Terdeteksi*'} あ Warning: ${user.warning} / 5 [❗] Jika warning mencapai 5 Kamu akan dikeluarkan dari grup “Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).`); if (user.warning >= 5) { user.warning = 0; conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove'); } } return true;
}

/*
wa.me/6285795600265
github: https://github.com/branpedia
Instagram: https://instagram.com/bran_pedia
ini wm gw cok jan di hapus
*/
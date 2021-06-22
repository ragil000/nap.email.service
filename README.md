<img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/> <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/> <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
### TENTANG
Ini adalah salah satu service dari aplikasi penjadwalan pesan dan pengingat (notification app). Silahkan download semua servicenya untuk menjalankan aplikasi ini.

![user dashboard](https://github.com/ragil000/nap.email.service/blob/master/readme/user-dashboard.png?raw=true)
*Tampilan halaman awal user*

------------


![admin dashboard](https://github.com/ragil000/nap.email.service/blob/master/readme/admin-dashboard.png?raw=true)
*Tampilan halaman awal admin*

------------

### INSTALASI
1. Pastikan sudah *download* dan *install service* utama [download disini](https://github.com/ragil000/nap.base.service "service whatsapp").
2. Ubah nama file `dotenv` menjadi `.env`, kemudian ubah isinya.
```javascript
BASE_URL=http://localhost:4000
PORT=4000
MONGODB_URL=[YOUR MONGODB URL]
EMAIL_SERVICE=[YOUR SMTP SERVICE]
EMAIL_HOST=[YOUR SMTP HOST]
EMAIL_PORT=[YOUR SMTP PORT]
EMAIL_USERNAME=[YOUR EMAIL]
EMAIL_PASSWORD=[YOUR EMAIL PASSWORD]
```
Menjadi seperti contoh ini (contoh menggunakan google smtp),
```javascript
BASE_URL=http://localhost:4000
PORT=4000
MONGODB_URL=mongodb://127.0.0.1:27017/nap
EMAIL_SERVICE=gmail
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USERNAME=tukang.ngoding@gmail.com
EMAIL_PASSWORD=iniPasswordKu
```
*Pastikan MONGO_URL yang dipasang sama dengan MONGO_URL yang dipasang di [service utama](https://github.com/ragil000/nap.base.service "service utama")*.
Jika menggunakan google smtp, pastikan email yang dipakai sudah di setting. Pertama, login ke akun gmail yang akan digunakan. Kemudian masuk [disini](https://myaccount.google.com/u/2/lesssecureapps "disini"), dan sesuaikan seperti gambar dibawah.
![admin dashboard](https://github.com/ragil000/nap.email.service/blob/master/readme/setting-less-secure-gmail.png?raw=true)
Lalu masuk [disini](https://mail.google.com/mail/u/0/#settings/fwdandpop "disini"), dan centang *Enable IMAP* seperti gambar dibawah lalu klik tombol *save changes*.
![admin dashboard](https://github.com/ragil000/nap.email.service/blob/master/readme/setting-imap-gmail.png?raw=true)
3. Lalu gunakan perintah ini `npm install` di terminal untuk menginstall seluruh *dependencies* yang diperlukan.

### MENJALANKAN
1. Jalankan service ini menggunakan perintah `nodemon server`.
2. Kemudian lanjutkan untuk menginstall dan menjalankan [service whatsapp](https://github.com/ragil000/nap.wa.service "service whatsapp").

### LISENSI
Anda diperbolehkan menggunakan proyek ini secara bebas, termasuk juga yang bersifat komersil (tidak termasuk template yang saya gunakan).
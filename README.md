# Notes app

Aplikasi Catatan Pribadi adalah sebuah aplikasi web sederhana yang memungkinkan Anda untuk menambahkan, menghapus, dan mencari catatan. Aplikasi ini dibuat menggunakan React dan memenuhi kriteria utama dan opsional yang telah ditentukan.

## Kriteria Utama

### 1. Menampilkan Daftar Catatan
- Aplikasi ini mampu menampilkan daftar catatan dengan data awal yang telah disediakan.
- Data catatan disimpan dalam state komponen untuk kemudian ditampilkan menggunakan teknik array map.

### 2. Menambahkan Catatan
- Aplikasi memungkinkan Anda untuk menambahkan catatan baru.
- Form input dikendalikan (controlled component) untuk mengambil input dari pengguna.
- Data catatan disimpan di dalam memori dan akan hilang jika browser di-refresh.
- Data catatan yang disimpan memiliki struktur yang mencakup `id`, `title`, `body`, `archived`, dan `createdAt`.

Contoh data catatan:
```javascript
{
  id: 1,
  title: "Babel",
  body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
  archived: false,
  createdAt: '2022-04-14T04:27:34.572Z'
} 
```
### 3. Menghapus Catatan

- Aplikasi menyediakan tombol hapus untuk menghapus data catatan yang disimpan.
- Terdapat conditional rendering untuk menampilkan pesan "Tidak ada catatan" jika tidak ada data catatan yang tersedia.
## Kriteria Opsional
### 1. Fitur Pencarian Catatan
- Aplikasi memiliki fitur pencarian catatan berdasarkan kata kunci yang dimasukkan.
- Jika kolom pencarian tidak kosong, aplikasi hanya menampilkan catatan yang judulnya mengandung kata kunci yang dimasukkan.
- Jika kolom pencarian kosong, aplikasi menampilkan seluruh catatan.
- Fitur ini memanfaatkan controlled component dalam membangun fitur pencarian.
### 2. Limit Karakter pada Input Judul Catatan
- Aplikasi mencegah pengguna memberikan judul catatan lebih dari 50 karakter.
- Menggunakan state untuk melimitasi jumlah karakter yang diizinkan.
- Menampilkan jumlah karakter tersisa yang dapat digunakan oleh pengguna.
### 3. Fitur Arsip Catatan
- Aplikasi memiliki fitur arsip catatan.
- Menyediakan tombol arsipkan/pindahkan untuk mengarsipkan atau memindahkan catatan dari arsip.
- Daftar catatan yang diarsipkan ditampilkan pada tempat terpisah dari catatan yang tidak diarsip.
- Dengan demikian, Aplikasi Catatan Pribadi ini memenuhi kriteria utama dan opsional yang telah ditetapkan, memberikan pengguna kemampuan untuk mengelola dan mencari catatan pribadi mereka dengan mudah.
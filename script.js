<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Perusahaan XYZ</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', sans-serif;
      line-height: 1.6;
      background: #ffffff;
      color: #1c1c1c;
    }
    nav {
      background: #00BFFF;
      padding: 15px;
      text-align: center;
    }
    nav a {
      color: white;
      margin: 0 15px;
      text-decoration: none;
      font-weight: bold;
    }
    nav a:hover {
      text-decoration: underline;
      color: #f0f8ff;
    }
    header {
      background-image: url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg');
      background-size: cover;
      background-position: center;
      color: white;
      height: 90vh;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    header h1 {
      background-color: rgba(0, 191, 255, 0.6);
      padding: 20px;
      font-size: 2.8em;
      border-radius: 10px;
    }
    section {
      padding: 60px 20px;
      max-width: 1000px;
      margin: auto;
    }
    .about, .services, .contact {
      background: #ffffff;
      margin-bottom: 40px;
      border-radius: 10px;
      padding: 40px;
      box-shadow: 0 5px 15px rgba(0, 191, 255, 0.1);
    }
    .about img, .services img {
      width: 100%;
      border-radius: 10px;
      margin-top: 20px;
    }
    .services div {
      margin-bottom: 40px;
    }
    form input, form textarea {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #b0e0ff;
      border-radius: 5px;
    }
    form button {
      padding: 10px 20px;
      background: #00BFFF;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    form button:hover {
      background: #009acd;
    }
    footer {
      background: #00BFFF;
      color: white;
      text-align: center;
      padding: 20px;
    }
    iframe {
      width: 100%;
      border: none;
      height: 300px;
      margin-top: 20px;
      border-radius: 10px;
    }
  </style>
</head>
<body>
  <nav>
    <a href="#home">Beranda</a>
    <a href="#about">Tentang Kami</a>
    <a href="#services">Layanan</a>
    <a href="#contact">Kontak</a>
  </nav>

  <header id="home">
    <h1>Selamat Datang di Perusahaan XYZ</h1>
  </header>

  <section id="about" class="about">
    <h2>Tentang Kami</h2>
    <p>Perusahaan XYZ adalah ekosistem pendidikan terapan berbasis praktik nyata yang mengintegrasikan pelatihan keterampilan, literasi keuangan mikro, dan teknologi digital dalam skema pemberdayaan komunitas.</p>
    <p>Kami hadir karena keprihatinan terhadap krisis keterampilan dan ketergantungan konsumtif masyarakat. Misi kami mencetak generasi unggul yang siap kerja dan mampu menciptakan lapangan kerja dari rumah.</p>
    <p><strong>Filosofi Logo:</strong> Nama XYZ mencerminkan misi mencetak SDM kompeten. Warna biru tua dan biru muda menunjukkan profesionalisme dan pembaruan. Simbol topi wisuda menggambarkan pendidikan sebagai fondasi.</p>
    <img src="https://enduro.co.id/asset/images/news/31269-news-hal-hal-apa-yg-membuat-meeting.jpg" alt="Filosofi Logo XYZ">
  </section>

  <section id="services" class="services">
    <h2>Layanan Kami</h2>
    <div>
      <h3>1. Budidaya Maggot & Pakan Ternak Alternatif</h3>
      <p>Fokus pada budidaya Black Soldier Fly (BSF) menggunakan limbah dapur rumah tangga. Menghasilkan maggot segar dan kering yang kaya protein untuk unggas dan ikan.</p>
      <img src="https://jurnalterkini.id/wp-content/uploads/2024/05/maggot-1200x662.jpg" alt="Budidaya Maggot">
    </div>
    <div>
      <h3>2. Budidaya Cacing & Pakan Organik</h3>
      <p>Menghasilkan biomassa cacing dan kascing (pupuk organik) dari limbah organik rumah tangga.</p>
      <img src="https://nusaqu.id/public/storage/images/mEFStrrQr3SaUcHxZ5xeYotTrGyGYCmfEQApvBY1.png" alt="Budidaya Cacing">
    </div>
    <div>
      <h3>3. Budidaya Ulat Sutra & Pakan Protein Alternatif</h3>
      <p>Budidaya ulat sutra <em>Samia ricini</em> dengan pakan daun singkong. Kokon bisa dijadikan kerajinan atau sumber protein ternak.</p>
      <img src="https://mediatani.co/wp-content/uploads/2020/08/ulat-sutra.jpg" alt="Budidaya Ulat Sutra">
    </div>
  </section>

  <section id="contact" class="contact">
    <h2>Kontak Kami</h2>
    <p><strong>Kantor Pusat:</strong> Jl. Maju Berkarya No. 123, Kota Semarang</p>
    <p><strong>Workshop & Training Center:</strong> Kawasan Industri Kreatif, Blok A5, Sukorejo, Kota Semarang</p>
    <p><strong>Telepon:</strong> (024) 123-4567</p>
    <p><strong>Email:</strong> info@xyz-company.com</p>

    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.739659854435!2d110.40737721477743!3d-7.816563694379238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a578ce9cf9f0b%3A0xc1b73c83c40960b!2sJl.%20Maju%20Berkarya%2C%20Semarang!5e0!3m2!1sid!2sid!4v1721546871835!5m2!1sid!2sid" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>

    <form>
      <input type="text" placeholder="Nama Anda" required>
      <input type="email" placeholder="Email Anda" required>
      <textarea rows="5" placeholder="Pesan Anda" required></textarea>
      <button type="submit">Kirim</button>
    </form>
  </section>

  <footer>
    <p>&copy; 2025 Perusahaan XYZ. Seluruh Hak Cipta Dilindungi.</p>
  </footer>
</body>
</html>
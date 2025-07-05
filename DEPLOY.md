# 🚀 Panduan Deployment Website Anniversary

## 📋 Checklist Sebelum Deploy

### ✅ Persiapan
- [ ] Pastikan semua file sudah ada (index.html, style.css, script.js)
- [ ] Test website di local browser
- [ ] Cek semua link foto dan audio berfungsi
- [ ] Pastikan responsive design bekerja di mobile
- [ ] Verifikasi semua fitur interaktif

### ✅ Test Local
```bash
# Buka index.html di browser atau gunakan live server
# Pastikan semua fitur bekerja:
- Countdown timer
- Music player
- Gallery lightbox
- Games dan quiz
- Guestbook
- Virtual pet
- Theme switcher
```

## 🌟 Method 1: Deploy via GitHub + Vercel (Recommended)

### Step 1: Upload ke GitHub
```bash
# 1. Buat repository baru di GitHub
# 2. Clone atau init repository
git init
git add .
git commit -m "🎉 Initial commit - Anniversary Website Adna & Lyra"
git remote add origin https://github.com/username/anniversary-website.git
git push -u origin main
```

### Step 2: Deploy di Vercel
1. **Login ke Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Login dengan GitHub account

2. **Import Project**
   - Klik "New Project"
   - Pilih repository "anniversary-website"
   - Klik "Import"

3. **Configure Project**
   - Project Name: `anniversary-adna-lyra`
   - Framework Preset: `Other`
   - Build Command: (kosongkan)
   - Output Directory: (kosongkan)
   - Install Command: (kosongkan)

4. **Deploy**
   - Klik "Deploy"
   - Tunggu proses deployment (1-2 menit)
   - Website akan tersedia di URL seperti: `https://anniversary-adna-lyra.vercel.app`

### Step 3: Custom Domain (Opsional)
```bash
# Jika ingin custom domain
# 1. Beli domain (contoh: adna-lyra.com)
# 2. Di Vercel dashboard, masuk ke project settings
# 3. Pilih "Domains"
# 4. Tambahkan domain dan ikuti instruksi DNS
```

## 🚀 Method 2: Deploy Langsung dengan Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login
```bash
vercel login
```

### Step 3: Deploy
```bash
# Di folder project
vercel

# Untuk production deploy
vercel --prod
```

### Step 4: Jawab Pertanyaan
```
? Set up and deploy? Yes
? Which scope? (Your account)
? Link to existing project? No
? What's your project's name? anniversary-adna-lyra
? In which directory is your code located? ./
? Want to override the settings? No
```

## 📱 Method 3: Drag & Drop Deploy

### Step 1: Zip Files
```bash
# Zip semua file kecuali node_modules dan .git
zip -r anniversary-website.zip . -x "node_modules/*" ".git/*"
```

### Step 2: Upload ke Vercel
1. Buka [vercel.com](https://vercel.com)
2. Drag & drop file zip ke halaman utama
3. Tunggu upload dan deploy selesai

## 🔧 Method 4: Deploy ke Netlify (Alternatif)

### Step 1: Via GitHub
1. Buka [netlify.com](https://netlify.com)
2. Login dengan GitHub
3. Klik "New site from Git"
4. Pilih repository
5. Deploy

### Step 2: Via Drag & Drop
1. Buka [netlify.com](https://netlify.com)
2. Drag folder project ke deploy area
3. Tunggu deploy selesai

## 🌐 Method 5: Deploy ke GitHub Pages

### Step 1: Setup Repository
```bash
# Pastikan branch main sudah ada
git checkout main
git push origin main
```

### Step 2: Enable GitHub Pages
1. Buka repository di GitHub
2. Masuk ke Settings
3. Scroll ke "Pages"
4. Source: Deploy from a branch
5. Branch: main
6. Folder: / (root)
7. Save

### Step 3: Access Website
- URL: `https://username.github.io/anniversary-website`

## 🎯 Optimasi Performance

### Sebelum Deploy
```bash
# Compress images (opsional, karena sudah pakai imgur)
# Minify CSS dan JS jika diperlukan
# Test di PageSpeed Insights
```

### Setelah Deploy
- Test di Google PageSpeed Insights
- Test di GTmetrix
- Cek Core Web Vitals
- Test di berbagai device

## 📊 Monitoring & Analytics

### Setup Google Analytics (Opsional)
```html
<!-- Tambahkan di <head> index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Setup Vercel Analytics
```bash
# Di Vercel dashboard
# 1. Masuk ke project
# 2. Pilih "Analytics"
# 3. Enable analytics
```

## 🔒 Security & SEO

### Meta Tags Sudah Termasuk
- Open Graph tags
- Twitter Card tags
- SEO meta description
- Responsive viewport
- Favicon

### Security Headers
- Sudah dikonfigurasi di `vercel.json`
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block

## 🎨 Custom Domain Setup

### Step 1: Beli Domain
- GoDaddy, Namecheap, atau provider lain
- Rekomendasi: `adna-lyra.com` atau `anniversary-adna-lyra.com`

### Step 2: Configure DNS
```bash
# Tambahkan CNAME record:
# Name: www
# Value: cname.vercel-dns.com

# Tambahkan A record:
# Name: @
# Value: 76.76.19.61
```

### Step 3: Add Domain di Vercel
1. Masuk ke project dashboard
2. Pilih "Settings" → "Domains"
3. Tambahkan domain
4. Ikuti instruksi verifikasi DNS

## 📱 Mobile Testing

### Test di Device
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Android Tablet (Chrome)

### Test Fitur Mobile
- Touch interactions
- Swipe gallery
- Responsive layout
- Virtual pet interaction
- Music player controls

## 🚨 Troubleshooting

### Common Issues

#### 1. Audio tidak bisa diputar
```javascript
// Pastikan user interaction sebelum autoplay
// Sudah ditangani di script.js
```

#### 2. Images tidak load
```html
<!-- Pastikan URL imgur benar -->
<!-- Cek network tab di browser -->
```

#### 3. Mobile navigation tidak responsive
```css
/* Cek media queries di style.css */
@media (max-width: 768px) {
  /* Mobile styles */
}
```

#### 4. Deploy gagal
```bash
# Cek file structure
# Pastikan index.html ada di root
# Cek vercel.json configuration
```

## 🎉 Post-Deploy Checklist

### ✅ Functional Testing
- [ ] Countdown timer berjalan
- [ ] Music player berfungsi
- [ ] Gallery lightbox buka/tutup
- [ ] Games dapat dimainkan
- [ ] Guestbook bisa submit
- [ ] Virtual pet interaktif
- [ ] Theme switcher bekerja
- [ ] Mobile responsive

### ✅ Performance Testing
- [ ] Loading time < 3 detik
- [ ] Images lazy loading
- [ ] Smooth animations
- [ ] No console errors

### ✅ Cross-Browser Testing
- [ ] Chrome (Desktop + Mobile)
- [ ] Firefox (Desktop + Mobile)
- [ ] Safari (Desktop + Mobile)
- [ ] Edge (Desktop)

### ✅ SEO & Social
- [ ] Meta description muncul
- [ ] Open Graph preview bagus
- [ ] Twitter Card preview bagus
- [ ] Favicon terlihat

## 📞 Support

Jika ada masalah during deployment:

1. **Check Browser Console**
   - Buka Developer Tools (F12)
   - Lihat error di Console tab

2. **Check Network Tab**
   - Pastikan semua assets loading
   - Cek failed requests

3. **Check Responsive**
   - Test di berbagai screen size
   - Pastikan mobile-friendly

4. **Check Vercel Logs**
   - Masuk ke Vercel dashboard
   - Lihat deployment logs

## 🎊 Congratulations!

Setelah berhasil deploy:
- Share URL dengan Adna & Lyra
- Test semua fitur sekali lagi
- Enjoy the anniversary celebration! 🎉

---

**Happy Anniversary ke-2 Adna & Lyra!** ❤️

Website: `https://anniversary-adna-lyra.vercel.app`
Made with ❤️ for eternal love.
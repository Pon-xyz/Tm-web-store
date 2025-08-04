# 🚀 คู่มือการ Deploy TM การช่าง ปัตตานี

## การ Deploy บน Firebase Hosting

### ขั้นตอนที่ 1: ติดตั้ง Firebase CLI

```bash
npm install -g firebase-tools
```

### ขั้นตอนที่ 2: Login Firebase

```bash
firebase login
```

### ขั้นตอนที่ 3: สร้าง Firebase Project

1. ไปที่ [Firebase Console](https://console.firebase.google.com/)
2. คลิก "Add project"
3. ตั้งชื่อโปรเจค: `tm-web-store`
4. เลือก "Don't set up Google Analytics" (หรือตั้งค่าตามต้องการ)
5. คลิก "Create project"

### ขั้นตอนที่ 4: Initialize Firebase ในโปรเจค

```bash
firebase init hosting
```

เลือกตัวเลือกต่อไปนี้:
- **Select a project**: เลือก `tm-web-store`
- **What do you want to use as your public directory?**: `build`
- **Configure as a single-page app (rewrite all urls to /index.html)?**: `Yes`
- **Set up automatic builds and deploys with GitHub?**: `No`
- **File build/index.html already exists. Overwrite?**: `No`

### ขั้นตอนที่ 5: Build และ Deploy

```bash
# Build โปรเจค
npm run build

# Deploy บน Firebase
firebase deploy
```

### ขั้นตอนที่ 6: ตรวจสอบการ Deploy

หลังจาก Deploy สำเร็จ Firebase จะให้ URL สำหรับเว็บไซต์ เช่น:
```
✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/tm-web-store/overview
Hosting URL: https://tm-web-store.web.app
```

## การตั้งค่า Custom Domain (ไม่บังคับ)

### ขั้นตอนที่ 1: ซื้อ Domain
ซื้อ Domain จากผู้ให้บริการ เช่น:
- Namecheap
- GoDaddy
- Google Domains

### ขั้นตอนที่ 2: เพิ่ม Custom Domain ใน Firebase

1. ไปที่ Firebase Console > Hosting
2. คลิก "Add custom domain"
3. ใส่ Domain ที่ซื้อ
4. ตามขั้นตอนการยืนยัน Domain

### ขั้นตอนที่ 3: ตั้งค่า DNS

ตั้งค่า DNS records ตามที่ Firebase แนะนำ:
- Type: A
- Name: @
- Value: 151.101.1.195

## การอัปเดตเว็บไซต์

เมื่อต้องการอัปเดตเว็บไซต์:

```bash
# แก้ไขโค้ดตามต้องการ

# Build ใหม่
npm run build

# Deploy อีกครั้ง
firebase deploy
```

## การตั้งค่า Environment Variables (ถ้าต้องการ)

สร้างไฟล์ `.env` ในโฟลเดอร์หลัก:

```env
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_CONTACT_EMAIL=contact@tm-metalwork.com
```

## การตั้งค่า Analytics (ไม่บังคับ)

### Google Analytics

1. สร้าง Google Analytics account
2. เพิ่ม Tracking ID ใน `public/index.html`:

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## การตั้งค่า SEO เพิ่มเติม

### Sitemap
สร้างไฟล์ `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tm-web-store.web.app/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tm-web-store.web.app/products</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tm-web-store.web.app/gallery</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://tm-web-store.web.app/about</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://tm-web-store.web.app/contact</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### Robots.txt
สร้างไฟล์ `public/robots.txt`:

```txt
User-agent: *
Allow: /

Sitemap: https://tm-web-store.web.app/sitemap.xml
```

## การแก้ไขปัญหา

### ปัญหาที่พบบ่อย

1. **Build ล้มเหลว**
   - ตรวจสอบว่า Node.js version เป็น v16 หรือสูงกว่า
   - ลบ `node_modules` และ `package-lock.json` แล้วรัน `npm install` ใหม่

2. **Deploy ล้มเหลว**
   - ตรวจสอบว่า Login Firebase แล้ว
   - ตรวจสอบว่าเลือก Project ถูกต้อง

3. **เว็บไซต์ไม่แสดงผล**
   - ตรวจสอบ Firebase Console > Hosting
   - ตรวจสอบ URL ที่ถูกต้อง

## การสำรองข้อมูล

### สำรองโค้ด
```bash
# สร้าง Git repository
git init
git add .
git commit -m "Initial commit"

# Push ไปยัง GitHub/GitLab
git remote add origin <repository-url>
git push -u origin main
```

### สำรอง Firebase Project
- Export ข้อมูลจาก Firebase Console
- สำรองไฟล์ `firebase.json` และ `.firebaserc`

---

**หมายเหตุ**: หลังจาก Deploy สำเร็จ อย่าลืมทดสอบเว็บไซต์บนอุปกรณ์ต่างๆ เพื่อให้แน่ใจว่า Responsive และทำงานได้ปกติ 
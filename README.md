# TM การช่าง ปัตตานี - โรงงานโลหะสแตนเลส

เว็บไซต์ธุรกิจสำหรับ TM การช่าง ปัตตานี โรงงานโลหะสแตนเลส งานตัดเลเซอร์ CNC งานเชื่อม มากกว่า 8 ปีประสบการณ์

## 🚀 คุณสมบัติ

- **Responsive Design** - รองรับทุกอุปกรณ์ (Desktop, Tablet, Mobile)
- **SEO Optimized** - Meta tags และโครงสร้างที่เหมาะสมสำหรับ SEO
- **Modern UI/UX** - ดีไซน์ทันสมัยด้วย Tailwind CSS
- **Thai Language Support** - รองรับภาษาไทยเต็มรูปแบบ
- **Fast Performance** - โหลดเร็วและใช้งานได้ดี
- **Firebase Ready** - พร้อมสำหรับการ Deploy บน Firebase Hosting

## 📱 หน้าต่างๆ

1. **หน้าแรก** - ข้อมูลธุรกิจ, Hero section, สถิติ, บริการหลัก
2. **สินค้าและบริการ** - รายละเอียดบริการทั้งหมด 5 ประเภท
3. **แกลเลอรี่** - แสดงผลงานและโรงงาน พร้อม Filter และ Modal
4. **เกี่ยวกับเรา** - ประวัติ, ค่านิยม, ทีมงาน, พันธกิจและวิสัยทัศน์
5. **ติดต่อ** - ข้อมูลติดต่อ, แบบฟอร์ม, Google Maps, Social Media

## 🛠️ เทคโนโลยีที่ใช้

- **React 18** - Frontend Framework
- **Tailwind CSS** - Styling Framework
- **React Router** - Client-side Routing
- **Lucide React** - Icon Library
- **Firebase Hosting** - Deployment Platform

## 📦 การติดตั้ง

### Prerequisites
- Node.js (v16 หรือสูงกว่า)
- npm หรือ yarn

### ขั้นตอนการติดตั้ง

1. **Clone โปรเจค**
```bash
git clone <repository-url>
cd tm-metalwork-website
```

2. **ติดตั้ง Dependencies**
```bash
npm install
```

3. **รัน Development Server**
```bash
npm start
```

เว็บไซต์จะเปิดที่ `http://localhost:3000`

## 🏗️ การ Build และ Deploy

### Build สำหรับ Production
```bash
npm run build
```

### Deploy บน Firebase Hosting

1. **ติดตั้ง Firebase CLI**
```bash
npm install -g firebase-tools
```

2. **Login Firebase**
```bash
firebase login
```

3. **Initialize Firebase Project** (ถ้ายังไม่ได้ทำ)
```bash
firebase init hosting
```

4. **Deploy**
```bash
firebase deploy
```

## 📁 โครงสร้างโปรเจค

```
src/
├── components/          # React Components
│   ├── Navbar.js       # Navigation Bar
│   └── Footer.js       # Footer Component
├── pages/              # Page Components
│   ├── Home.js         # Home Page
│   ├── Products.js     # Products & Services Page
│   ├── Gallery.js      # Gallery Page
│   ├── About.js        # About Us Page
│   └── Contact.js      # Contact Page
├── App.js              # Main App Component
├── index.js            # Entry Point
└── index.css           # Global Styles
```

## 🎨 การปรับแต่ง

### สี
- **Steel Colors**: `steel-50` ถึง `steel-900` สำหรับสีหลัก
- **Industrial Colors**: `industrial-50` ถึง `industrial-900` สำหรับสีรอง

### Font
- **Thai Font**: Prompt (Google Fonts)
- **Fallback**: Noto Sans Thai, sans-serif

### Components
- **Buttons**: `.btn-primary`, `.btn-secondary`
- **Cards**: `.card`
- **Layout**: `.container-custom`, `.section-padding`

## 📞 ข้อมูลติดต่อ

- **ชื่อธุรกิจ**: TM การช่าง ปัตตานี
- **ที่อยู่**: 122/79 ถนนนาเกลือ ซอย 24, ตำบลบานา, อำเภอเมืองปัตตานี 94000
- **โทรศัพท์**: 073-414443
- **LINE**: https://line.me/R/ti/p/@035dgcwz
- **Facebook**: https://web.facebook.com/line035dgcwz
- **Google Maps**: https://maps.app.goo.gl/B2UDdBfNzL3bizkD8

## 🔧 การพัฒนาเพิ่มเติม

### เพิ่มหน้าใหม่
1. สร้างไฟล์ใหม่ใน `src/pages/`
2. เพิ่ม Route ใน `src/App.js`
3. เพิ่มลิงก์ใน Navigation

### แก้ไขข้อมูลธุรกิจ
- แก้ไขข้อมูลในแต่ละ Page Component
- อัปเดตข้อมูลใน Footer Component
- แก้ไข Meta tags ใน `public/index.html`

### เพิ่มรูปภาพ
- วางรูปภาพใน `public/` folder
- อ้างอิงด้วย `process.env.PUBLIC_URL + '/image-name.jpg'`

## 📄 License

© 2024 TM การช่าง ปัตตานี. สงวนลิขสิทธิ์

---

**หมายเหตุ**: เว็บไซต์นี้สร้างขึ้นสำหรับ TM การช่าง ปัตตานี โดยเฉพาะ เพื่อให้บริการงานโลหะในจังหวัดปัตตานีและพื้นที่ใกล้เคียง 
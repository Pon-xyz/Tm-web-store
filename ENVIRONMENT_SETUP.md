# 🔧 Environment Variables Setup Guide

## Should You Set Up .env File?

**Yes, it's recommended!** Here's why and how:

## 🎯 **Benefits of Using .env:**

1. **Security** - Keep sensitive data out of your code
2. **Flexibility** - Easy to change settings without code changes
3. **Environment Management** - Different settings for development/production
4. **Team Collaboration** - Share configuration without sharing secrets

## 📝 **How to Create .env File:**

1. **Create a new file** called `.env` in your project root
2. **Copy the template below** and fill in your values
3. **Never commit** `.env` to git (it's already in `.gitignore`)

## 🔑 **Your .env Template:**

```bash
# TM การช่าง ปัตตานี - Environment Variables

# Firebase Configuration
REACT_APP_FIREBASE_API_KEY=AIzaSyAw12JBosAmh1eecW7Lw-PZ-QUsQ3J041o
REACT_APP_FIREBASE_AUTH_DOMAIN=tm-web-store.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=tm-web-store
REACT_APP_FIREBASE_STORAGE_BUCKET=tm-web-store.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=502601933951
REACT_APP_FIREBASE_APP_ID=1:502601933951:web:d4bad9ba414ec10a664b4a
REACT_APP_FIREBASE_MEASUREMENT_ID=G-1B5XB070XD

# Business Information
REACT_APP_BUSINESS_NAME=TM การช่าง ปัตตานี
REACT_APP_BUSINESS_PHONE=073-414443
REACT_APP_BUSINESS_ADDRESS=122/79 ถนนนาเกลือ ซอย 24, ตำบลบานา, อำเภอเมืองปัตตานี 94000
REACT_APP_BUSINESS_LINE=https://line.me/R/ti/p/@035dgcwz
REACT_APP_BUSINESS_FACEBOOK=https://web.facebook.com/line035dgcwz
REACT_APP_BUSINESS_GOOGLE_MAPS=https://maps.app.goo.gl/B2UDdBfNzL3bizkD8

# Website Configuration
REACT_APP_WEBSITE_URL=https://tm-web-store.web.app
REACT_APP_WEBSITE_TITLE=TM การช่าง ปัตตานี - โรงงานโลหะสแตนเลส งานตัดเลเซอร์ CNC
REACT_APP_WEBSITE_DESCRIPTION=โรงงานโลหะสแตนเลส งานตัดเลเซอร์ CNC งานเชื่อม มากกว่า 8 ปีประสบการณ์ ในจังหวัดปัตตานี

# Contact Form (Optional - for future backend integration)
REACT_APP_CONTACT_EMAIL=contact@tm-metalwork.com
REACT_APP_CONTACT_SUBJECT=คำถามจากเว็บไซต์ TM การช่าง

# Google Analytics (Optional)
REACT_APP_GA_TRACKING_ID=G-1B5XB070XD

# Development/Production
NODE_ENV=production
```

## 🚀 **How to Use Environment Variables:**

### **In React Components:**
```javascript
// Access environment variables
const businessName = process.env.REACT_APP_BUSINESS_NAME;
const phoneNumber = process.env.REACT_APP_BUSINESS_PHONE;

// Use in your component
<h1>{businessName}</h1>
<a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
```

### **In HTML (public/index.html):**
```html
<title>%REACT_APP_WEBSITE_TITLE%</title>
<meta name="description" content="%REACT_APP_WEBSITE_DESCRIPTION%">
```

## ⚠️ **Important Notes:**

1. **REACT_APP_** prefix is required for Create React App
2. **Restart development server** after creating .env
3. **Build process** will include these variables
4. **Never expose** API keys in client-side code (use backend for sensitive operations)

## 🔒 **Security Best Practices:**

- ✅ Use `.env` for configuration
- ✅ Add `.env` to `.gitignore`
- ✅ Use `REACT_APP_` prefix for public variables
- ❌ Don't put secrets in client-side code
- ❌ Don't commit `.env` files

## 📁 **File Structure:**
```
TM-store-website/
├── .env                    # Your actual environment variables (not in git)
├── .env.example           # Template for other developers
├── .gitignore             # Already includes .env
└── src/
    └── firebase.js        # Uses environment variables
```

## 🎯 **Current Status:**

- ✅ **Firebase config** is hardcoded (works fine for now)
- ✅ **Business info** is hardcoded (works fine for now)
- 🔄 **Optional**: Move to environment variables for flexibility

**Recommendation**: Create the `.env` file for future flexibility, but the current setup works perfectly for deployment! 
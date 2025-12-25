# 💖 Romantic Love Website

A beautiful, emotional, and animated multi-page love website created with pure HTML, CSS, and JavaScript.

## 🌸 Features

- **Page 1 (Love Intro)**: Interactive beating heart, scratch card surprise, floating hearts animation
- **Page 2 (Memories)**: Photo gallery with romantic shayari, background music, rose petals animation
- **Page 3 (Forever)**: Typewriter message with bouncing hearts animation
- Fully responsive design for mobile and desktop
- Smooth page transitions
- Romantic pastel color scheme (pink, red, peach, lavender)
- Beautiful cursive fonts (Dancing Script, Pacifico)

## 🎨 Customization Guide

### How to Change Images

**Page 1 - Heart Image:**
Open `index.html` and find line with the heart image:
```html
<img src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800"
```
Replace the URL with your own image URL or local file path like `images/my-photo.jpg`

**Page 2 - Memory Photos:**
Open `memories.html` and replace the image URLs in each memory card:
```html
<img src="YOUR_IMAGE_URL_HERE" alt="Memory 1">
```

You can add more or fewer cards by copying/pasting the `.memory-card` div blocks.

### How to Change Text & Messages

**Scratch Card Message:**
In `index.html`, find:
```html
<div class="reveal-text">💖 I Love You 💖</div>
```
Change the text to your custom message.

**Romantic Shayari:**
In `memories.js`, find the `shayariCollection` array and modify the text:
```javascript
const shayariCollection = [
  {
    text: "YOUR CUSTOM SHAYARI HERE\n\nYour English translation here."
  },
  // Add more shayari objects...
];
```

**Forever Message:**
In `forever.js`, find:
```javascript
const message = "You are my forever ❤️";
```
Change to your custom message.

### How to Add Background Music

1. Get a romantic MP3 file (royalty-free music from sites like pixabay.com or bensound.com)
2. Place the MP3 file in your project folder and name it `romantic-music.mp3`
3. Or change the filename in `memories.html`:
```html
<audio id="backgroundMusic" loop>
  <source src="YOUR_MUSIC_FILE.mp3" type="audio/mpeg">
</audio>
```

**Note:** Due to browser autoplay policies, music will only play after user interaction.

### How to Change Colors

Open `romantic-styles.css` and modify the CSS variables at the top:
```css
:root {
  --pink-light: #FFE5EC;    /* Change to your color */
  --pink-medium: #FFB3C6;   /* Change to your color */
  --pink-dark: #FF6B9D;     /* Change to your color */
  --red-light: #FF8B94;     /* Change to your color */
  --red-medium: #FF5A5F;    /* Change to your color */
  /* etc... */
}
```

### How to Change Fonts

The website uses Google Fonts. To change fonts:
1. Go to [Google Fonts](https://fonts.google.com/)
2. Pick your fonts
3. Replace the import URL in `romantic-styles.css`
4. Update the `font-family` properties in the CSS

## 📁 File Structure

```
project/
├── index.html          # Page 1 - Love Intro with heart & scratch card
├── memories.html       # Page 2 - Photo memories with shayari
├── forever.html        # Page 3 - Forever message
├── romantic-styles.css # All styles and animations
├── love-intro.js       # Page 1 scripts
├── memories.js         # Page 2 scripts
├── forever.js          # Page 3 scripts
└── README.md          # This file
```

## 🚀 How to Use

1. Download all files to a folder
2. Customize images, text, and music (see guide above)
3. Open `index.html` in your web browser
4. Share with your loved one! 💕

## 💡 Tips

- Use high-quality images (at least 800px wide)
- Keep music files under 5MB for faster loading
- Test on mobile devices to ensure responsiveness
- Consider hosting on GitHub Pages or Netlify for free

## 🎵 Recommended Free Music Sources

- [Pixabay Music](https://pixabay.com/music/)
- [Bensound](https://www.bensound.com/)
- [Free Music Archive](https://freemusicarchive.org/)

## 📸 Recommended Free Image Sources

- [Pexels](https://www.pexels.com/)
- [Unsplash](https://unsplash.com/)
- [Pixabay](https://pixabay.com/)

## ❤️ Made with Love

Created to help you express your feelings in a beautiful, interactive way!

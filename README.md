# YomiBashi – Japanese Subtitle Converter

YomiBashi is a React-based web application that allows users to upload Japanese `.srt` subtitle files and convert them into a more readable format (romaji/furigana-style) for language learning.
This frontend connects to the YomiBashi FastAPI backend and provides a simple, mobile-first interface for file upload and download.

## Why need a Intra-Language Subtitle Converter? 
Learning a new language through movies, anime, and TV shows is one of the most effective and enjoyable methods.
Many Japanese learners prefer watching content with subtitles to improve listening and reading skills at the same time.

However, beginners face a major problem when learning Japanese.

Japanese writing uses three scripts:
* Hiragana
* Katakana
* Kanji

Among these, **Kanji is the most complex** and difficult for beginners to read.
Most Japanese subtitle files available online use Kanji, which makes them hard to understand for new learners.

Because of this, beginners often prefer **Romaji**, which is the representation of Japanese sounds using the English alphabet.

Example:
```
Kanji: ありがとう
Romaji: arigatou
```
Unfortunately, Romaji subtitles are rarely available for most shows and movies.

This project solves that problem.

Users can upload a Japanese subtitle file (`.srt`) containing Kanji/Hiragana/Katakana,
and the system converts the text into **Romaji subtitles**, which beginners can easily read.


## Live Website

Frontend (Deployed on Netlify):
```
https://yomibashi.netlify.app/
```

Backend API (Deployed on Render):
```
https://yokibashi.onrender.com
```

---

## Purpose

This frontend allows users to:

* Upload Japanese `.srt` subtitle files
* Send the file to the backend API
* Receive a converted subtitle file
* Download the processed file
* Use the tool on desktop or mobile

The UI is designed to be simple, fast, and distraction-free for language learners.

---

## Tech Stack

* **React**
* **JavaScript**
* **HTML5**
* **CSS3**
* Deployed with **Netlify**

---

## Installation (Local Development)

### Step 01: Clone the repository

```bash
git clone https://github.com/your-username/yomibashi-frontend.git
cd yomibashi-frontend
```

### Step 02: Install dependencies

```bash
npm install
```

### Step 03: Run development server

```bash
npm start
```

App will run at:
```
http://localhost:3000
```

## Backend Connection

The frontend sends a POST request to the backend:

```javascript
fetch("https://yomibashi.onrender.com/convert", {
  method: "POST",
  body: formData
})
```

The backend processes the file and returns the converted result.

Make sure the backend is running locally if testing locally:

---

## Deployment

This frontend is deployed using:

* **Netlify**
* Continuous deployment from GitHub
* Automatic builds on push to main branch

Live URL:
```
https://yomibashi.netlify.app/
```

---

## 🔮 Future Improvements

* Drag & drop upload
* Loading animation
* File validation (only `.srt`)
* Better mobile UI refinement
* Dark mode
* Save previous conversions
* Progress bar for large files


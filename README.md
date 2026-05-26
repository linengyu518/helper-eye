# Helper Eye Website

Product website for the Helper Eye smart assistance kit.

## 📁 File Structure

```
helper-eye/
├── index.html          ← Main webpage
├── style.css           ← All styles
├── script.js           ← Language switcher
├── images/             ← Product photos folder
│   ├── wireless-pen.jpg       ✅ uploaded
│   ├── otg-lens.jpg           ← replace placeholder
│   ├── earpiece.jpg           ← replace placeholder
│   ├── app-screenshot.jpg     ← replace placeholder
│   └── full-kit.jpg           ← replace placeholder
└── README.md
```

## 🖼️ Adding Product Photos

To replace a placeholder with a real photo:

1. Put your image file inside the `images/` folder
2. Open `index.html` and find the product's `<!-- comment -->`
3. Delete the `<div class="gallery-placeholder">...</div>` block
4. Replace it with:
   ```html
   <img src="images/YOUR-FILENAME.jpg" alt="Product Name" class="gallery-img">
   ```

## 🚀 Deploy to GitHub Pages

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) → click **New repository**
2. Name it `helper-eye` (or anything you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 2 — Upload files
**Option A — Upload via browser (easiest):**
1. On your repo page, click **uploading an existing file**
2. Drag and drop ALL files: `index.html`, `style.css`, `script.js`, and the entire `images/` folder
3. Click **Commit changes**

**Option B — Using Git (command line):**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/helper-eye.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. In your repo, go to **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose branch: **main**, folder: **/ (root)**
4. Click **Save**

### Step 4 — Your site is live! 🎉
After ~1 minute, your website will be available at:
```
https://YOUR-USERNAME.github.io/helper-eye/
```

## 🌐 Language
The website defaults to **English**. Visitors can switch to Chinese using the EN / 中文 button in the top-right corner. Their preference is saved in the browser.

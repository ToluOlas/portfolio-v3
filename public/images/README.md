# Images Setup Instructions

All Imgur links have been replaced with local image paths. You need to download the images from the original Imgur URLs and save them in this directory.

## Required Images

Please download the following images and save them with the exact names shown below:

### 1. Profile Image
- **Original URL**: https://i.imgur.com/xXgqOjR.png
- **Save as**: `profile.png`
- **Location**: `/public/images/profile.png`

### 2. 2D Action Platformer Project
- **Original URL**: https://i.imgur.com/MANJXcH.png
- **Save as**: `platformer.png`
- **Location**: `/public/images/platformer.png`

### 3. Cybersecurity Training Project
- **Original URL**: https://i.imgur.com/P1hNMEP.png
- **Save as**: `cybersecurity.png`
- **Location**: `/public/images/cybersecurity.png`

### 4. Maths Revision Program
- **Original URL**: https://i.imgur.com/X3WGEHo.png
- **Save as**: `maths.png`
- **Location**: `/public/images/maths.png`

### 5. Student Budgeting App
- **Original URL**: https://i.imgur.com/Ac48wQc.png
- **Save as**: `budget.png`
- **Location**: `/public/images/budget.png`

### 6. Celonis EMS Icon
- **Original URL**: https://i.imgur.com/gx3QnTK.png
- **Save as**: `celonis-icon.png`
- **Location**: `/public/images/celonis-icon.png`

## How to Download

### Option 1: Using a Browser (Recommended)
1. Click on each URL above
2. Right-click on the image
3. Select "Save Image As..."
4. Save it in this directory (`public/images/`) with the exact filename shown above

### Option 2: Using Command Line (if you have wget or curl)

```bash
cd public/images

# Download all images
wget -O profile.png https://i.imgur.com/xXgqOjR.png
wget -O platformer.png https://i.imgur.com/MANJXcH.png
wget -O cybersecurity.png https://i.imgur.com/P1hNMEP.png
wget -O maths.png https://i.imgur.com/X3WGEHo.png
wget -O budget.png https://i.imgur.com/Ac48wQc.png
wget -O celonis-icon.png https://i.imgur.com/gx3QnTK.png
```

Or using curl:

```bash
cd public/images

curl -o profile.png https://i.imgur.com/xXgqOjR.png
curl -o platformer.png https://i.imgur.com/MANJXcH.png
curl -o cybersecurity.png https://i.imgur.com/P1hNMEP.png
curl -o maths.png https://i.imgur.com/X3WGEHo.png
curl -o budget.png https://i.imgur.com/Ac48wQc.png
curl -o celonis-icon.png https://i.imgur.com/gx3QnTK.png
```

## Verification

After downloading all images, your `/public/images/` directory should contain:
- profile.png
- platformer.png
- cybersecurity.png
- maths.png
- budget.png
- celonis-icon.png

Once all images are in place, your website will display all images correctly, even in the UK where Imgur may be blocked.

#!/bin/bash
# ---------------------------------------------
# Build & Deploy Script for MyFolio
# Author: Ayisha Farhan
# ---------------------------------------------

# Exit immediately if any command fails


# Navigate to project directory
cd /Users/farhanyousuf/Documents/Github/MyFolio

echo "📦 Installing dependencies and building project..."
npm install && npm run build
echo "✅ Build completed successfully."

# Push latest source code to main repo
echo "🚀 Pushing source code to MyFolio repository..."
rm -rf .git
git init
git remote add origin https://github.com/AyishaKP/MyFolio.git
git add .
git commit -m "my folio"
git push -f origin main
git remote remove origin
echo "✅ Source code pushed successfully."

# Deploy build folder to GitHub Pages repo
echo "🌐 Deploying build folder to GitHub Pages..."
cd build
rm -rf .git
git init
git remote add origin https://github.com/AyishaKP/ayishakp.github.io.git
git add .
git commit -m "my folio"
git push -f origin main
echo "✅ Deployment to ayishakp.github.io successful."
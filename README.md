# MyFolio
My PortFolio

cd /Users/farhanyousuf/Documents/Github/MyFolio
npm install && npm run build /// this generates a new build in build folder
rm -rf .git
git init
git remote add origin https://github.com/AyishaKP/MyFolio.git
git add .
git commit -m 'my folio'
git push -f origin main
git remote remove origin
cd build
rm -rf .git
git init
git remote add origin https://github.com/AyishaKP/ayishakp.github.io.git
git add .
git commit -m 'my folio'
git push -f origin main

// Run all the above commands by using below command
./build.sh
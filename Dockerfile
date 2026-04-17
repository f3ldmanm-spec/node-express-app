# Редактируем Dockerfile
cd C:\Users\f3ldm\node-express-app

# Меняем команду
(Get-Content Dockerfile) -replace 'RUN npm ci --only=production', 'RUN npm install --only=production' | Set-Content Dockerfile

# Проверяем изменение
cat Dockerfile

# Пушим изменения
git add Dockerfile
git commit -m "Replace npm ci with npm install"
git push
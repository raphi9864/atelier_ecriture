# Étape de construction
FROM node:16 AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json du répertoire server
COPY server/package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application du répertoire server
COPY server/ .

# Compiler le TypeScript en JavaScript
RUN npm run build

# Étape de production
FROM node:16-alpine AS production

# Définir le répertoire de travail
WORKDIR /app

# Copier le package.json et le package-lock.json du répertoire server
COPY server/package*.json ./

# Installer uniquement les dépendances de production
RUN npm install --only=production

# Copier les fichiers compilés de l'étape de construction
COPY --from=builder /app/dist ./dist

# Définir les variables d'environnement (au lieu de copier le fichier .env)
ENV PORT=5001
ENV MONGODB_URI=mongodb://host.docker.internal:27017/redbull
ENV EMAIL_USER=raphi98.attal@gmail.com
ENV EMAIL_PASS=bwmimavummsuhhki

# Exposer le port sur lequel l'application écoute
EXPOSE 5001

# Commande pour démarrer l'application
CMD ["node", "dist/index.js"]
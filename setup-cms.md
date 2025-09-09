# CMS Setup voor Vroedvrouw Jana

## Overzicht
Deze website heeft nu een volledig werkend CMS systeem voor blog management. Jana kan eenvoudig blog posts toevoegen, bewerken en beheren via een gebruiksvriendelijke interface.

## Wat is er toegevoegd?

### 1. Netlify CMS
- **Admin interface**: `/admin/` - Hier kan Jana inloggen en content beheren
- **Content opslag**: Blog posts worden opgeslagen in `/content/blog/`
- **Media uploads**: Afbeeldingen worden opgeslagen in `/assets/images/`

### 2. Blog pagina
- **URL**: `/blog.html` - De publieke blog pagina
- **Responsive design**: Werkt perfect op desktop en mobiel
- **Automatische styling**: Past bij de bestaande website stijl

### 3. Navigatie
- Blog link toegevoegd aan de hoofdpagina
- Terug navigatie van blog naar hoofdpagina

## Hoe werkt het?

### Voor Jana (Content Manager):
1. Ga naar `jouwwebsite.com/admin/`
2. Log in met je GitHub account
3. Klik op "Blog Posts" in het menu
4. Klik "New Blog Post" om een nieuwe post te maken
5. Vul de velden in:
   - **Title**: Titel van de blog post
   - **Publish Date**: Wanneer gepubliceerd
   - **Featured Image**: Hoofdafbeelding (optioneel)
   - **Excerpt**: Korte samenvatting
   - **Body**: Volledige blog content (Markdown)
   - **Tags**: Labels voor categorisering
   - **Author**: Auteur (standaard "Jana")
   - **Published**: Of de post zichtbaar is

### Voor bezoekers:
1. Ga naar `jouwwebsite.com/blog.html`
2. Bekijk alle gepubliceerde blog posts
3. Klik op posts om te lezen

## Technische details

### Bestanden structuur:
```
coming-soon/
├── admin/
│   ├── index.html          # CMS interface
│   └── config.yml          # CMS configuratie
├── content/
│   └── blog/
│       └── *.md            # Blog posts (Markdown)
├── blog.html               # Publieke blog pagina
├── blog.css                # Blog styling
├── blog.js                 # Blog functionaliteit
└── assets/images/          # Uploaded afbeeldingen
```

### Hosting vereisten:
- **Git repository**: Voor versie controle van content
- **Static hosting**: Netlify, Vercel, GitHub Pages, etc.
- **Git Gateway**: Voor authenticatie (automatisch op Netlify)

## Setup instructies

### Stap 1: Repository voorbereiden
```bash
# Initialiseer git repository (als nog niet gedaan)
git init
git add .
git commit -m "Add CMS system"

# Push naar GitHub
git remote add origin [YOUR_GITHUB_REPO_URL]
git push -u origin main
```

### Stap 2: Netlify setup
1. Ga naar [netlify.com](https://netlify.com)
2. Klik "New site from Git"
3. Kies je GitHub repository
4. Build settings:
   - **Build command**: (leeg laten)
   - **Publish directory**: `coming-soon`
5. Klik "Deploy site"

### Stap 3: Git Gateway inschakelen
1. In Netlify dashboard: Site settings → Identity
2. Klik "Enable Identity"
3. Ga naar Settings → Identity → Services
4. Klik "Enable Git Gateway"
5. Kies je GitHub repository

### Stap 4: Test de CMS
1. Ga naar `jouwsite.netlify.app/admin/`
2. Registreer een account
3. Maak je eerste blog post!

## Voordelen van dit systeem

✅ **Gratis** - Geen maandelijkse kosten  
✅ **Eenvoudig** - Geen technische kennis vereist  
✅ **Veilig** - Content wordt opgeslagen in Git  
✅ **Snel** - Static site = snelle laadtijden  
✅ **SEO vriendelijk** - Goed voor zoekmachines  
✅ **Mobiel** - Werkt op alle apparaten  

## Support

Voor vragen over het CMS systeem, raadpleeg de [Netlify CMS documentatie](https://www.netlifycms.org/docs/).

## Aanpassingen

De CMS configuratie kan aangepast worden in `/admin/config.yml`:
- Nieuwe content types toevoegen
- Velden aanpassen
- Media instellingen wijzigen
- Workflow instellen

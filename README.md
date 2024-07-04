# Solama Community Website
Before updating Memes, Partners or Team Members the images will need to be added to:
```
public/memes
public/partners
public/team
```

Links and or names to the newly added Memes, Partners or Team Members can updated in:
```
src/utils/constants/constants.ts
```

Updates to Footer can be made in:
```
src/components/partials/Footer.tsx
```

Updates to Header can be made in:
```
src/components/partials/Header.tsx
```

When updating the Header links you will also need to update the mobile menu links in:
```
src/components/MobileNav.tsx
```

Steps to update website from vscode:
1. Make change in file and CTRL+S
2. use `npm run dev` to preview changes
3. once changes look good run these git commands
```
git add .
git commit -m "description of changes"
git push origin main
```

# Fotografije — šta dodati / Photographs — what to add

Fotografije se prikazuju **tačno onakve kakve ih dostavite — bez ikakve
obrade ili promene boja**. Kada dodate fajl sa tačnim imenom u ovaj folder i
ponovo pokrenete build (`npm run build`), fotografija se automatski pojavljuje
u svom ramu na sajtu.

Format je slobodan: `.jpg`, `.jpeg`, `.png` ili `.webp` — bitno je samo ime
fajla (bez ekstenzije):

> Napomena: široka traka na glavnoj stranici sada prikazuje animiranu graviranu
> mapu (Beograd → svet), ne fotografiju. Fajlovi `belgrade-panorama.png` i
> folder `panorama/` trenutno se ne prikazuju nigde — čuvaju se za buduću
> upotrebu.

| Ime fajla | Gde se pojavljuje | Predlog motiva |
|---|---|---|
| `office-team` | About Us sekcija | Tim ili radni ambijent |
| `service-locations` | Usluga I — Pronalaženje lokacija | Novi Beograd / razvojna zona iz vazduha |
| `service-assessment` | Usluga II — Procena | Radni sto, analiza, dokumenti |
| `service-structuring` | Usluga III — Strukturiranje | Potpisivanje / sastanak |
| `service-coordination` | Usluga IV — Koordinacija | Institucionalni Beograd (zgrade, ulice) |

Preporuka: min. 1600px širine (panorama 2400px+). Rami su 3:2 (široka traka
21:9), pa se slika kadrira po sredini ako proporcije nisu iste.

## Ostale zamene pre objavljivanja

- **Uloge tima:** prikazano je „Senior Advisor / Senior savetnik" (izvedeno iz
  PDF-a: „senior experts"). Ako Lela Arsić i Jelena Pantović nose druge titule,
  izmenite `lib/content.ts` (polje `about.team`).
- **Destinacija kontakt forme:** `app/api/contact/route.ts` je stub koji samo
  loguje upite. Pre objavljivanja povezati sa zvaničnim mejlom firme.
- **Footer:** adresa i matični podaci firme su izostavljeni dok ih ne dostavite.

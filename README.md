# Tik Receptai

Veikiantis puslapis čia: [https://tikreceptai.netlify.app/](https://tikreceptai.netlify.app/)

## Jeigu norite pridėti naują receptą

Sukurkite naują `.md` failą [./src/content/receptai/](./src/content/receptai/)
direktorijoje. Pirmiausia nurodykite meta informaciją apie receptą:

```
---
title: 'Plovas'
pubDate: 2024-02-02
author: 'Dalius'
tags: ['vištiena', 'aviena', 'ryžiai', 'greitpuodis', 'pagrindinis']
---
```

Pavadinimas, kada parašytas receptas ir kas recepto autorius. Taip pat prie
`tags` nurodykite žymes: rekomenduoju nurodyti pagrindinius ingredientus,
pagrindinį gaminimo įrankį (pvz.: orkaitė, greitpuodis, lėtpuodis, keptuvė) ir
koks tai receptas (pvz.: pagrindinis, desertas, užkandis...).

Tada sekcijoje `## Ko reikės?` nurodykite produktų sąrašą, o sekcijoje `## Kaip
gaminti?` gaminimo žingsnius.

Sukurkite Pull Request'ą ir laukite kol jį patvirtinsiu.

## Jeigu pastebėjote klaidą

- Užregistruokite naują problemą `Issues` skiltyje

- Sutaisykite problemą ir sukurkite naują PRą

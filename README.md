# kodim-upgrade

Přechod formátu kurzu na KodimCMS verzi 1.0 lze provést ve dvou krocích

1. Spustit tento transformační script
2. Ručně nasadit novou ikonu kurzu

## Automatický script

Většinu nutné práce provede automaticky tato utilita. Je potřeba mít nainstalovaný NodeJS verze alespoň 16. Pak stačí ve složce kurzu spustit

```
npx kodim-upgrade
```

nebo kdekoliv jinde

```
npx kodim-upgrade <cesta ke slozce>
```

Skript provede následující změny:

1. Cesty ke cvičením nově používají běžná lomítka. Místo `cvlekce>cviceni` se nyní píše `cvlekce/cviceni`.
1. Řešení příkladů se místo `---solution` uzavírá do bloku
   ```
   :::solution

   :::
   ```

## Ruční nasazení ikony kurzu

Ikona kurzu má teď předepsaný formát a barvu, aby zapadla do designu webu. Ikona musí být SVG soubor umístěný ve složce `assets` v kořenové složce kurzu. V hlavním `entry.yml` musí být uvedena celá cesta k ikoně, tedy například 

```yaml
image: assets/ikona.svg
```

Pokud zatím nemáte ikonu přímo pro kurz, můžete použít některou z ikon v tomto repozitáři ve složce `icons`:

- `python.svg` - hodí se pro kurzy ohledně Pythonu
- `construction.svg` - hodí se pro kurzy, které jsou ve výstavbě, nebo zatím nevíte, co tam dát za ikonu.

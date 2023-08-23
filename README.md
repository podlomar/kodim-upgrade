# kodim-upgrade

Přechod formátu kurzu na KodimCMS verzi 1.0 lze provést ve dvou krocích

1. Spustit tento transformační script
2. Ručně nasadit nový obrázek kurzu

## Automatický script

Většinu nutné práce provede automaticky tato utilita. Je potřeba mít nainstalovaný NodeJS verze alespoň 16. Pak stačí spustit:

```
npx kodim-upgrade
```

nebo

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

## Obrázek kurzu


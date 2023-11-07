# Release-Erstellung für ces-about

- Neues Release mit git-flow erstellen
   - Versionen in Changelog, Makefile und package.json aktualisieren
- Release-Paket erstellen
  - Erstellten Tag auschecken
  - Make-Target `package` ausführen
- Auf Github aus dem Tag ein Release erstellen
  - Informationen aus dem Changelog in die Beschreibung übernehmen
  - zuvor erstellte Pakete an das Release hängen
    - ces-about_v[VERSION].tar.gz
    - ces-about_v[VERSION].tar.gz.sha256
- ces-about in nginx-Dogu aktualisieren

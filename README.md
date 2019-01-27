## HOW TO INSTALL

```
yarn # or npm install
npm run build
# or:
npm run watch
```

## BUGFIX für jQuery - hatte ja im Workshop nicht funktioniert

Im Nachgang ist mir aufgefallen, was ich falsch gemacht habe.

BUGFIX:

- in der `package.json` habe ich das build-script korrigiert von `tsc [filename]` nach `tsc`.

HINTERGRUND:

- ich kann einzelne Dateien mit `tsc [filename]` compilieren; oder aber, wenn eine `tsconfig.json` existiert, das gesamte "Projekt" (einfach nur durch Aufruf von `tsc`).
- Ich hatte nun eine `tsconfig.json`, die auch von VS Code respektiert wurde, aber wenn man nur einzelne files compiliert, nicht vollständig berücksichtigt wird.
- aus diesem Grund hat die IDE-Ausgabe (alles war OK) nicht zum Build (da gab es einen Fehler) gepasst.
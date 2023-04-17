## React - integracja komponentów

1. Klasycznie, od brancha main stwórzcie swój branch - homework3/imienazwisko.
1. Stwórzcie w tym katalogu aplikację Reactową, która będzie działać jak lista zakupów.
2. Na ekranie startowym ma być tylko input do podania nazwy produktu do kupienia i przycisk "Add".
3. Po kliknięciu przycisku, produkt ma się dodać do listy poniżej. Ma być widoczna nazwa produktu, checkbox do "odhaczenia" produktu, i przycisk "Usuń".
4. Wciśnięcie checkboxa ma spowodować przekreślenie nazwy produktu ~~w taki sposób~~. Tak jakbyśmy odznaczali już zakupiony produkt.
5. Wciśnięcie przycisku "Usuń" ma spowodować usunięcie produktu z listy :)
6. Akcje nie muszą się nigdzie na stałe zapisywać, po odświeżeniu strony lista może zniknąć.
7. Po wykonaniu zadań stwórzcie pull request do brancha main.

## Ważne!

Żeby móc usuwać, dodawać do listy i móc "odhaczać" produkty, Wasz produkt będzie musiał posiadać 3 właściwości, np. { ID: 1, name: 'ziemniaki', isCompleted: false }.
ID nadawajcie po kolei każdemu produktowi i posługujcie się nim przy usuwaniu produktu, 'name' wyświetlajcie na liście (jest to wartość wpisana w inputa), a 'isCompleted' zmieniajcie po użyciu checkboxa.

## Wymagania
1. Użycie useState
2. Użycie `styled-components`

## Punktacja
1. Działające funkcjonalności - 5 pkt.
2. Wygląd aplikacji, absolutnie nie musi to być piękne, byle było widać, co gdzie jest i gdzie co kliknąć :) - 2 pkt.
3. Czytelność kodu (semantyczne nazwy zmiennych, rozbicie na komponenty) - 2 pkt.
4. Brak problemów z gitem - brak konfliktów, poprawnie nazwany branch, wystawiony pull request - 2 pkt.

Deadline 21/04/2023
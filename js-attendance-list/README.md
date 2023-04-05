# Attendance list - list obecności

Zostaly stworzone dwa API, które bazują tej samej bazie danych. W bazie zostały umieszone podstawowe dane was wszystkich wraz z nickiem do GitHuba. Za pomocą tych danych musicie odznaczyć się na liście obecności przesyłając wasze imie nazwisko oraz wspomniany nick. Gdy to zrobicie, status obecości w bazie zmieni się na true, a wasze imię i nick zostanie zwrócony z wykorzystaniem API do pobrania listy obecnych użytkowników.

Działamy na swoich branch'ach!!
### API do odznaczania obecności: 

https://pxia4wkbor5nqoq3yx3njuvfc40qkcfa.lambda-url.us-east-1.on.aws/

hint: Aby odznaczyć sie musisz przekazać dane w body requestu POST. Klucze jakie są wymagane to `name`, `surname` oraz `github`.

Uwaga!

Wielkość znaków ma znaczenie!

### API do pobierania listy obecności: 

https://ipcl32yuj4hzjss4l6yek7prt40wopeg.lambda-url.us-east-1.on.aws/

## Celem zadania jest:
1. Stworzyć formularz zawierający 3 inputy (dla imie, nazwisko oraz nick do GitHub). 
2. Każde z tych pól musi zostać zwalidowana na zmianie wartości inputu. Minimalna ilość znaków dla każdego z nich to 3, a maksymalna to 50. Dodatkowo imie i nazwisko muszą zawierać wyłącznie litery.
3. Stworzyć listę osób, które wpisały się już na liste i wyświelić ich imię oraz nick
4. Pobrać dane z zewnętrznego API i wyświetlić je w liście z poprzedniego podpunktu (hint użyj metody GET)
5. Stworzyć funkcję, która wyśle dane z formularza do API działaca na przyciśniecie guzika
6. Odcheckować się na liście
7. Zrobić estetyczny layout z użyciem flexbox lub grid
8. Po wysłaniu danych do API powinien pojawić się na dole ekranu `toast message` i w zależności od statusu HTTP wyświelić wiadomość o błedzie lub poprawnym wykonaniu requestu
9. W przypadku wystąpienie błędu pobierania listy obecności powinien pojawić się komunikat w postaci `toast message`
10. Pisać czytelny kod - podział na funkcje, poprawne nazewnictwo zmiennych, użycie struktur JS, prettier

Za każdy podpunkt można dostać po 1 pkt. Czas na wykonanie zadania do: 19/04/2023
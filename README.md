## Docker Hub

## Task 01

✅ 3.0 obraz ubuntu z Pythonem w wersji 3.10 https://github.com/jacek-golebiowski/ebiznes25/commit/cd2c5dff4a0356237cfe9b291322764ac88d57b4

✅ 3.5 obraz ubuntu:24.02 z Javą w wersji 8 oraz Kotlinem https://github.com/jacek-golebiowski/ebiznes25/commit/53a18670e10a92be9160514261d76b50ea3cbb36

✅ 4.0 do powyższego należy dodać najnowszego Gradle’a oraz paczkę JDBC
SQLite w ramach projektu na Gradle (build.gradle) https://github.com/jacek-golebiowski/ebiznes25/commit/d501e5922947fc70e93e2d0ccdf8d1098f7eafa3

✅ 4.5 stworzyć przykład typu HelloWorld oraz uruchomienie aplikacji 
przez CMD oraz gradle https://github.com/jacek-golebiowski/ebiznes25/commit/d501e5922947fc70e93e2d0ccdf8d1098f7eafa3

❌ 5.0 dodać konfigurację docker-compose

➡️ https://hub.docker.com/r/flubber726/kotlin-sqlite

Kod: ./Task_01

./demos/Task_01.mp4

## Task 02

✅ 3.0 Należy stworzyć kontroler do Produktów https://github.com/jacek-golebiowski/ebiznes25/commit/3a99f47e77492015980cf8d65ced7db2a8662b72

✅ 3.5 Do kontrolera należy stworzyć endpointy zgodnie z CRUD - dane
pobierane z listy https://github.com/jacek-golebiowski/ebiznes25/commit/a0242fa1402f7f9228c5ea8730a95f7d8eb6c352

✅ 4.0 Należy stworzyć kontrolery do Kategorii oraz Koszyka + endpointy
zgodnie z CRUD https://github.com/jacek-golebiowski/ebiznes25/commit/e9ffafa4d5974083b4eb9a84ded0407a426b6b6e

❌ 4.5 Należy aplikację uruchomić na dockerze (stworzyć obraz) oraz dodać
skrypt uruchamiający aplikację via ngrok

❌ 5.0 Należy dodać konfigurację CORS dla dwóch hostów dla metod CRUD

Kod: ./Task_02

./demos/Task_02.mp4

## Task 03

✅ 3.0 Należy stworzyć aplikację kliencką w Kotlinie we frameworku Ktor,
która pozwala na przesyłanie wiadomości na platformę Discord https://github.com/jacek-golebiowski/ebiznes25/commit/185f0c3f5139ffa957b67255c905437bfdfe9720 | https://github.com/jacek-golebiowski/ebiznes25/commit/50c109c10acaa05e200251ee4925ac25355a0144

❌ 3.5 Aplikacja jest w stanie odbierać wiadomości użytkowników z
platformy Discord skierowane do aplikacji (bota)

❌ 4.0 Zwróci listę kategorii na określone żądanie użytkownika

❌ 4.5 Zwróci listę produktów wg żądanej kategorii

❌ 5.0 Aplikacja obsłuży dodatkowo jedną z platform: Slack, Messenger,
Webex

Kod: ./Task_03

./demos/Task_03.mp4

## Task 04

✅ 3.0 Należy stworzyć aplikację we frameworki echo w j. Go, która będzie miała kontroler Produktów zgodny z CRUD https://github.com/jacek-golebiowski/ebiznes25/commit/e8ef90a6f03f048c7ee3df156d5a5b92067dde2f

❌ 3.5 Należy stworzyć model Produktów wykorzystując gorm oraz wykorzystać model do obsługi produktów (CRUD) w kontrolerze (zamiast listy)

❌ 4.0 Należy dodać model Koszyka oraz dodać odpowiedni endpoint

❌ 4.5 Należy stworzyć model kategorii i dodać relację między kategorią, a produktem

❌ 5.0 pogrupować zapytania w gorm’owe scope'y

Kod: ./Task_04

./demos/Task_04.mp4

## Task 05

✅ 3.0 W ramach projektu należy stworzyć dwa komponenty: Produkty oraz
Płatności; Płatności powinny wysyłać do aplikacji serwerowej dane, a w
Produktach powinniśmy pobierać dane o produktach z aplikacji
serwerowej; https://github.com/jacek-golebiowski/ebiznes25/commit/2b02b1118a595942e2b52502e72d98bc6f429ce6

✅ 3.5 Należy dodać Koszyk wraz z widokiem; należy wykorzystać routing https://github.com/jacek-golebiowski/ebiznes25/commit/2b02b1118a595942e2b52502e72d98bc6f429ce6

✅ 4.0 Dane pomiędzy wszystkimi komponentami powinny być przesyłane za
pomocą React hooks https://github.com/jacek-golebiowski/ebiznes25/commit/2b02b1118a595942e2b52502e72d98bc6f429ce6

❌ 4.5 Należy dodać skrypt uruchamiający aplikację serwerową oraz
kliencką na dockerze via docker-compose

❌ 5.0 Należy wykorzystać axios’a oraz dodać nagłówki pod CORS

Kod: ./Task_05

./demos/Task_05.mp4

## Task 06

✅ 3.0 Należy stworzyć 20 przypadków testowych w CypressJS lub Selenium
(Kotlin, Python, Java, JS, Go, Scala) https://github.com/jacek-golebiowski/ebiznes25/commit/66527fece90cc62fe3fa6ce4d935e5c2334131ed

✅ 3.5 Należy rozszerzyć testy funkcjonalne, aby zawierały minimum 50
asercji https://github.com/jacek-golebiowski/ebiznes25/commit/66527fece90cc62fe3fa6ce4d935e5c2334131ed

❌ 4.0 Należy stworzyć testy jednostkowe do wybranego wcześniejszego
projektu z minimum 50 asercjami

❌ 4.5 Należy dodać testy API, należy pokryć wszystkie endpointy z
minimum jednym scenariuszem negatywnym per endpoint

❌ 5.0 Należy uruchomić testy funkcjonalne na Browserstacku

Kod: ./Task_06

./demos/Task_06.mp4

## Task 07

✅ 3.0 Należy dodać litera do odpowiedniego kodu aplikacji serwerowej w
hookach gita https://github.com/jacek-golebiowski/ebiznes25/commit/cb34a837e35471925d1aa17f1a52197ec6612716

✅ 3.5 Należy wyeliminować wszystkie bugi w kodzie w Sonarze (kod
aplikacji serwerowej) https://github.com/jacek-golebiowski/ebiznes25/commit/c93a566b26733d117e3ebd41eab7c7d6fbdbc25d

✅ 4.0 Należy wyeliminować wszystkie zapaszki w kodzie w Sonarze (kod
aplikacji serwerowej) https://github.com/jacek-golebiowski/ebiznes25/commit/c93a566b26733d117e3ebd41eab7c7d6fbdbc25d

✅ 4.5 Należy wyeliminować wszystkie podatności oraz błędy bezpieczeństwa
w kodzie w Sonarze (kod aplikacji serwerowej) https://github.com/jacek-golebiowski/ebiznes25/commit/c93a566b26733d117e3ebd41eab7c7d6fbdbc25d

❌ 5.0 Należy wyeliminować wszystkie błędy oraz zapaszki w kodzie
aplikacji klienckiej

Kod: ./Task_07

## Task 08

✅ 3.0 logowanie przez aplikację serwerową (bez Oauth2) https://github.com/jacek-golebiowski/ebiznes25/commit/fdada968eb24dbedc5859b01b3386e1109709cc6

✅ 3.5 rejestracja przez aplikację serwerową (bez Oauth2) https://github.com/jacek-golebiowski/ebiznes25/commit/fdada968eb24dbedc5859b01b3386e1109709cc6

❌ 4.0 logowanie via Google OAuth2

❌ 4.5 logowanie via Facebook lub Github OAuth2

❌ 5.0 zapisywanie danych logowania OAuth2 po stronie serwera

Kod: ./Task_08

## Task 09

❌ 3.0 należy stworzyć po stronie serwerowej osobny serwis do łącznia z
chatGPT do usługi chat

❌ 3.5 należy stworzyć interfejs frontowy dla użytkownika, który
komunikuje się z serwisem; odpowiedzi powinny być wysyałen do
frontendowego interfejsu

❌ 4.0 stworzyć listę 5 różnych otwarć oraz zamknięć rozmowy

❌ 4.5 filtrowanie po zagadnieniach związanych ze sklepem (np.
ograniczenie się jedynie do ubrań oraz samego sklepu) do GPT

❌ 5.0 filtrowanie odpowiedzi po sentymencie

Kod: ./Task_09

## Task 10

❌ 3.0

❌ 3.5 

❌ 4.0 

❌ 4.5 

❌ 5.0 

Kod: ./Task_10
package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"github.com/gorilla/mux"
	"github.com/gorilla/handlers"
)

type Produkt struct {
	Nazwa string  `json:"nazwa"`
	Cena  float64 `json:"cena"`
}

type Platnosc struct {
	Imie  string  `json:"imie"`
	Kwota float64 `json:"kwota"`
}

var produkty = []Produkt{
	{"Jabłko", 3.50},
	{"Gruszka", 4.20},
}

func getProdukty(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(produkty)
}

func dodajPlatnosc(w http.ResponseWriter, r *http.Request) {
	var platnosc Platnosc
	_ = json.NewDecoder(r.Body).Decode(&platnosc)

	if platnosc.Kwota <= 0 {
		http.Error(w, "Kwota musi być większa niż 0", http.StatusBadRequest)
		log.Println("Błąd: Kwota musi być większa niż 0")
		return
	}

	log.Printf("Płatność od %s na kwotę %.2f zł została przetworzona\n", platnosc.Imie, platnosc.Kwota)

	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "Płatność od %s na kwotę %.2f zł została przetworzona", platnosc.Imie, platnosc.Kwota)
}

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/produkty", getProdukty).Methods("GET")
	r.HandleFunc("/platnosci", dodajPlatnosc).Methods("POST")

	loggedRouter := handlers.CORS(
		handlers.AllowedOrigins([]string{"http://localhost:3000"}),
		handlers.AllowedMethods([]string{"GET", "POST", "OPTIONS"}),
		handlers.AllowedHeaders([]string{"Content-Type", "Authorization"}),
	)(r)

	log.Println("Serwer działa na porcie 5001...")
	log.Fatal(http.ListenAndServe(":5001", loggedRouter))
}

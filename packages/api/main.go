package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"poc/indigo/repo"

	"github.com/go-chi/chi"
	"go.mongodb.org/mongo-driver/bson"
)

var mh *repo.MongoHandler

func registerRoutes() http.Handler {
	r := chi.NewRouter()
	r.Route("/patients", func(r chi.Router) {
		r.Get("/", getAllPatient)
	})
	return r
}

func main() {
	fmt.Println("Hello, World!")
	mongoDbConnection := "mongodb://localhost:27017"
	mh = repo.NewHandler(mongoDbConnection)
	r := registerRoutes()
	fmt.Println("Starting server at 3060")
	http.ListenAndServe(":3060", r)
	// fmt.Println("PQD")
	// if err != nil {
	// 	fmt.Println("Error in starting server: ", err)
	// }
}

func getAllPatient(w http.ResponseWriter, r *http.Request) {
	fmt.Println("PQD get patient")
	contacts := mh.Get(bson.M{})
	json.NewEncoder(w).Encode(contacts)
}



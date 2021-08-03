package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"poc/indigo/repo"

	"github.com/go-chi/chi"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var mh *repo.MongoHandler

func registerRoutes() http.Handler {
	r := chi.NewRouter()
	r.Route("/patients", func(r chi.Router) {
		r.Get("/", getAllPatient)
	})
	// r.Route("/byName", func(r chi.Router) {
	// 	r.Get("/", getByPrefixName)
	// })
	return r
}

func main() {
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
	client, err := mongo.Connect(context.TODO(), clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	// Check the connection
	err = client.Ping(context.TODO(), nil)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to MongoDB!")

	r := registerRoutes()
	fmt.Println("Starting server at 3060")
	http.ListenAndServe(":3060", r)

}

func getAllPatient(res http.ResponseWriter, req *http.Request) {
	contacts := mh.Get(bson.M{})
	json.NewEncoder(res).Encode(contacts)
}

func getByPrefixName(res http.ResponseWriter, req *http.Request) {
	contacts := mh.Get(bson.M{"name": "vmd"})
	json.NewEncoder(res).Encode(contacts)
}

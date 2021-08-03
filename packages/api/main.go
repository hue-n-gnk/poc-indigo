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

type Patient struct {
	Name     string `json:"name" bson:"name"`
	ID       string `json:"id" bson:"id"`
	KanaName string `json:"kana_name" bson:"kana_name"`
	Gender   string `json:"gender" bson:"gender"`
	Birthday string `json:"birthday" bson:"birthday"`
}

var mh *repo.MongoHandler

func registerRoutes() http.Handler {
	r := chi.NewRouter()
	r.Route("/patients", func(r chi.Router) {
		r.Get("/", getAllPatient)
	})
	// r.Route("/all", func(r chi.Router) {
	// 	r.Get("/", getAllPatient)
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
	patientColl := client.Database("patient").Collection("patient_info")

	r := registerRoutes()
	getByPrefixName(patientColl)
	fmt.Println("Starting server at 3060")
	http.ListenAndServe(":3060", r)

}

func getAllPatient(res http.ResponseWriter, req *http.Request) {
	contacts := mh.Get(bson.M{})
	json.NewEncoder(res).Encode(contacts)
}

// func getAll(res http.ResponseWriter, req *http.Request) {

// }
func getByPrefixName(patientColl *mongo.Collection) {
	findOptions := options.Find()
	findOptions.SetLimit(2)

	var results []*Patient

	// Passing bson.D{{}} as the filter matches all documents in the collection
	cur, err := patientColl.Find(context.TODO(), bson.D{{}}, findOptions)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Print("result")
	// Finding multiple documents returns a cursor
	// Iterating through the cursor allows us to decode documents one at a time
	for cur.Next(context.TODO()) {

		// create a value into which the single document can be decoded
		var elem Patient
		err := cur.Decode(&elem)
		if err != nil {
			log.Fatal(err)
		}

		results = append(results, &elem)
	}

	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}

	// Close the cursor once finished
	cur.Close(context.TODO())

	fmt.Printf("Found multiple documents (array of pointers): %+v\n", results)
	fmt.Print(results[0])
	// for results.Next() {

	// }
}

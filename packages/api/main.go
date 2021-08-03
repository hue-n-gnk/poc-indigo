package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"poc/indigo/model"
	"poc/indigo/repo"

	"github.com/go-chi/chi/v5"
	"go.mongodb.org/mongo-driver/bson"
)

var mh *repo.MongoHandler

type ResponseData struct {
	patients []*model.Patient
	total    int
}

func registerRoutes() http.Handler {
	r := chi.NewRouter()
	r.Route("/patients", func(r chi.Router) {
		r.Get("/", getAllPatient)
	})
	r.Route("/get", func(r chi.Router) {
		r.Get("/", getPatientsByName)
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
func getPatientsByName(w http.ResponseWriter, r *http.Request) {
	fmt.Println("PQD get patient")
	patients := mh.Get(bson.M{"name": bson.M{"$regex": `(?i).*` + "vm" + `.*`}})
	resData := ResponseData{patients: patients, total: 3}
	// render.JSON(w, r, resData)
	fmt.Print("asd", resData.total)
	a := json.NewEncoder(w)
	// fmt.Print("a", a)
	b := a.Encode(patients)
	fmt.Print("b", b)
}

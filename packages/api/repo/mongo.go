package repo

import (
	model "api/model"
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const DefaultDatabase = "patient"

type MongoHandler struct {
	client   *mongo.Client
	database string
}

//MongoHandler Constructor
func NewHandler(address string) *MongoHandler {
	ctx, err := context.WithTimeout(context.Background(), 10*time.Second)
	fmt.Println("Error context: ", err)
	cl, er := mongo.Connect(ctx, options.Client().ApplyURI(address))
	fmt.Println("Result connect: ", er)
	mh := &MongoHandler{
		client:   cl,
		database: DefaultDatabase,
	}
	return mh
}

func (mh *MongoHandler) Get(filter interface{}) []*model.Patient {
	collection := mh.client.Database(mh.database).Collection("patient_info")
	ctx, _ := context.WithTimeout(context.Background(), 5*time.Second)

	cur, err := collection.Find(ctx, filter)

	if err != nil {
		log.Fatal(err)
	}
	defer cur.Close(ctx)

	var result []*model.Patient
	for cur.Next(ctx) {
		patient := &model.Patient{}
		er := cur.Decode(patient)
		if er != nil {
			log.Fatal(er)
		}
		result = append(result, patient)
	}
	return result
}

using TVheaven.Interfaces;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TvHeaven.Models
{

  public class Continents : IContinents
  {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public string name { get; set; }

    public string description { get; set; }

    public List<Region> regions { get; set; }


  }
}
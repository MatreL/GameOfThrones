using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using TVheaven.Interfaces;

namespace TvHeaven.Models
{
  public class Character : ICharacter
  {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public string name { get; set; }
    public string family { get; set; }
    public string title { get; set; }
    public string description { get; set; }
    public string image { get; set; }
  }
}
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using TvHeaven.Models;
using TvHeaven.DatabaseSettings;

namespace TvHeaven.Services
{

  public class CharacterService
  {
    private readonly IMongoCollection<Character> _characters;
    private readonly IMongoCollection<Continents> _continents;

    public CharacterService(ICharacterDatabaseSettings settings)
    {
      var client = new MongoClient(settings.ConnectionString);
      var database = client.GetDatabase(settings.DatabaseName);
      _characters = database.GetCollection<Character>(settings.CharactersCollectionName);
      _continents = database.GetCollection<Continents>(settings.ContinentCollectionName);
    }

    public List<Character> GetCharacters()
    {
      return _characters.Find(character => true).ToList();
    }

    public Character Get(string id)
    {
      return _characters.Find<Character>(character => character.Id == id).FirstOrDefault();
    }

    public List<Continents> GetContinent()
    {
      return _continents.Find(continent => true).ToList();
    }

    public Character PostCharacter(Character newCharacter)
    {
      _characters.InsertOne(newCharacter);
      return newCharacter;
    }


    public void Remove(string id)
    {
      _characters.DeleteOne(character => character.Id == id);
    }
  }

}
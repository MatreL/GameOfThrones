namespace TvHeaven.DatabaseSettings
{
  public class CharacterDatabaseSettings : ICharacterDatabaseSettings
  {
    public string ContinentCollectionName { get; set; }
    public string CharactersCollectionName { get; set; }
    public string ConnectionString { get; set; }
    public string DatabaseName { get; set; }
  }
  public interface ICharacterDatabaseSettings
  {
    string ContinentCollectionName { get; set; }
    string CharactersCollectionName { get; set; }
    string ConnectionString { get; set; }
    string DatabaseName { get; set; }
  }
}
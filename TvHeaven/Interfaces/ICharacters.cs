namespace TVheaven.Interfaces
{
  public interface ICharacter
  {
    string Id { get; set; }
    string name { get; set; }
    string family { get; set; }
    string title { get; set; }

    string description { get; set; }
    string image { get; set; }
  }
}
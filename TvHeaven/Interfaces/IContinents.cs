using System.Collections.Generic;
using TvHeaven.Models;

namespace TVheaven.Interfaces
{
  public interface IContinents
  {
    string Id { get; set; }
    string name { get; set; }
    string description { get; set; }
    List<Region> regions { get; set; }
  }
}
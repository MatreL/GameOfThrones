using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TvHeaven.Models;
using TvHeaven.Services;


namespace TvHeaven.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class ContinentController : ControllerBase
  {
    private readonly CharacterService _continentService;

    public ContinentController(CharacterService continentService)
    {
      _continentService = continentService;
    }

    [HttpGet]
    public IEnumerable<Continents> GetContinent()
    {
      return _continentService.GetContinent();
    }
  }
}
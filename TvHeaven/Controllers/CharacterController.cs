using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TvHeaven.Models;
using TvHeaven.Services;


namespace TvHeaven.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class CharacterController : ControllerBase
  {
    private readonly CharacterService _characterService;

    public CharacterController(CharacterService characterService)
    {
      _characterService = characterService;
    }

    [HttpGet]
    public IEnumerable<Character> GetCharacters()
    {
      return _characterService.GetCharacters();
    }

    [HttpPost]
    public Character PostCharacter(Character newCharacter)
    {
      _characterService.PostCharacter(newCharacter);
      return newCharacter;
    }

    [HttpDelete("{id:length(24)}")]
    public IActionResult Delete(string id)
    {
      var character = _characterService.Get(id);

      if (character == null)
      {
        return NotFound();
      }

      _characterService.Remove(character.Id);
      return NoContent();
    }

  }

}
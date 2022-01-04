using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace TVheaven.Controllers
{
  [ApiController]
  [Route("[controller]")]

  public class CharacterUploadController : ControllerBase
  {
    private readonly IWebHostEnvironment _hosting;

    public CharacterUploadController(IWebHostEnvironment hosting)
    {
      _hosting = hosting;
    }

    [HttpPost]
    [Route("[action]")]
    public ActionResult UploadFile(IFormFile file)
    {
      string webRootPath = _hosting.WebRootPath;
      string absolutePath = Path.Combine($"{webRootPath}/images/{file.FileName}");

      try
      {
        using (var fileStream = new FileStream(absolutePath, FileMode.Create))
        {
          file.CopyTo(fileStream);
        }
        return StatusCode(201);
      }
      catch
      {
        return StatusCode(500);
      }
    }

  }
}

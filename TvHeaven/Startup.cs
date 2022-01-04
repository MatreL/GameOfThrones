using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;

using Microsoft.Extensions.Options;
using TvHeaven.Models;
using TvHeaven.DatabaseSettings;
using TvHeaven.Services;

namespace TvHeaven
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {

      services.AddControllers();
      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "TvHeaven", Version = "v1" });
      });

      services.Configure<CharacterDatabaseSettings>(
          Configuration.GetSection(nameof(CharacterDatabaseSettings))
      );

      services.AddSingleton<ICharacterDatabaseSettings>(
          sp => sp.GetRequiredService<IOptions<CharacterDatabaseSettings>>().Value
      );

      services.AddSingleton<CharacterService>();

      services.AddCors(
          options =>
          {
            options.AddPolicy("AllowAny",
                      builder => builder
                          .AllowAnyOrigin()
                          .AllowAnyHeader()
                          .AllowAnyMethod()
                  );
          }
      );
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
        app.UseSwagger();
        app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "TvHeaven v1"));
      }

      DefaultFilesOptions newOptions = new DefaultFilesOptions();
      newOptions.DefaultFileNames.Append("index.html");
      app.UseDefaultFiles(newOptions);

      app.UseStaticFiles();

      app.UseCors("AllowAny");

      app.UseHttpsRedirection();

      app.UseRouting();

      app.UseAuthorization();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
      });
    }
  }
}

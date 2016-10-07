using System.Web.Http;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Owin;

namespace PlayGroundForWebApps 
{ 
    public class Startup 
    { 
        // This code configures Web API. The Startup class is specified as a type
        // parameter in the WebApp.Start method.
        public void Configuration(IAppBuilder appBuilder) 
        { 
            // Configure Web API for self-host. 
            HttpConfiguration config = new HttpConfiguration(); 
            WebApiConfig.Register(config);

            const string rootFolder = "../../../PlayGroundForWebApps";
            var fileSystem = new PhysicalFileSystem(rootFolder);
            var options = new FileServerOptions
            {
                EnableDefaultFiles = true,
                FileSystem = fileSystem
            };

            appBuilder.Use(typeof(MiddleWare));
            appBuilder.UseFileServer(options);
            appBuilder.UseWebApi(config); 
        } 
    } 
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using NSwag.AspNet.WebApi;
using Swashbuckle.Application;

namespace PlayGroundForWebApps
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute( 
                name: "DefaultApi", 
                routeTemplate: "api/{controller}/{id}", 
                defaults: new { id = RouteParameter.Optional } 
            );
            GlobalConfiguration.Configuration.Filters.Add(new JsonExceptionFilterAttribute());

            config
            .EnableSwagger(c => c.SingleApiVersion("v1", "A title for your API"))
            .EnableSwaggerUi();
        }
    }
}

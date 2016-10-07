using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Hosting;
using System.Web.Http;

namespace PlayGroundForWebApps.Controllers
{
    public class HomeController : ApiController
    {
        // GET api/values 
        public HttpResponseMessage Get()
        {
            var response = new HttpResponseMessage();
            var path = Path.Combine(HostingEnvironment.MapPath("~"), "index.html");
            response.Content = new StringContent(File.ReadAllText(path));
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("text/html");
            return response;
        }
    }
}
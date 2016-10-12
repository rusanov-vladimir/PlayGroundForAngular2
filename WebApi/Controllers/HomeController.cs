using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;

namespace PlayGroundForWebApps.Controllers
{
    public class HomeController : ApiController
    {
        // GET api/values 
        public HttpResponseMessage Get()
        {
            var response = new HttpResponseMessage();
            
            return response;


        }
    }
}
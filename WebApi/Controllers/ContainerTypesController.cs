using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Results;
using PlayGroundForWebApps.Models;

namespace PlayGroundForWebApps.Controllers {
    public class ContainerTypesController :ApiController {

        public static List<ContainerType> ContainerTypes = new List<ContainerType> {
            new ContainerType { Id = 1, Name = "Simple"},
            new ContainerType { Id = 2, Name = "Nested"},
            new ContainerType { Id = 3, Name = "Composite"}
        };
                // GET api/containers
        public JsonResult<List<ContainerType>> Get()
        {
            return Json(ContainerTypes);
        }
    }
}
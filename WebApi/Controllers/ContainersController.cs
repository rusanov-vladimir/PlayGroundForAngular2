using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using PlayGroundForWebApps.Models;

namespace PlayGroundForWebApps.Controllers
{
    public class ContainersController : ApiController
    {

        public static List<Container> ContainerList = new List<Container>
        {
            new Container(11, "Mr. Nice",1),
            new Container(12, "Narco",2),
            new Container(13, "Bombasto",3) {Color = "Red"},
            new Container(14, "Celeritas",1),
            new Container(15, "Magneta",2),
            new Container(16, "RubberMan",2),
            new Container(17, "Dynama",1),
            new Container(18, "Dr IQ",1),
            new Container(19, "Magma",1),
            new Container(20, "Tornado",2)
        };


        // GET api/containers
        public object Get()
        {
            return Json(new {data = ContainerList});
        }

        // GET api/containers/5 
        public object Get(int id)
        {
            return Json(new {data = ContainerList.SingleOrDefault(x => x.Id == id)});
        }

        // POST api/containers 
        public object Post(Container newContainer)
        {
            newContainer.Id = ContainerList.Max(x => x.Id) + 1;
            ContainerList.Add(newContainer);
            return Json(new {data = newContainer});
        }

        // PUT api/containers/5 
        public void Put(int id, [FromBody] Container containerToUpdate)
        {
            var container = ContainerList.SingleOrDefault(x => x.Id == id);
            if (container != null) {
                container.Name = containerToUpdate.Name;
                container.Color = containerToUpdate.Color;
                container.Type = containerToUpdate.Type;
            }
        }

        // DELETE api/containers/5 
        public void Delete(int id)
        {
            ContainerList.Remove(ContainerList.SingleOrDefault(x => x.Id == id));
        }
    }
}
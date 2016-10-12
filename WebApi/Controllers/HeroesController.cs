using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using PlayGroundForWebApps.Models;

namespace PlayGroundForWebApps.Controllers
{
    public class HeroesController : ApiController
    {
        public static List<Hero> HeroesList = new List<Hero>
        {
            new Hero(11, "Mr. Nice"),
            new Hero(12, "Narco"),
            new Hero(13, "Bombasto"),
            new Hero(14, "Celeritas"),
            new Hero(15, "Magneta"),
            new Hero(16, "RubberMan"),
            new Hero(17, "Dynama"),
            new Hero(18, "Dr IQ"),
            new Hero(19, "Magma"),
            new Hero(20, "Tornado")
        };


        // GET api/heroes
        public object Get()
        {
            return Json(new {data = HeroesList});
        }

        // GET api/heroes/5 
        public object Get(int id)
        {
            return Json(new {data = HeroesList.SingleOrDefault(x => x.Id == id)});
        }

        // POST api/heroes 
        public object Post(Hero newHero)
        {
            newHero.Id = HeroesList.Max(x => x.Id) + 1;
            HeroesList.Add(newHero);
            return Json(new {data = newHero});
        }

        // PUT api/heroes/5 
        public void Put(int id, [FromBody] Hero heroToUpdate)
        {
            var hero = HeroesList.SingleOrDefault(x => x.Id == id);
            if (hero != null) hero.Name = heroToUpdate.Name;
        }

        // DELETE api/heroes/5 
        public void Delete(int id)
        {
            HeroesList.Remove(HeroesList.SingleOrDefault(x => x.Id == id));
        }
    }
}
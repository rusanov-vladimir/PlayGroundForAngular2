using Newtonsoft.Json;

namespace PlayGroundForWebApps.Models
{
    public class Hero
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        public Hero(int id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}
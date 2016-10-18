using Newtonsoft.Json;

namespace PlayGroundForWebApps.Models
{
    public class Container
    {
        [JsonProperty(PropertyName = "id")]
        public int? Id { get; set; }
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }
        [JsonProperty(PropertyName = "type")]
        public int Type { get; set; }
        [JsonProperty(PropertyName = "color")]
        public string Color { get; set; }

        public Container(int? id, string name, int type)
        {
            Id = id;
            Name = name;
            Type = type;
        }
    }
}
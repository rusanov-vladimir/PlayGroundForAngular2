using Newtonsoft.Json;

namespace PlayGroundForWebApps.Models {
    public class ContainerType {
        [JsonProperty(PropertyName = "value")]
        public int Id { get; set; }

        [JsonProperty(PropertyName = "label")]
        public string Name { get; set; }
    }
}
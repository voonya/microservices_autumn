using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ECampus.Services.Auth.Models
{
    public class User
    {
        [Column("id")]
        [JsonPropertyName("id")]
        public string Id { get; set; } = "bd3a71ad-1630-461b-8ea9-b45eccc1215b";

        [Column("login")]
        [JsonPropertyName("login")]
        public string Login { get; set; } = "string";

        [Column("password")]
        [JsonPropertyName("password")]
        public string Password { get; set; } = "string";

        [Column("first_name")]
        [JsonPropertyName("first_name")]
        public string FirstName { get; set; } = "string";

        [Column("last_name")]
        [JsonPropertyName("last_name")]
        public string LastName { get; set; } = "string";

        [Column("birth_date")]
        [JsonPropertyName("birth_date")]
        public DateTime BirthDate { get; set; } = DateTime.Parse("2020-03-19T14:21:00+02:00");

        [Column("role_id")]
        [JsonPropertyName("role_id")]
        public string RoleId { get; set; } = "1";

        [Column("group_id")]
        [JsonPropertyName("group_id")]
        public string GroupId { get; set; } = null;

        [Column("department_id")]
        [JsonPropertyName("department_id")]
        public string DepartmentId { get; set; } = null;

        [Column("avatar_id")]
        [JsonPropertyName("avatar_id")]
        public string AvatarId { get; set; } = null;

        [Column("token_id")]
        [JsonPropertyName("token_id")]
        public string TokenId { get; set; } = null;
    }
}

using System.ComponentModel.DataAnnotations;

namespace ECampus.Services.Auth.Models
{
    public class User
    {
        [Required]
        [Key]
        public string Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }
    }
}

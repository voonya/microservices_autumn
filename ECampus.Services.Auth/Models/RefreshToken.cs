using System.ComponentModel.DataAnnotations;

namespace ECampus.Services.Auth.Models
{
    public class RefreshToken
    {
        [Key]
        public string Id { get; set; }

        [Required]
        public string UserId { get; set; }

        [Required]
        public string Token { get; set; }

        [Required]
        public DateTime Expires { get; set; }
    }
}

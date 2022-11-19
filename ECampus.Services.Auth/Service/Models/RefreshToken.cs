using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ECampus.Services.Auth.Models
{
    [Table("refreshtoken")]
    public class RefreshToken
    {
        [Key]
        [Column("id")]
        public string Id { get; set; }

        [Required]
        [Column("user_id")]
        public string UserId { get; set; }

        [Required]
        [Column("token")]
        public string Token { get; set; }

        [Required]
        [Column("expires")]
        public DateTime Expires { get; set; }
    }
}

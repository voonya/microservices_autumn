using System.ComponentModel.DataAnnotations;

namespace ECampus.Services.Auth.Dtos
{
    public class LoginUserModel
    {
        public string UserName { get; set; }

        public string Email { get; set; }

        [Required]
        public string Password { get; set; } = null!;
    }
}

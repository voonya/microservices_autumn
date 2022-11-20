using System.ComponentModel.DataAnnotations;

namespace ECampus.Services.Auth.Dtos
{
    public class RegisterUserModel
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}

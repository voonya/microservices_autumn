﻿using System.ComponentModel.DataAnnotations;

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

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public DateTime BirthDate { get; set; } = DateTime.UtcNow;

        [Required]
        public string RoleId { get; set; } = "1";
    }
}

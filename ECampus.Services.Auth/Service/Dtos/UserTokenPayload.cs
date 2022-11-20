namespace ECampus.Services.Auth.Dtos
{
    public class UserTokenPayload
    {
        public string UserId { get; set; } = null!;

        public string Token { get; set; } = null!;

        public string RefreshToken { get; set; } = null!;
    }
}

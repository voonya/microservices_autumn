using System.Text;
using System.Text.Json;
using ECampus.Services.Auth.Models;

namespace ECampus.Services.Auth.Sync
{
    public class HttpSyncClient
    {
        public async Task<User> GetUserByUsernameAsync(string username)
        {
            using HttpClient client = new();
            var res = await client.GetAsync($"http://localhost:80/api/profile/username/{username}");
            if (!res.IsSuccessStatusCode) return null;

            var jsonString = await res.Content.ReadAsStringAsync();

            return JsonSerializer.Deserialize<User>(jsonString);
        }

        public async Task<User> CreateUserAsync(User user)
        {
            using HttpClient client = new();
            string body = JsonSerializer.Serialize(user, options: new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            });
            StringContent content = new(body, Encoding.UTF8, "application/json");

            var res = await client.PostAsync("http://localhost:80/api/profile", content);
            if (!res.IsSuccessStatusCode) return null;

            var jsonString = await res.Content.ReadAsStringAsync();

            return JsonSerializer.Deserialize<User>(jsonString);
        }
    }
}

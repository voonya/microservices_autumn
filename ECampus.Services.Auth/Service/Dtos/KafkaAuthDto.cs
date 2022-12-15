namespace ECampus.Services.Auth.Dtos
{
    public class KafkaAuthDto
    {
        public string Event { get; set; }

        public DateTime Date { get; set; }

        public KafkaUserDto Data { get; set; }
    }
}

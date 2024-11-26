namespace inventory.Models;

public class AppDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string ProductCollectionName { get; set; } = null!;
    public string ReviewCollectionName { get; set; } = null!;
}
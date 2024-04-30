using System.Text.Json;
using Task1;

# region point 1

var typeNames = typeof(Vehicle).Assembly
    .GetTypes()
    .Select(x => x.Name)
    .Order()
    .ToList();

Console.WriteLine(string.Join(" ", typeNames));

#endregion

#region point 2

List<Type> Search(string name)
{
    var types = typeof(Vehicle).Assembly
        .GetTypes()
        .Where(x => x.Name.Contains(name))
        .ToList();

    return types;
}

#endregion

async Task WriteToDisk<T>(List<T> vehicles, string name)
{
    var json = JsonSerializer.Serialize(vehicles);

    await File.WriteAllTextAsync($"{name}.json", json);
}

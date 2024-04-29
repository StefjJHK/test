namespace ClassLibrary
{
    public class Car
    {
        public string Model { get; init; }

        public string Color { get; init; }

        public int MaxSpeed { get; init; }

        public Car()
        {
            Model = "Model";
            Color = "Red";
            MaxSpeed = 100;
        }
    }
}
